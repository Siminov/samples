//
//  Shop.h
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SICDatabase.h"

//Table Name
static NSString * const SHOP_TABLE_NAME = @"SHOP";

//Column Names
static NSString * const SHOP_ID = @"SHOP_ID";
static NSString * const NAME = @"NAME";
static NSString * const ADDRESS = @"ADDRESS";


@interface Shop : SICDatabase
{
    //Variables
    NSNumber *shopId;
    NSString *name;
    NSString *address;
}


//Methods
-(NSNumber *)getShopId;
-(void)setShopId:(NSNumber *)shop;

-(NSString *)getName;
-(void)setName:(NSString *)shopName;

-(NSString *)getAddress;
-(void)setAddress:(NSString *)shopAddress;

@end
