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

#import <Foundation/Foundation.h>
#import "SICDatabase.h"

//Table Name
static NSString * const BOOK_TABLE_NAME = @"BOOK";

//Column Names
static NSString * const BOOK_TITLE = @"TITLE";
static NSString * const BOOK_DESCRIPTION = @"DESCRIPTION";
static NSString * const BOOK_AUTHOR = @"AUTHOR";
static NSString * const BOOK_LINK = @"LINK";

//Book Types
static NSString * const BOOK_TYPE_C = @"C";
static NSString * const BOOK_TYPE_C_PLUS = @"C++";
static NSString * const BOOK_TYPE_C_SHARP = @"C#";
static NSString * const BOOK_TYPE_JAVA = @"Java";
static NSString * const BOOK_TYPE_JAVASCRIPT = @"JavaScript";
static NSString * const BOOK_TYPE_OBJECTIVEC = @"Objective C";
static NSString * const BOOK_TYPE_SWIFT = @"Swift";

@interface Book : SICDatabase
{
    //Variables
    NSString *title;
    NSString *description;
    NSString *author;
    NSString *link;
    
    NSMutableArray *lessions;
}

//Methods
-(NSString *)getTitle;
-(void)setTitle:(NSString *)tit;

-(NSString *)getDescription;
-(void)setDescription: (NSString *)desc;

-(NSString *)getAuthor;
-(void)setAuthor: (NSString *)aut;

-(NSString *)getLink;
-(void)setLink: (NSString *)lin;

-(NSEnumerator *)getLessions;
-(void)setLessions: (NSEnumerator *)lessions;

@end
