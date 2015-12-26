//
//  BooksReader.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "BooksReader.h"
#import "Constants.h"

@implementation BooksReader

- (id)initWithData:(NSData * const)data {
    
    books = [[NSMutableArray alloc]init];
    tempValue = [[NSMutableString alloc] init];
    
    if (data == nil) {
        return self;
    }
    
    @try {
        [self parseMessage:data];
    }
    @catch (NSException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing books, %@",[exception reason]]];
        @throw [[SICDeploymentException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing books, %@",[exception reason]]];
    }
    return self;
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict {
    
    tempValue = [[NSMutableString alloc] init];
    
    if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK] == NSOrderedSame) {
        book = [[Book alloc] init];
    }
}

- (void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string {
    tempValue = (NSMutableString *)[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName {
    
    if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK] == NSOrderedSame) {
        [books addObject:book];
    } else if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK_TITLE] == NSOrderedSame) {
        [book setTitle:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK_DESCRIPTION] == NSOrderedSame) {
        [book setDescription:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK_AUTHOR] == NSOrderedSame) {
        [book setAuthor:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_BOOKS_WS_BOOK_LINK] == NSOrderedSame) {
        [book setLink:(NSString *)tempValue];
    }
}

- (NSEnumerator *)getBooks {
    return [books objectEnumerator];
}

@end
