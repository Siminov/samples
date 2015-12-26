//
//  SIHReactInterceptor.m
//  hybridReactSample
//
//  Created by user on 15/10/15.
//  Copyright © 2015 Facebook. All rights reserved.
//


#import "SIHNativeScriptInterceptor.h"

//#import "SIHUtils.h"

#import <objc/runtime.h>

@implementation SIHNativeScriptInterceptor


//static SIHAdapterHandler *adapterHandler;
//static id<SIHIHandler> handler;

//static SIHResourceManager *resourceManager;


-(id)init {
    
    /*adapterHandler = [SIHAdapterHandler getInstance];
    handler = [adapterHandler getHandler];
    
    resourceManager = [SIHResourceManager getInstance];
    [resourceManager setInterceptor:self];*/
    
    return self;
}


-(NSString *)handleHybridToNative:(NSString *)action {
    return nil;
}

-(NSString *)handleHybridToNative:(NSString *)action data:(NSString *)data {
    return nil;
}

-(NSString *)handleHybridToNativeAsync:(NSString *)requestId action:(NSString *)action data:(NSString *)data {
    return nil;
}


-(void)handleHybridToNative:(NSString *)protocol action:(NSString *)action data:(NSString *)data {
    //NSString *response = [handler handleHybridToNative:action data:data];
}


-(void)handleHybridToNativeAsync:(NSString *)protocol requestId:(NSString *)requestId action:(NSString *)action data:(NSString *)data {
    
    /*if(data) {
        data = [SIHUtils stringByDecodingURLFormat:data];
    }
    
    [handler handleHybridToNativeAsync:requestId action:action data:data];*/
    
}


- (void)handleNativeToHybrid:(NSString *)action data:(NSArray *)data {
    
}

- (void)handleNativeToHybridAsync:(NSString *)requestId data:(NSArray *)data {
    
}

- (void)handleNativeToHybrid:(NSString *)functionName apiName:(NSString *)apiName action:(NSString *)action parameters:(NSString *)parameters {
}


@end
