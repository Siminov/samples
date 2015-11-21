//
//  RegisterDevice.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "RegisterDevice.h"
#import "SIKIConnectionResponse.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-NOTIFICATION-SERVICE";
static NSString * const REQUEST_NAME = @"REGISTER-DEVICE";

@implementation RegisterDevice

- (id)init {
    
    if (self = [super init]) {
        [self setService:SERVICE_NAME];
        [self setRequest:REQUEST_NAME];
    }
    return self;
}

- (void)onStart {
    
}

- (void)onQueue {
    
}

- (void)onPause {
    
}

- (void)onResume {
    
}

- (void)onFinish {
    
}

- (void)onRequestInvoke:(id<SIKIConnectionRequest>)connectionRequest {
}

- (void)onRequestFinish:(id<SIKIConnectionResponse>)connectionResponse {
}

- (void)onTerminate:(SIKServiceException *)serviceException {
}

@end
