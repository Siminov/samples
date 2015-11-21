//
//  LiquorBrandsReader.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "LiquorBrandsReader.h"
#import "SICLog.h"
#import "SICDeploymentException.h"
#import "Constants.h"

@implementation LiquorBrandsReader

- (id)init {
    self = [super init];
    
    if(self) {
        liquorBrands = [[NSMutableArray alloc]init];
        tempValue = [[NSMutableString alloc] init];
        
        return self;
    }
    
    return self;
}

- (id)initWithData:(NSData * const)data {
    
    if (data == nil) {
        return self;
    }
    
    @try {
        liquorBrands = [[NSMutableArray alloc]init];
        [self parseMessage:data];
    }
    @catch (NSException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing Liquor Brands, %@",[exception reason]]];
        @throw [[SICDeploymentException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing Liquor Brands, %@",[exception reason]]];
    }
    return self;
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict {
    
    tempValue = [[NSMutableString alloc] init];
    
    if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND] == NSOrderedSame) {
        liquorBrand = [[LiquorBrand alloc] init];
    }
}

- (void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string {
    tempValue = (NSMutableString *)[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName {
    
    if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND] == NSOrderedSame) {
        [liquorBrands addObject:liquorBrand];
    } else if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND_NAME] == NSOrderedSame) {
        [liquorBrand setBrandName:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND_COUNTRY] == NSOrderedSame) {
        [liquorBrand setCountry:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND_DESCRIPTION] == NSOrderedSame) {
        [liquorBrand setDescription:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUOR_BRANDS_WS_BRAND_LINK] == NSOrderedSame) {
        [liquorBrand setLink:(NSString *)tempValue];
    }
}

- (NSEnumerator *)getLiquorBrands {
    return [liquorBrands objectEnumerator];
}

@end
