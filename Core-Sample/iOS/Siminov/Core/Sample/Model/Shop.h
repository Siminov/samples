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

#import <Foundation/Foundation.h>
#import "SICDatabase.h"

//Table Name
static NSString * const SHOP_TABLE_NAME = @"SHOP";

//Column Names
static NSString * const SHOP_ID = @"SHOP_ID";
static NSString * const NAME = @"NAME";
static NSString * const ADDRESS = @"ADDRESS";


@interface Shop : SICDatabase
{
    //Variables
    NSNumber *shopId;
    NSString *name;
    NSString *address;
}


//Methods
-(NSNumber *)getShopId;
-(void)setShopId:(NSNumber *)shop;

-(NSString *)getName;
-(void)setName:(NSString *)shopName;

-(NSString *)getAddress;
-(void)setAddress:(NSString *)shopAddress;

@end
