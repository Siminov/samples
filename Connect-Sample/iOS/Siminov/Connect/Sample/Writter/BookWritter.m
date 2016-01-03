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


#import "BookWritter.h"
#import "Constants.h"
#import "Lession.h"

@implementation BookWritter

- (NSData *)build:(Book *)book {
    
    NSString *title = [book getTitle];
    NSString *description = [book getDescription];
    NSString *author = [book getAuthor];
    NSString *link = [book getLink];
    
    NSEnumerator *lessions = [book getLessions];
    
    NSMutableString *data = [[NSMutableString alloc]init];
    [data appendString:[NSString stringWithFormat:@"<%@>",ADD_BOOK_WS_BOOK]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_BOOK_TITLE, title,ADD_BOOK_WS_BOOK_TITLE]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_BOOK_DESCRIPTION,description,ADD_BOOK_WS_BOOK_DESCRIPTION]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_BOOK_AUTHOR, author,ADD_BOOK_WS_BOOK_AUTHOR]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_BOOK_LINK,link,ADD_BOOK_WS_BOOK_LINK]];
    
    [data appendString:[NSString stringWithFormat:@"<%@>",ADD_BOOK_WS_LESSIONS]];
    
    Lession *lession;
    while(lession = [lessions nextObject]) {
        
        NSString *name = [lession getName];
        NSString *description = [lession getDescription];
        NSString *link = [lession getLink];
        
        [data appendString:[NSString stringWithFormat:@"<%@>",ADD_BOOK_WS_LESSION]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_LESSION_NAME,name,ADD_BOOK_WS_LESSION_NAME]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_LESSION_DESCRIPTION,description,ADD_BOOK_WS_LESSION_DESCRIPTION]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_BOOK_WS_LESSION_LINK,link,ADD_BOOK_WS_LESSION_LINK]];
        [data appendString:[NSString stringWithFormat:@"<%@>",ADD_BOOK_WS_LESSION]];
        
    }
    
    [data appendString:[NSString stringWithFormat:@"</%@/>",ADD_BOOK_WS_LESSIONS]];
    [data appendString:[NSString stringWithFormat:@"</%@/>",ADD_BOOK_WS_LESSION]];
    
    return [(NSString *)data dataUsingEncoding:NSUTF8StringEncoding];
}

@end
