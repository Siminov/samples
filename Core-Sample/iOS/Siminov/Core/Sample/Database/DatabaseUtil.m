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

#import "DatabaseUtil.h"
#import "Lession.h"
#import "Shop.h"
#import "BookShopMapping.h"
#import "Pricing.h"
#import "BookAndLessionJoin.h"

@implementation DatabaseUtil

- (void)prepareData {
    [self createBooks];
}

- (void)createBooks {
    
    //Make C Book Object
    Book *c = [[Book alloc] init];
    [c setTitle:BOOK_TYPE_C];
    [c setDescription:@"C Description"];
    [c setAuthor:@"C Author"];
    [c setLink:@"C Link"];
    
    //Make C++ Book Object
    Book *cPlus = [[Book alloc] init];
    [cPlus setTitle:BOOK_TYPE_C_PLUS];
    [cPlus setDescription:@"C++ Description"];
    [cPlus setAuthor:@"C++ Author"];
    [cPlus setLink:@"C++ Link"];
    
    
    //Make C# Book Object
    Book *cSharp = [[Book alloc] init];
    [cSharp setTitle:BOOK_TYPE_C_SHARP];
    [cSharp setDescription:@"C# Description"];
    [cSharp setAuthor:@"C# Author"];
    [cSharp setLink:@"C# Link"];
    
    //Make Java Book Object
    Book *java = [[Book alloc] init];
    [java setTitle:BOOK_TYPE_JAVA];
    [java setDescription:@"Java Description"];
    [java setAuthor:@"Java Author"];
    [java setLink:@"http://en.wikipedia.org/wiki/Vodka"];

    
    //Make JavaScript Book Object
    Book *javascript = [[Book alloc] init];
    [javascript setTitle:BOOK_TYPE_JAVASCRIPT];
    [javascript setDescription:@"JavaScript Description"];
    [javascript setAuthor:@"JavaScript Author"];
    [javascript setLink:@"JavaScript Link"];
    
    
    //Make Objective C Book Object
    Book *objectivec = [[Book alloc] init];
    [objectivec setTitle:BOOK_TYPE_OBJECTIVEC];
    [objectivec setDescription:@"Objective C Description"];
    [objectivec setAuthor:@"Objective C Author"];
    [objectivec setLink:@"Objective C Link"];
    
    
    //Make Swift Book Object
    Book *swift = [[Book alloc] init];
    [swift setTitle:BOOK_TYPE_SWIFT];
    [swift setDescription:@"Swift Description"];
    [swift setAuthor:@"Swift Author"];
    [swift setLink:@"Swift Link"];

    
    Shop *shop1 = [[Shop alloc] init];
    [shop1 setShopId:[NSNumber numberWithInt:1]];
    [shop1 setName:@"Shop 1"];
    [shop1 setAddress:@"Shop 1 Address"];
    
    Shop *shop2 = [[Shop alloc] init];
    [shop2 setShopId:[NSNumber numberWithInt:2]];
    [shop2 setName:@"Shop 2"];
    [shop2 setAddress:@"Shop 2 Address"];
    
    Shop *shop3 = [[Shop alloc] init];
    [shop3 setShopId:[NSNumber numberWithInt:3]];
    [shop3 setName:@"Shop 3"];
    [shop3 setAddress:@"Shop 3 Address"];
    
    Shop *shop4 = [[Shop alloc] init];
    [shop4 setShopId:[NSNumber numberWithInt:4]];
    [shop4 setName:@"Shop 4"];
    [shop4 setAddress:@"Shop 4 Address"];
    
    Shop *shop5 = [[Shop alloc] init];
    [shop5 setShopId:[NSNumber numberWithInt:5]];
    [shop5 setName:@"Shop 5"];
    [shop5 setAddress:@"Shop 5 Address"];
    
    Shop *shop6 = [[Shop alloc] init];
    [shop6 setShopId:[NSNumber numberWithInt:6]];
    [shop6 setName:@"Shop 6"];
    [shop6 setAddress:@"Shop 6 Address"];
    
    Shop *shop7 = [[Shop alloc] init];
    [shop7 setShopId:[NSNumber numberWithInt:7]];
    [shop7 setName:@"Shop 7"];
    [shop7 setAddress:@"Shop 7 Address"];
    
    
    BookShopMapping *bookShopMapping1 = [[BookShopMapping alloc] init];
    [bookShopMapping1 setBook:c];
    [bookShopMapping1 setShop:shop1];
    
    
    
    BookShopMapping *bookShopMapping2 = [[BookShopMapping alloc] init];
    [bookShopMapping2 setBook:cPlus];
    [bookShopMapping2 setShop:shop2];
    
    
    
    BookShopMapping *bookShopMapping3 = [[BookShopMapping alloc] init];
    [bookShopMapping3 setBook:cSharp];
    [bookShopMapping3 setShop:shop3];
    
    
    BookShopMapping *bookShopMapping4 = [[BookShopMapping alloc] init];
    [bookShopMapping4 setBook:java];
    [bookShopMapping4 setShop:shop4];
    
    
    
    BookShopMapping *bookShopMapping5 = [[BookShopMapping alloc] init];
    [bookShopMapping5 setBook:javascript];
    [bookShopMapping5 setShop:shop5];
    
    
    
    BookShopMapping *bookShopMapping6 = [[BookShopMapping alloc] init];
    [bookShopMapping6 setBook:objectivec];
    [bookShopMapping6 setShop:shop6];
    
    
    BookShopMapping *bookShopMapping7 = [[BookShopMapping alloc] init];
    [bookShopMapping7 setBook:swift];
    [bookShopMapping7 setShop:shop7];
    
    @try {
        
        //NSString *rawQuery = @"SELECT ALCHOL_CONTENT, LIQUOR_BRAND.DESCRIPTION FROM LIQUOR CROSS JOIN LIQUOR_BRAND ON LIQUOR.LIQUOR_TYPE = LIQUOR_BRAND.LIQUOR_TYPE";
        //NSMutableArray *liquorAndLiquorBrandJoin = [[[LiquorAndLiquorBrandJoin alloc] init] select:rawQuery];
        
        
        [c saveOrUpdate];
        [cPlus saveOrUpdate];
        [cSharp saveOrUpdate];
        [java saveOrUpdate];
        [javascript saveOrUpdate];
        [objectivec saveOrUpdate];
        [swift saveOrUpdate];
        
        
        //[shop1 saveOrUpdate];
        //[shop2 saveOrUpdate];
        //[shop3 saveOrUpdate];
        //[shop4 saveOrUpdate];
        //[shop5 saveOrUpdate];
        //[shop6 saveOrUpdate];
        //[shop7 saveOrUpdate];
        
        //[bookShopMapping1 saveOrUpdate];
        //[bookShopMapping2 saveOrUpdate];
        //[bookShopMapping3 saveOrUpdate];
        //[bookShopMapping4 saveOrUpdate];
        //[bookShopMapping5 saveOrUpdate];
        //[bookShopMapping6 saveOrUpdate];
        //[bookShopMapping7 saveOrUpdate];
        
        
        
        [self createCLessions:c];
        [self createCPlusLesisons:cPlus];
        [self createCSharpLessions:cSharp];
        [self createJavaLessions:java];
        [self createJavaScriptLessions:javascript];
        [self createObjectiveCLessions:objectivec];
        [self createSwiftLessions:swift];
        
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createBooks" message:[NSString stringWithFormat:@"DatabaseException caught while creating books, :%@",[databaseException getMessage]]];
    }
}

