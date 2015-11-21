//
//  LiquorAndLiquorBrandJoin.h
//  core-sample
//
//  Created by user on 15/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICDatabase.h"

@interface LiquorAndLiquorBrandJoin : SICDatabase
{
    NSString *alcholContent;
    NSString *description;
}

- (NSString *)getAlcholContent;
- (void)setAlcholContent:(NSString *)alcholcontent;

- (NSString *)getDescription;
- (void)setDescription:(NSString *)desc;

@end
