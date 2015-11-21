//
//  LiquorWritter.h
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Liquor.h"

@interface LiquorWritter : NSObject

- (NSData *)build:(Liquor *)liquor;

@end
