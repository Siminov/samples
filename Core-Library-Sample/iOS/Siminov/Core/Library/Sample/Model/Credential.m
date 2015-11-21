///
/// [SIMINOV FRAMEWORK]
/// Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
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

#import "Credential.h"

@implementation Credential

-(NSString *)getAccountId {
    return accountId;
}

-(void)setAccountId: (NSString *)accountid {
    accountId = accountid;
}

-(NSString *)getCredentialType {
    return credentialType;
}

-(void)setCredentialType: (NSString *)credentialtype {
    credentialType = credentialtype;
}

-(NSString *)getToken {
    return token;
}

-(void)setToken: (NSString *)tokenValue {
    token = tokenValue;
}

-(NSString *)getLogged {
    return logged;
}

-(void)setLogged: (NSString *)log {
    logged = log;
}

-(BOOL)isLogged {
    NSString *log = [self getLogged];
    if (log == nil || log.length<=0) {
        return false;
    }
    
    if ([log caseInsensitiveCompare:@"true"] == NSOrderedSame) {
        return true;
    }
    
    return false;
}

@end
