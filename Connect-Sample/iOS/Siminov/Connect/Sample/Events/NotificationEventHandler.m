///
/// [SIMINOV FRAMEWORK]
/// Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


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
