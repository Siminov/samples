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
