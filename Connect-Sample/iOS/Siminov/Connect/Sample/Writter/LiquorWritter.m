//
//  LiquorWritter.m
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "LiquorWritter.h"
#import "Constants.h"
#import "LiquorBrand.h"

@implementation LiquorWritter

- (NSData *)build:(Liquor *)liquor {
    
    NSString *liquorType = [liquor getLiquorType];
    NSString *description = [liquor getDescription];
    NSString *history = [liquor getHistory];
    NSString *link = [liquor getLink];
    NSString *alcholContent = [liquor getAlcholContent];
    
    NSEnumerator *liquorBrands = [liquor getLiquorBrands];

    NSMutableString *data = [[NSMutableString alloc]init];
    [data appendString:[NSString stringWithFormat:@"<%@>",ADD_LIQUOR_WS_LIQUOR]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_LIQUOR_NAME,liquorType,ADD_LIQUOR_WS_LIQUOR_NAME]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_LIQUOR_DESCRIPTION,description,ADD_LIQUOR_WS_LIQUOR_DESCRIPTION]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_LIQUOR_HISTORY,history,ADD_LIQUOR_WS_LIQUOR_HISTORY]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_LIQUOR_LINK,link,ADD_LIQUOR_WS_LIQUOR_LINK]];
    [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT,alcholContent,ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT]];
    
    [data appendString:[NSString stringWithFormat:@"<%@>",ADD_LIQUOR_WS_BRANDS]];
    
    LiquorBrand *liquorBrand;
    while(liquorBrand = [liquorBrands nextObject]) {
        
        NSString *brandName = [liquorBrand getBrandName];
        NSString *brandDescription = [liquorBrand getDescription];
        NSString *brandLink = [liquorBrand getLink];
        NSString *country = [liquorBrand getCountry];
        
        [data appendString:[NSString stringWithFormat:@"<%@>",ADD_LIQUOR_WS_BRAND]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_BRAND_NAME,brandName,ADD_LIQUOR_WS_BRAND_NAME]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_BRAND_DESCRIPTION,brandDescription,ADD_LIQUOR_WS_BRAND_DESCRIPTION]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_BRAND_LINK,brandLink,ADD_LIQUOR_WS_BRAND_LINK]];
        [data appendString:[NSString stringWithFormat:@"<%@>%@</%@/>",ADD_LIQUOR_WS_BRAND_COUNTRY,country,ADD_LIQUOR_WS_BRAND_COUNTRY]];
        [data appendString:[NSString stringWithFormat:@"<%@>",ADD_LIQUOR_WS_BRAND]];
        
    }
    
    [data appendString:[NSString stringWithFormat:@"</%@/>",ADD_LIQUOR_WS_BRANDS]];
    [data appendString:[NSString stringWithFormat:@"</%@/>",ADD_LIQUOR_WS_LIQUOR]];
    
    return [(NSString *)data dataUsingEncoding:NSUTF8StringEncoding];
}

@end
