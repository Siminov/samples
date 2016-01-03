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


#import "AddBook.h"
#import "SIKIConnectionRequest.h"
#import "Book.h"
#import "SICDatabaseException.h"
#import "BookWritter.h"
#import "SICISelectClause.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-BOOKS-SERVICE";
static NSString * const REQUEST_NAME = @"ADD-BOOK";

static NSString * const BOOK = @"BOOK";

@implementation AddBook

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
    if ([connectionRequest getDataStream] == nil) {
        return;
    }
    
    NSString *bookTitle = (NSString *) [self getResource:BOOK];
    Book *book = nil;
    
    @try {
        
        NSArray *books = (NSArray *)[[[[[[Book alloc] init] select] where:BOOK_TITLE] equalTo:bookTitle] execute];
        if(books != nil && books.count > 0) {
            book = books[0];
        }
    } @catch(SICDatabaseException *de) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiInvoke" message:[NSString stringWithFormat:@"Database Exception caught while getting book from database, %@",[de reason]]];
        return;
    }
    
    BookWritter *bookWritter = [[BookWritter alloc]init];
    NSData *dataStream = [bookWritter build:book];
    
    [connectionRequest setDataStream:dataStream];
}

@end
