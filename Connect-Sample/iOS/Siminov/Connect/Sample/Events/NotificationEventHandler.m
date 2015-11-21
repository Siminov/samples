//
//  NotificationEventHandler.m
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "NotificationEventHandler.h"
#import "RegisterDevice.h"
#import "UnregisterDevice.h"

@implementation NotificationEventHandler

- (void)onRegistration:(id<SIKIRegistration>) registration {
    
    id<SIKIService> service = [[RegisterDevice alloc]init];
    [service addResource:REGISTRATION_ID value:[registration getRegistrationId]];
    
    [service invoke];
}

- (void)onUnregistration:(id<SIKIRegistration>) registration {
    
    id<SIKIService> service = [[UnregisterDevice alloc]init];
    [service invoke];
}

- (void)onNotification:(id<SIKIMessage>) message {

}

- (void)onError:(SIKNotificationException *)notificationException {

}

@end
