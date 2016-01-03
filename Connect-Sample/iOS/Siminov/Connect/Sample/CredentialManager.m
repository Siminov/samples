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



#import "CredentialManager.h"
#import "SICClassUtils.h"
#import "SICICountClause.h"
#import "SICISelectClause.h"
#import "Credential.h"

static CredentialManager *credentialManager = nil;
Credential *activeCredential = nil;

@implementation CredentialManager

+ (CredentialManager *)getInstance {
    
    if(!credentialManager) {
        credentialManager = [[super allocWithZone:NULL] init];
    }
    
    return credentialManager;
}

- (BOOL)isAnyActiveCredential {
    Credential *credential = (Credential *)[SICClassUtils createClassInstance:NSStringFromClass([Credential class])];
    
    if (credential == nil) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
    }
    
    int activeAccountCount = 0;
    
    @try {
        activeAccountCount = [[[[[credential count] where:ACTIVE] equalTo:@"true"] execute] intValue];
    }
    @catch (SICSiminovException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
    }
    
    if (activeAccountCount <= 0) {
        return false;
    } else {
        return true;
    }
}

- (Credential *)getActiveCredential {
    Credential *credential = [SICClassUtils createClassInstance:NSStringFromClass([self class])];
    
    if (credential == nil) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
    }
    
    if (activeCredential != nil) {
        return activeCredential;
    }
    
    NSArray *credentials = nil;
    @try {
        credentials = [[[[credential count] where:ACTIVE] equalTo:@"true"] execute];
    }
    @catch (SICSiminovException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"isAnyActiveCredential" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
    }
    
    if (credentials == nil || credentials.count <= 0) {
       [SICLog error:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"No Account Found."];
    }
    
    if (credentials.count>1) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"More Then One Active Account Found."];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"More Then One Active Account Found."];
    }
    
    activeCredential = credentials[0];
    return activeCredential;
}

- (NSEnumerator *)getCredentails {
    Credential *credential = [SICClassUtils createClassInstance:NSStringFromClass([Credential class])];
   
    if (credential == nil) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"getActiveCredential" message:@"NO USER DEFINED CREDENTIAL."];
    }
    
    NSArray *credentials = nil;
    @try {
        credentials = [[[[credential select] where:ACTIVE] equalTo:@"true"] execute];
    }
    @catch (SICSiminovException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getCredentials" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
        @throw [[SICSiminovCriticalException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"getCredentials" message:[NSString stringWithFormat:@"SiminovException caught while getting active account count, %@",[exception getMessage]]];
    }
    
    if (credentials == nil || credentials.count <= 0) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getCredentials" message:@"No Account Found."];
        return [[NSEnumerator alloc]init];
    }
    
    NSMutableArray *accounts = [[NSMutableArray alloc]init];
    for (int i = 0; i<[credentials count]; i++) {
        [accounts addObject:credentials[i]];
    }
    
    return [accounts objectEnumerator];
}

- (void)setActiveCredential:(Credential *)credential {

}


@end
