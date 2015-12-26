/**
 * Hybrid-Titanium-Module
 *
 * Created by Your Name
 * Copyright (c) 2015 Your Company. All rights reserved.
 */

#import "HybridTitaniumModuleModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

#import "SICIInitializer.h"

#import "SIHUtils.h"

#import "SICResourceManager.h"
#import "SIHResourceManager.h"
#import "SIHAdapterFactory.h"

#import "SIHSiminov.h"
#import "SICFileUtils.h"


@implementation HybridTitaniumModuleModule

static SIHAdapterHandler *adapterHandler;
static id<SIHIHandler> handler;

static SIHResourceManager *resourceManager;


#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"20929635-466a-4d24-a449-d4b5b77b1423";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"hybrid.titanium.module";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];

    NSLog(@"Initializing Siminov", __PRETTY_FUNCTION__);
    
    NSLog(@"handleHybridToNativeAsync2 initialized", __PRETTY_FUNCTION__);

    @try {
        id SIHSiminovClass = NSClassFromString(NSStringFromClass([SIHSiminov class]));
        SEL siminovInitilizer = NSSelectorFromString(@"initializer");
        
        [SIHSiminovClass performSelector:siminovInitilizer];
        
        [SIHSiminov initializer];
    }
    @catch (NSException *exception) {
        NSLog([NSString stringWithFormat:@"[INFO] Exception while creating object of SIHSiminov, %@", [exception reason]], __PRETTY_FUNCTION__);
        fprintf(stderr,"[INFO] Exception while creating object of SIHSiminov\n");
    }
    
    fprintf(stderr,"[INFO] Application started\n");
    
    /*id<SICIInitializer> initializer = [SIHSiminov initializer];
    [initializer initialize];
    NSLog(@"Initialized Siminov", __PRETTY_FUNCTION__);
    
    adapterHandler = [SIHAdapterHandler getInstance];
    handler = [adapterHandler getHandler];
    
    resourceManager = [SIHResourceManager getInstance];
    [resourceManager setInterceptor:self];*/
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably

	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}

#pragma Public APIs

-(void)handleHybridToNativeAsync:(id)data {
    NSLog(@"handleHybridToNativeAsync1", __PRETTY_FUNCTION__);
    
    //ENSURE_UI_THREAD_1_ARG(data);
    
    NSLog(@"handleHybridToNativeAsync1 before", __PRETTY_FUNCTION__);
    
    NSString *protocol = [data objectAtIndex:0];
    NSString *requestId = [data objectAtIndex:1];
    NSString *action = [data objectAtIndex:2];
    NSString *requestData = [data objectAtIndex:3];
    
    NSLog(@"handleHybridToNativeAsync1 after", __PRETTY_FUNCTION__);
    
    [self handleHybridToNativeAsync:protocol requestId:requestId action:action data:requestData];
}


-(NSString *)handleHybridToNative:(NSString *)action {
    return @"";
}

-(NSString *)handleHybridToNative:(NSString *)action data:(NSString *)data {
    return @"";
}

-(NSString *)handleHybridToNativeAsync:(NSString *)requestId action:(NSString *)action data:(NSString *)data {
    return @"";
}


-(NSString *)handleHybridToNative:(NSString *)protocol action:(NSString *)action data:(NSString *)data {
}


- (NSString *)handleHybridToNativeAsync:(NSString *)protocol requestId:(NSString *)requestId action:(NSString *)action data:(NSString *)data {
    
    NSLog(@"handleHybridToNativeAsync2", __PRETTY_FUNCTION__);
    
    NSLog([NSString stringWithFormat:@"handleHybridToNativeAsync2 initialize siminov, %@", action], __PRETTY_FUNCTION__);
    
    if([action caseInsensitiveCompare:@"SIMINOV.INITIALIZE-SIMINOV"] == NSOrderedSame) {
        
        /*
         * Initialize Siminov
         */
         
        NSLog(@"handleHybridToNativeAsync2 initialized", __PRETTY_FUNCTION__);
        id SIHSiminov = nil;
        
        @try {
            SIHSiminov = NSClassFromString(NSStringFromClass([SIHSiminov class]));
            SIHSiminov = [[SIHSiminov alloc] init];
        }
        @catch (NSException *exception) {
            NSLog(@"handleHybridToNativeAsync2 exception", __PRETTY_FUNCTION__);
        }
    }
    
    
    //SICSiminovException *appdesc = [[SICSiminovException alloc] init];
    
    /*if(data) {
        data = [SIHUtils stringByDecodingURLFormat:data];
    }
    
    NSLog(@"handleHybridToNativeAsync2 before", __PRETTY_FUNCTION__);
    
    if(handler) {
        [handler handleHybridToNativeAsync:requestId action:action data:data];
    }*/
    
    NSLog(@"handleHybridToNativeAsync2 after", __PRETTY_FUNCTION__);
    return @"";
}


- (void)handleNativeToHybrid:(NSString *)action data:(NSArray *)data {
    
}

- (void)handleNativeToHybridAsync:(NSString *)requestId data:(NSArray *)data {
    
}

- (void)handleNativeToHybrid:(NSString *)functionName apiName:(NSString *)apiName action:(NSString *)action parameters:(NSString *)parameters {
    
    NSLog([NSString stringWithFormat:@"handleNativeToHybrid: %@, %@, %@", apiName, action, parameters], __PRETTY_FUNCTION__);
    
    NSDictionary *data = @{@"api": apiName, @"action": action, @"parameters": parameters};
    
    NSInteger errorCode;
    NSString *message;
    
    if(self) {
        
        @try {
            [self fireEvent:@"Adapter" withObject:data errorCode:errorCode message:(NSString*)message];
        } @catch(NSException *exception) {
            
        }
    }
    
    NSLog([NSString stringWithFormat:@"handleNativeToHybrid: %@", message], __PRETTY_FUNCTION__);
}


@end
