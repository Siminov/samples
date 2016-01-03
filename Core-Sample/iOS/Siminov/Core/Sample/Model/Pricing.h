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

#import "SICDatabase.h"

@class Book;

//Table Name
static NSString * const PRICING_TABLE_NAME = @"PRICING";

//Column Names
static NSString * const PRICE_ID = @"PRICE_ID";
static NSString * const PRICE = @"PRICE";
static NSString * const TAX = @"TAX";
static NSString * const DISCOUNT = @"DISCOUNT";


@interface Pricing : SICDatabase
{
    //Variables
    NSNumber *priceId;
    NSNumber *price;
    NSNumber *tax;
    NSNumber *discount;
    
    Book *book;
}

//Methods
-(NSNumber *)getPriceId;
-(void)setPriceId:(NSNumber *)priceid;

-(NSNumber *)getPrice;
-(void)setPrice:(NSNumber *)prc;

-(NSNumber *)getTax;
-(void)setTax:(NSNumber *)tx;

-(NSNumber *)getDiscount;
-(void)setDiscount:(NSNumber *)disc;

-(Book *)getBook;
-(void)setBook:(Book *)bk;


@end
