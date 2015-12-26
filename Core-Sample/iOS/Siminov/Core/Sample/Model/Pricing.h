//
//  Pricing.h
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

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
