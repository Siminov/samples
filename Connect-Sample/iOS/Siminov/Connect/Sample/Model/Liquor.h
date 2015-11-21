///
/// [SIMINOV FRAMEWORK]
/// Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
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
#import "LiquorBrand.h"

//Table Name
static NSString * const LIQUOR_TABLE_NAME = @"LIQUOR";

//Column Names
static NSString * const LIQUOR_LIQUOR_TYPE = @"LIQUOR_TYPE";
static NSString * const LIQUOR_DESCRIPTION = @"DESCRIPTION";
static NSString * const LIQUOR_HISTORY = @"HISTORY";
static NSString * const LIQUOR_LINK = @"LINK";
static NSString * const LIQUOR_ALCHOL_CONTENT = @"ALCHOL_CONTENT";

//Liquor Types
static NSString * const LIQUOR_TYPE_GIN = @"Gin";
static NSString * const LIQUOR_TYPE_RUM = @"Rum";
static NSString * const LIQUOR_TYPE_TEQUILA = @"Tequila";
static NSString * const LIQUOR_TYPE_VODKA = @"Vodka";
static NSString * const LIQUOR_TYPE_WHISKEY = @"Whiskey";
static NSString * const LIQUOR_TYPE_BEER = @"Beer";
static NSString * const LIQUOR_TYPE_WINE = @"Wine";

@interface Liquor : SICDatabase
{
    //Variables
    NSString *liquorType;
    NSString *description;
    NSString *history;
    NSString * link;
    NSString *alcholContent;
    NSMutableArray *liquorBrands;
}

//Methods
-(NSString *)getLiquorType;
-(void)setLiquorType:(NSString *)liquortype;

-(NSString *)getDescription;
-(void)setDescription: (NSString *)desc;

-(NSString *)getHistory;
-(void)setHistory: (NSString *)his;

-(NSString *)getLink;
-(void)setLink: (NSString *)lin;

-(NSString *)getAlcholContent;
-(void)setAlcholContent: (NSString *)alcholcontent;

-(NSEnumerator *)getLiquorBrands;
-(void)setLiquorBrands: (NSEnumerator *)liquorbrands;
-(void)addLiquorBrands: (LiquorBrand *)liquorbrand;

@end
