///
/// [SIMINOV FRAMEWORK]
/// Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


#import "CredentialAPI.h"
#import "SICISelectClause.h"

@implementation CredentialAPI

- (void)createAccount: (NSString *)accountId token:(NSString *)token {
    
    Credential *credential = [[Credential alloc] init];
    [credential setCredentialType:CREDENTIAL_TYPE_SIMINOV];
    [credential setAccountId:accountId];
    [credential setToken:token];
    [credential setLogged:@"true"];
    
    [credential save];
}

- (BOOL)authenticateCredential: (NSString *)accountId token:(NSString *)token {
    
    NSArray *credentials = (NSArray *)[[[[[[Credential alloc] init] select] where:ACCOUNT_ID] equalTo:accountId] execute];

    if (credentials == nil || [credentials count] <=0) {
        [SICLog important:NSStringFromClass([self class]) methodName:@"authenticateCredential" message:[NSString stringWithFormat:@"NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: %@",accountId]];
        
        @throw [[SICDatabaseException alloc] initWithClassName:NSStringFromClass([self class]) methodName:@"authenticateCredential" message:[NSString stringWithFormat:@"NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: %@",accountId]];
    }
    
    return [[credentials[0] getToken] isEqualToString:token];
}

- (BOOL)isAccountPresent {
    @try {
        NSInteger noOfCredentials = [[[[[Credential alloc] init] count] execute] integerValue];
        return noOfCredentials > 0 ? true: false;
    }
    @catch (SICDatabaseException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"isAccountPresent" message:[exception getMessage]];
    }
    
}

@end
