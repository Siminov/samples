//
//  GetLiquors.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "GetLiquors.h"
#import "SIKIConnectionResponse.h"
#import "Liquor.h"
#import "LiquorsReader.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-LIQUORS-SERVICE";
static NSString * const REQUEST_NAME = @"GET-LIQUORS";

@implementation GetLiquors


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
   
    if ([connectionResponse getResponse] == nil) {
        return;
    }
    
    LiquorsReader *liquorsReader = [[LiquorsReader alloc]initWithData:[connectionResponse getResponse]];
    NSEnumerator *liquors = [liquorsReader getLiquors];
    
    Liquor *liquorObject;
    while (liquorObject = [liquors nextObject]) {
        
        @try {
            [liquorObject saveOrUpdate];
        }
        @catch (SICDatabaseException *exception) {
            [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiFinish" message:[NSString stringWithFormat:@"Database Exception caught while saving liquors in database, %@",[exception reason]]];
        }
    }
}

- (void)onTerminate:(SIKServiceException *)serviceException {
}

@end
