//
//  Credential.h
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICDatabase.h"

//Column Names
static NSString * const ACCOUNT_ID = @"ACCOUNT_ID";
static NSString * const TOKEN = @"TOKEN";
static NSString * const ACTIVE = @"ACTIVE";

@interface Credential : SICDatabase {
    NSString *accountId;
    NSString *token;
    BOOL active;
}

- (NSString *)getAccountId;
- (void)setAccountId:(NSString *) accountid;
- (NSString *)getToken;
- (void)setToken:(NSString *)tok;
- (BOOL)getActive;
- (BOOL)isActive;
- (void)setActive:(BOOL)act;

@end
