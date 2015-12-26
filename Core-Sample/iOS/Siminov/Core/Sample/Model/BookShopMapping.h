//
//  Lession.h
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICDatabase.h"

#import "Book.h"
#import "Shop.h"

//Table Name
static NSString * const BOOK_SHOP_MAPPING_TABLE_NAME = @"BOOK_SHOP_MAPPING";


@interface BookShopMapping : SICDatabase
{
    //Variables
    Book *book;
    Shop *shop;
}

//Method Names
-(Book *)getBook;
-(void)setBook:(Book *)bk;

-(Shop *)getShop;
-(void)setShop:(Shop *)shop;

@end
