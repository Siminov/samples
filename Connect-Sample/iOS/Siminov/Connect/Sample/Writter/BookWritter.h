//
//  BookWritter.h
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Book.h"

@interface BookWritter : NSObject

- (NSData *)build:(Book *)book;

@end
