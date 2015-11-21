//
//  Shop.m
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "Shop.h"

@implementation Shop

-(NSNumber *)getShopId {
    return shopId;
}

-(void)setShopId:(NSNumber *)shop {
    shopId = shop;
}


-(NSString *)getName {
    return name;
}

-(void)setName:(NSString *)shopName {
    name = shopName;
}


-(NSString *)getAddress {
    return address;
}

-(void)setAddress:(NSString *)shopAddress {
    address = shopAddress;
}


@end
