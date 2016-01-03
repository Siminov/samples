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

#import <Foundation/Foundation.h>
#import "SICDatabase.h"

static NSString * const TABLE_NAME = @"CONNECT-CREDENTIAL";
static NSString * const ACCOUNT_ID = @"ACCOUNT_ID";
static NSString * const CREDENTIAL_TYPE = @"CREDENTIAL_TYPE";
static NSString * const TOKEN = @"TOKEN";
static NSString * const LOGGED = @"LOGGED";

static NSString * const CREDENTIAL_TYPE_SIMINOV = @"SIMINOV";

@interface Credential : SICDatabase
{
    NSString *accountId;
    NSString *credentialType;
    NSString *token;
    NSString *logged;
}

-(NSString *)getAccountId;
-(void)setAccountId: (NSString *)accountid;

-(NSString *)getCredentialType;
-(void)setCredentialType: (NSString *)credentialtype;

-(NSString *)getToken;
-(void)setToken: (NSString *)tokenValue;

-(NSString *)getLogged;
-(void)setLogged: (NSString *)log;
-(BOOL)isLogged;

@end
