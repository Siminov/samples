//
//  GetBooks.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "GetBooks.h"
#import "SIKIConnectionResponse.h"
#import "Book.h"
#import "Lession.h"
#import "BooksReader.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-BOOKS-SERVICE";
static NSString * const REQUEST_NAME = @"GET-BOOKS";

@implementation GetBooks


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
    
    BooksReader *booksReader = [[BooksReader alloc]initWithData:[connectionResponse getResponse]];
    NSEnumerator *books = [booksReader getBooks];
    
    Book *bookObject;
    while (bookObject = [books nextObject]) {
        
        @try {
            [bookObject saveOrUpdate];
        }
        @catch (SICDatabaseException *exception) {
            [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiFinish" message:[NSString stringWithFormat:@"Database Exception caught while saving books in database, %@",[exception reason]]];
        }
    }
}

- (void)onTerminate:(SIKServiceException *)serviceException {
}

@end
