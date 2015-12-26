//
//  BooksReader.h
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICSiminovSAXDefaultHandler.h"
#import "Book.h"

@interface BooksReader : SICSiminovSAXDefaultHandler {
    NSMutableArray *books;
    Book *book;
    
    NSMutableString *tempValue;
}

- (id)initWithData:(NSData * const)data;;
- (NSEnumerator *)getBooks;

@end
