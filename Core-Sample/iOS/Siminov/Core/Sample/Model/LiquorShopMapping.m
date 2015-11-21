//
//  LiquorShopMapping.m
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "LiquorShopMapping.h"

@implementation LiquorShopMapping

-(Liquor *)getLiquor {
    return liquor;
}

-(void)setLiquor:(Liquor *)liq {
    liquor = liq;
}


-(Shop *)getShop {
    return shop;
}

-(void)setShop:(Shop *)shp {
    shop = shp;
}


@end
