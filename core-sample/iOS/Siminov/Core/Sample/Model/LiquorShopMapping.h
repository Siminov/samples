//
//  LiquorShopMapping.h
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICDatabase.h"

#import "Liquor.h"
#import "Shop.h"

//Table Name
static NSString * const LIQUOR_SHOP_MAPPING_TABLE_NAME = @"LIQUOR_SHOP_MAPPING";


@interface LiquorShopMapping : SICDatabase
{
    //Variables
    Liquor *liquor;
    Shop *shop;
}

//Method Names
-(Liquor *)getLiquor;
-(void)setLiquor:(Liquor *)liquor;

-(Shop *)getShop;
-(void)setShop:(Shop *)shop;

@end
