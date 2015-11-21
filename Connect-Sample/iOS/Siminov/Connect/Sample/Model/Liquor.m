///
/// [SIMINOV FRAMEWORK]
/// Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
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

#import "Liquor.h"

@implementation Liquor

-(NSString *)getLiquorType {
    return liquorType;
}

-(void)setLiquorType:(NSString *)liquortype {
    liquorType = liquortype;
}

-(NSString *)getDescription {
    return description;
}

-(void)setDescription: (NSString *)desc {
    description = desc;
}

-(NSString *)getHistory {
    return history;
}

-(void)setHistory: (NSString *)his {
    history = his;
}

-(NSString *)getLink {
    return link;
}

-(void)setLink: (NSString *)lin {
    link = lin;
}

-(NSString *)getAlcholContent {
    return alcholContent;
}

-(void)setAlcholContent: (NSString *)alcholcontent {
    alcholContent = alcholcontent;
}

-(NSEnumerator *)getLiquorBrands {
    return [liquorBrands objectEnumerator];
}

-(void)setLiquorBrands: (NSEnumerator *)liquorbrands {
    
    NSString *liquorBrand;
    while (liquorBrand = [liquorbrands nextObject]) {
        [liquorBrands addObject:liquorBrand];
    }
}

-(void)addLiquorBrands: (LiquorBrand *)liquorbrand {
    [liquorBrands addObject:liquorbrand];
}

@end
