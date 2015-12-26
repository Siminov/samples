//
//  DeleteBook.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "DeleteBook.h"
#import "SIKIConnectionResponse.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-BOOKS-SERVICE";
static NSString * const REQUEST_NAME = @"DELETE-BOOK";

static NSString * const BOOK_TITLE = @"BOOK_TITLE";

@implementation DeleteBook

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
