//
//  Lession.m
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "BookShopMapping.h"

@implementation BookShopMapping

-(Book *)getBook {
    return book;
}

-(void)setBook:(Book *)bk {
    book = bk;
}


-(Shop *)getShop {
    return shop;
}

-(void)setShop:(Shop *)shp {
    shop = shp;
}


@end
