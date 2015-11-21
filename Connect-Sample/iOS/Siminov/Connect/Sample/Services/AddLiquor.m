//
//  AddLiquor.m
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "AddLiquor.h"
#import "SIKIConnectionRequest.h"
#import "Liquor.h"
#import "SICDatabaseException.h"
#import "LiquorWritter.h"
#import "SICISelectClause.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-LIQUORS-SERVICE";
static NSString * const REQUEST_NAME = @"ADD-LIQUOR";

static NSString * const LIQUOR = @"LIQUOR";

@implementation AddLiquor

- (id)init {
    
    if (self = [super init]) {
        [self setService:SERVICE_NAME];
        [self setRequest:REQUEST_NAME];
    }
    return self;
}

- (void)onStart {

}

- (void)onQueue {

}

- (void)onPause {

}

- (void)onResume {

}

- (void)onFinish {

}

- (void)onRequestInvoke:(id<SIKIConnectionRequest>)connectionRequest {
    if ([connectionRequest getDataStream] == nil) {
        return;
    }
    
    NSString *liquorType = (NSString *) [self getResource:LIQUOR];
    Liquor *liquor = nil;
    
    @try {
        
        NSArray *liquors = (NSArray *)[[[[[[Liquor alloc] init] select] where:LIQUOR_LIQUOR_TYPE] equalTo:liquorType] execute];
        if(liquors != nil && liquors.count > 0) {
            liquor = liquors[0];
        }
    } @catch(SICDatabaseException *de) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiInvoke" message:[NSString stringWithFormat:@"Database Exception caught while getting liquor from database, %@",[de reason]]];
        return;
    }
    
    LiquorWritter *liquorWritter = [[LiquorWritter alloc]init];
    NSData *dataStream = [liquorWritter build:liquor];
    
    [connectionRequest setDataStream:dataStream];
}

@end
