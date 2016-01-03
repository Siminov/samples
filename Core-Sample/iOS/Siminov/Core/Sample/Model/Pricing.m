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


#import "Pricing.h"

@implementation Pricing

-(NSNumber *)getPriceId {
    return priceId;
}

-(void)setPriceId:(NSNumber *)priceid {
    priceId = priceid;
}

-(NSNumber *)getPrice {
    return price;
}

-(void)setPrice:(NSNumber *)prc {
    price = prc;
}

-(NSNumber *)getTax {
    return tax;
}

-(void)setTax:(NSNumber *)tx {
    tax = tx;
}

-(NSNumber *)getDiscount {
    return discount;
}

-(void)setDiscount:(NSNumber *)disc {
    discount = disc;
}

-(Book *)getBook {
    return book;
}

-(void)setBook:(Book *)bk {
    book = bk;
}


@end
