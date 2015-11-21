//
//  Credential.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "Credential.h"

@implementation Credential

- (NSString *)getAccountId {
    return accountId;
}

- (void)setAccountId:(NSString *) accountid {
    accountId = accountid;
}

- (NSString *)getToken {
    return token;
}

- (void)setToken:(NSString *)tok {
    token = tok;
}

- (BOOL)getActive {
    return active;
}

- (BOOL)isActive {
    return active;
}

- (void)setActive:(BOOL)act {
    active = act;
}

@end
