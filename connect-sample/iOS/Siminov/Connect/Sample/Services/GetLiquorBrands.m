//
//  GetLiquorBrands.m
//  connect-sample
//
//  Created by Geetika on 29/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "GetLiquorBrands.h"
#import "SIKIConnectionResponse.h"
#import "Liquor.h"
#import "LiquorBrandsReader.h"

static NSString * const SERVICE_NAME = @"SIMINOV-CONNECT-LIQUOR-BRANDS-SERVICE";
static NSString * const REQUEST_NAME = @"GET-LIQUOR-BRANDS";

static NSString * const LIQUOR_NAME = @"LIQUOR_NAME";
static NSString * const LIQUOR = @"LIQUOR";

@implementation GetLiquorBrands

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
}

- (void)onRequestFinish:(id<SIKIConnectionResponse>)connectionResponse {
    
    if ([connectionResponse getResponse] == nil) {
        return;
    }
    
    Liquor *liquor = [self getResource:@"LIQUOR"];
    LiquorBrandsReader *liquorBrandsReader = [[LiquorBrandsReader alloc]initWithData:[connectionResponse getResponse]];
    NSEnumerator *liquorBrands = [liquorBrandsReader getLiquorBrands];
    
    
    LiquorBrand *liquorBrand;
    while (liquorBrand = [liquorBrands nextObject]) {
        [liquorBrand setLiquor:liquor];
        
        @try {
            [liquorBrand saveOrUpdate];
        }
        @catch (SICDatabaseException *exception) {
            [SICLog error:NSStringFromClass([self class]) methodName:@"onServiceApiFinish" message:[NSString stringWithFormat:@"Database Exception caught while saving liquor brands in database, %@",[exception reason]]];
        }
    }
    //((LiquorDetail) uiComponent).refresh();
}

- (void)onTerminate:(SIKServiceException *)serviceException {
}

@end
