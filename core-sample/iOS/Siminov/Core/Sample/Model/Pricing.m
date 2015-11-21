//
//  Pricing.m
//  core-sample
//
//  Created by user on 13/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "Pricing.h"

@implementation Pricing

-(NSNumber *)getPriceId {
    return priceId;
}

-(void)setPriceId:(NSNumber *)priceid {
    priceId = priceid;
}

-(NSNumber *)getPrice {
    return price;
}

-(void)setPrice:(NSNumber *)prc {
    price = prc;
}

-(NSNumber *)getTax {
    return tax;
}

-(void)setTax:(NSNumber *)tx {
    tax = tx;
}

-(NSNumber *)getDiscount {
    return discount;
}

-(void)setDiscount:(NSNumber *)disc {
    discount = disc;
}

-(LiquorBrand *)getLiquorBrand {
    return liquorBrand;
}

-(void)setLiquorBrand:(LiquorBrand *)brand {
    liquorBrand = brand;
}


@end
