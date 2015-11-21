//
//  LiquorsReader.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "LiquorsReader.h"
#import "Constants.h"

@implementation LiquorsReader

- (id)initWithData:(NSData * const)data {
    
    liquors = [[NSMutableArray alloc]init];
    tempValue = [[NSMutableString alloc] init];
    
    if (data == nil) {
        return self;
    }
    
    @try {
        [self parseMessage:data];
    }
    @catch (NSException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing Liquors, %@",[exception reason]]];
        @throw [[SICDeploymentException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing Liquors, %@",[exception reason]]];
    }
    return self;
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict {
    
    tempValue = [[NSMutableString alloc] init];
    
    if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR] == NSOrderedSame) {
        liquor = [[Liquor alloc] init];
    }
}

- (void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string {
    tempValue = (NSMutableString *)[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName {
    
    if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR] == NSOrderedSame) {
        [liquors addObject:liquor];
    } else if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR_NAME] == NSOrderedSame) {
        [liquor setLiquorType:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR_DESCRIPTION] == NSOrderedSame) {
        [liquor setDescription:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR_HISTROY] == NSOrderedSame) {
        [liquor setHistory:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR_LINK] == NSOrderedSame) {
        [liquor setLink:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LIQUORS_WS_LIQUOR_ALCHOL_CONTENT] == NSOrderedSame) {
        [liquor setAlcholContent:(NSString *)tempValue];
    }
}

- (NSEnumerator *)getLiquors {
    return [liquors objectEnumerator];
}

@end
