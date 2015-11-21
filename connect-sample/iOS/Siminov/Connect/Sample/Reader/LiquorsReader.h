//
//  LiquorsReader.h
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICSiminovSAXDefaultHandler.h"
#import "Liquor.h"

@interface LiquorsReader : SICSiminovSAXDefaultHandler {
    NSMutableArray *liquors;
    Liquor *liquor;
    
    NSMutableString *tempValue;
}

- (id)initWithData:(NSData * const)data;;
- (NSEnumerator *)getLiquors;

@end
