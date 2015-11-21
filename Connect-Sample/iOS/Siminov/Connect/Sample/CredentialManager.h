//
//  CredentialManager.h
//  connect-sample
//
//  Created by Geetika on 31/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Credential.h"

@interface CredentialManager : NSObject

+ (CredentialManager *)getInstance;
- (BOOL)isAnyActiveCredential;
- (Credential *)getActiveCredential;
- (NSEnumerator *)getCredentails;
- (void)setActiveCredential:(Credential *)credential;

@end
