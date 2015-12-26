//
//  BookAndLessionJoin.h
//  core-sample
//
//  Created by user on 15/04/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "SICDatabase.h"

@interface BookAndLessionJoin : SICDatabase
{
    NSString *author;
    NSString *name;
}

- (NSString *)getAuthor;
- (void)setAuthor:(NSString *)aut;

- (NSString *)getName;
- (void)setName:(NSString *)nme;

@end
