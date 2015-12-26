//
//  LessionsReader.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "LessionsReader.h"
#import "SICLog.h"
#import "SICDeploymentException.h"
#import "Constants.h"

@implementation LessionsReader

- (id)init {
    self = [super init];
    
    if(self) {
        lessions = [[NSMutableArray alloc]init];
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
        lessions = [[NSMutableArray alloc]init];
        [self parseMessage:data];
    }
    @catch (NSException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing lessions, %@",[exception reason]]];
        @throw [[SICDeploymentException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing lessions, %@",[exception reason]]];
    }
    return self;
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict {
    
    tempValue = [[NSMutableString alloc] init];
    
    if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION] == NSOrderedSame) {
        lession = [[Lession alloc] init];
    }
}

- (void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string {
    tempValue = (NSMutableString *)[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName {
    
    if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION] == NSOrderedSame) {
        [lessions addObject:lession];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_NAME] == NSOrderedSame) {
        [lession setName:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_DESCRIPTION] == NSOrderedSame) {
        [lession setDescription:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_LINK] == NSOrderedSame) {
        [lession setLink:(NSString *)tempValue];
    }
}

- (NSEnumerator *)getLessions {
    return [lessions objectEnumerator];
}

@end
