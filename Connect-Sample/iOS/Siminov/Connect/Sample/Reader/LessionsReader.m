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


#import "LessionsReader.h"
#import "SICLog.h"
#import "SICDeploymentException.h"
#import "Constants.h"

@implementation LessionsReader

- (id)init {
    self = [super init];
    
    if(self) {
        lessions = [[NSMutableArray alloc]init];
        tempValue = [[NSMutableString alloc] init];
        
        return self;
    }
    
    return self;
}

- (id)initWithData:(NSData * const)data {
    
    if (data == nil) {
        return self;
    }
    
    @try {
        lessions = [[NSMutableArray alloc]init];
        [self parseMessage:data];
    }
    @catch (NSException *exception) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing lessions, %@",[exception reason]]];
        @throw [[SICDeploymentException alloc]initWithClassName:NSStringFromClass([self class]) methodName:@"Constructor" message:[NSString stringWithFormat:@"Exception caught while parsing lessions, %@",[exception reason]]];
    }
    return self;
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict {
    
    tempValue = [[NSMutableString alloc] init];
    
    if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION] == NSOrderedSame) {
        lession = [[Lession alloc] init];
    }
}

- (void)parser:(NSXMLParser *)parser foundCharacters:(NSString *)string {
    tempValue = (NSMutableString *)[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (void)parser:(NSXMLParser *)parser didEndElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName {
    
    if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION] == NSOrderedSame) {
        [lessions addObject:lession];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_NAME] == NSOrderedSame) {
        [lession setName:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_DESCRIPTION] == NSOrderedSame) {
        [lession setDescription:(NSString *)tempValue];
    } else if([elementName caseInsensitiveCompare:GET_LESSIONS_WS_LESSION_LINK] == NSOrderedSame) {
        [lession setLink:(NSString *)tempValue];
    }
}

- (NSEnumerator *)getLessions {
    return [lessions objectEnumerator];
}

@end
