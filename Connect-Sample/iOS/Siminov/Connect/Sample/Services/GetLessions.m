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


#import "GetLessions.h"
#import "SIKIConnectionResponse.h"
#import "Book.h"
#import "LessionsReader.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-LESSIONS-SERVICE";
static NSString * const REQUEST_NAME = @"GET-LESSIONS";

static NSString * const BOOK_BOOK_TITLE = @"BOOK_TITLE";
static NSString * const BOOK = @"BOOK";

@implementation GetLessions

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
    
    Book *book = [self getResource:@"BOOK"];
    LessionsReader *lessionsReader = [[LessionsReader alloc]initWithData:[connectionResponse getResponse]];
    NSEnumerator *lessions = [lessionsReader getLessions];
    
    
    Lession *lession;
    while (lession = [lessions nextObject]) {
        [lession setBook:book];
        
        @try {
            [lession saveOrUpdate];
        }
        @catch (SICDatabaseException *exception) {
            [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiFinish" message:[NSString stringWithFormat:@"Database Exception caught while saving lessions in database, %@",[exception reason]]];
        }
    }
    //((BookDetail) uiComponent).refresh();
}

- (void)onTerminate:(SIKServiceException *)serviceException {
}

@end