- (void)createCLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:C_FIRST_LESSION];
    [firstLession setDescription:@"C First Lession Description"];

    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:C_SECOND_LESSION];
    [secondLession setDescription:@"C Second Lession Description"];
    [secondLession setLink:@"C Second Lession Link"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createCLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating c lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createCPlusLesisons:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:C_PLUS_FIRST_LESSION];
    [firstLession setDescription:@"C++ First Lession Description"];
    [firstLession setLink:@"C++ First Lession Link"];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:C_PLUS_SECOND_LESSION];
    [secondLession setDescription:@"C++ First Lession Description"];
    [secondLession setLink:@"C++ First Lession Link"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createCPlusLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating c++ lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createCSharpLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:C_SHARP_FIRST_LESSION];
    [firstLession setDescription:@"C# First Lession Description"];
    [firstLession setLink:@"C# First Lession Link"];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:C_SHARP_FIRST_LESSION];
    [secondLession setDescription:@"C# First Lession Description"];
    [secondLession setLink:@"C# First Lession Link"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createCSharpLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating c# lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createJavaLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:JAVA_FIRST_LESSION];
    [firstLession setDescription:@"C# First Lession Description"];
    [firstLession setLink:@"C# First Lession Link"];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:JAVA_SECOND_LESSION];
    [secondLession setDescription:@"Java Second Lession Description"];
    [secondLession setLink:@"Java Second Lession Link"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createJavaLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating java lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createJavaScriptLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:JAVASCRIPT_FIRST_LESSION];
    [firstLession setDescription:@"JavaScript First Lession Description"];
    [firstLession setLink:@"JavaScript First Lession Link"];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:JAVASCRIPT_SECOND_LESSION];
    [secondLession setDescription:@"JavaScript Second Lession Description"];
    [secondLession setLink:@"JavaScript Second Lession Link"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createJavaScriptLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating javascript lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createObjectiveCLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:OBJECTIVEC_FIRST_LESSION];
    [firstLession setDescription:@""];
    [firstLession setLink:@""];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:OBJECTIVEC_SECOND_LESSION];
    [secondLession setDescription:@""];
    [secondLession setLink:@""];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createObjectiveC" message:[NSString stringWithFormat:@"DatabaseException caught while creating objective c lessions, :%@",[databaseException getMessage]]];
    }
}

- (void)createSwiftLessions:(Book *)book {
    
    Lession *firstLession = [[Lession alloc] init];
    
    [firstLession setBook:book];
    [firstLession setName:SWIFT_FIRST_LESSION];
    [firstLession setDescription:@"Swift First Lession Description"];
    [firstLession setLink:@"Swift First Lession Link"];
    
    Lession *secondLession = [[Lession alloc] init];
    
    [secondLession setBook:book];
    [secondLession setName:SWIFT_SECOND_LESSION];
    [secondLession setDescription:@"Swift Second Lession Description"];
    [secondLession setLink:@"Swift Second Lession Description"];
    
    @try {
        [firstLession saveOrUpdate];
        [secondLession saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createSwiftLessions" message:[NSString stringWithFormat:@"DatabaseException caught while creating swift lessions, :%@",[databaseException getMessage]]];
    }
}

+ (Pricing *)generatePricing:(Book *)book {
    
    int randomNumber = arc4random() % 100;
    
    Pricing *pricing = [[Pricing alloc] init];
    [pricing setBook:book];
    [pricing setPriceId:[NSNumber numberWithInt:randomNumber]];
    [pricing setPrice:[NSNumber numberWithInt:100]];
    [pricing setTax:[NSNumber numberWithInt:10]];
    [pricing setDiscount:[NSNumber numberWithInt:10]];
    
    return pricing;
}

@end
