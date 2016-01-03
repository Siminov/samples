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
#import "Book.h"

//Table Name
static NSString * const LESSION_TABLE_NAME = @"LESSION";

//Column Names
static NSString * const LESSION_BOOK_TITLE = @"TITLE";
static NSString * const LESSION_BRAND_NAME = @"NAME";
static NSString * const LESSION_DESCRIPTION = @"DESCRIPTION";
static NSString * const LESSION_LINK = @"LINK";

//Lessions

/*
 * C Book Lessions
 */
static NSString * const C_FIRST_LESSION = @"C First Lession";
static NSString * const C_SECOND_LESSION = @"C Second Lession";


/*
 * C++ Lessions
 */
static NSString * const C_PLUS_FIRST_LESSION = @"C++ First Lession";
static NSString * const C_PLUS_SECOND_LESSION = @"C++ Second Lession";


/*
 * C# Lessions
 */
static NSString * const C_SHARP_FIRST_LESSION = @"C# First Lession";
static NSString * const C_SHARP_SECOND_LESSION = @"C# Second Lession";


/*
 * Java Lessions
 */
static NSString * const JAVA_FIRST_LESSION = @"Java First Lession";
static NSString * const JAVA_SECOND_LESSION = @"Java Second Lession";


//JavaScript Lessions
static NSString * const JAVASCRIPT_FIRST_LESSION = @"JavaScript First Lession";
static NSString * const JAVASCRIPT_SECOND_LESSION = @"JavaScript Second Lession";


//Objective C Lessions
static NSString * const OBJECTIVEC_FIRST_LESSION = @"Objective C First Lession";
static NSString * const OBJECTIVEC_SECOND_LESSION = @"Objective C Second Lession";


//Swift Lessions
static NSString * const SWIFT_FIRST_LESSION = @"Swift First Lession";
static NSString * const SWIFT_SECOND_LESSION = @"Swift Second Lession";

@interface Lession : SICDatabase
{
    //Variables
    Book *book;
    NSString *name;
    NSString *description;
    NSString *link;
}

//Methods
-(Book *)getBook;
-(void)setBook:(Book *)bk;

-(NSString *)getName;
-(void)setName: (NSString *)nme;

-(NSString *)getDescription;
-(void)setDescription: (NSString *)desc;

-(NSString *)getLink;
-(void)setLink: (NSString *)lin;

@end
