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

@class Liquor;

//Table Name
static NSString * const LIQUOR_BRAND_TABLE_NAME = @"LIQUOR_BRAND";

//Column Names
static NSString * const LIQUOR_BRAND_LIQUOR_TYPE = @"LIQUOR_TYPE";
static NSString * const LIQUOR_BRAND_BRAND_NAME = @"BRAND_NAME";
static NSString * const LIQUOR_BRAND_DESCRIPTION = @"DESCRIPTION";
static NSString * const LIQUOR_BRAND_LINK = @"LINK";
static NSString * const LIQUOR_BRAND_COUNTRY = @"COUNTRY";

//Brands

/*
 * Gin Brands
 */
static NSString * const GIN_BRAND_THE_BOTANIST = @"The Botanist";
static NSString * const GIN_BRAND_TANQUERAY = @"Tanqueray";


/*
 * Rum Brands
 */
static NSString * const RUM_BRAND_BACARDI = @"Bacardi";
static NSString * const RUM_BRAND_OLD_MONK = @"Old Monk";


/*
 * Tequila Brands
 */
static NSString * const TEQUILA_BRAND_PATRON = @"Patron";
static NSString * const TEQUILA_BRAND_SAUZA = @"Sauza";


/*
 * Vodka Brands
 */
static NSString * const VODKA_BRAND_SMIRNOFF = @"Smirnoff";
static NSString * const VODKA_BRAND_ABSOLUT = @"";


//Whiskey - Bourbons Brands
static NSString * const WHISKEY_BRAND_JOHNNIE_WALKER = @"Johnnie Walker";
static NSString * const WHISKEY_BRAND_JACK_DANIELS = @"Jack Daniels";


//Beer Brands
static NSString * const BEER_BRAND_KINGFISHER = @"Kingfisher";
static NSString * const BEER_BRAND_HEINEKEN = @"Heineken";


//Wine Brands
static NSString * const WINE_BRAND_YELLOW_TAIL = @"Yellow Tail";
static NSString * const WINE_BRAND_GALLO = @"Gallo";

@interface LiquorBrand : SICDatabase
{
    //Variables
    Liquor *liquor;
    NSString *brandName;
    NSString *description;
    NSString * link;
    NSString *country;
}

//Methods
-(Liquor *)getLiquor;
-(void)setLiquor:(Liquor *)liq;

-(NSString *)getBrandName;
-(void)setBrandName: (NSString *)brand;

-(NSString *)getDescription;
-(void)setDescription: (NSString *)desc;

-(NSString *)getLink;
-(void)setLink: (NSString *)lin;

-(NSString *)getCountry;
-(void)setCountry: (NSString *)coun;

@end
