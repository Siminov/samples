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
#import "LiquorBrand.h"
#import "Liquor.h"

@implementation DatabaseUtil

- (void)prepareData {
    [self createLiquors];
}

- (void)createLiquors {
    
    //Make Gin Object
    Liquor *gin = [[Liquor alloc] init];
    [gin setLiquorType:LIQUOR_TYPE_GIN];
    [gin setDescription:@"Gin is a spirit made with juniper berries."];
    [gin setHistory:@"By the 11th century, Italian monks were flavoring crudely distilled spirits with juniper berries. During the Black Death, this drink was used, although ineffectively, as a remedy. As the science of distillation advanced from the Middle Ages into the Renaissance period, juniper was one of many botanicals employed by virtue of its perfume, flavour, and purported medicinal properties"];
    [gin setLink:@"http://en.wikipedia.org/wiki/Gin"];
    [gin setAlcholContent:@"Gin has a minimum alcohol content of 40 percent in the US (80 proof)."];
    
    //Make Rum Object
    Liquor *rum = [[Liquor alloc] init];
    [rum setLiquorType:LIQUOR_TYPE_RUM];
    [rum setDescription:@"Rum is a distilled liquid made from molasses and sugarcane juice."];
    [rum setHistory:@"The first distillation of rum originated in the Caribbean in the 17th centry."];
    [rum setLink:@"http://en.wikipedia.org/wiki/Rum"];
    [rum setAlcholContent:@"Rum typically has an alcohol content in the range of 20 to 80 percent by volume (40 to 160 proof)."];
    
    
    //Make Tequilla Object
    Liquor *tequilla = [[Liquor alloc] init];
    [tequilla setLiquorType:LIQUOR_TYPE_TEQUILA];
    [tequilla setDescription:@"Tequila is a spirit made with Blue Agave."];
    [tequilla setHistory:@"The first distillation of tequila originated in Mexico in the 16th centry."];
    [tequilla setLink:@"http://en.wikipedia.org/wiki/Tequila"];
    [tequilla setAlcholContent:@"Tequila typically has an alcohol content in the range of 35 to 55 percent by volume (70 to 110 proof)."];
    
    //Make Vodka Object
    Liquor *vodka = [[Liquor alloc] init];
    [vodka setLiquorType:LIQUOR_TYPE_VODKA];
    [vodka setDescription:@"Vodka is a colorless liquid that contains a mixture of water and distilled ethanol. Vodka is made from a fermented substance such as potatoes, rye, wheat or sugar beet molasses."];
    [vodka setHistory:@"Vodka originated in Russia inthe 14th centry."];
    [vodka setLink:@"http://en.wikipedia.org/wiki/Vodka"];
    [vodka setAlcholContent:@"Vodka typically has an alcohol content in the range of 35 to 50 percent by volume (70 to 100 proof)."];
    
    
    //Make Whiskey Object
    Liquor *whiskey = [[Liquor alloc] init];
    [whiskey setLiquorType:LIQUOR_TYPE_WHISKEY];
    [whiskey setDescription:@"Whiskey (or whisky) is a distilled liquid made from fermented grain mash."];
    [whiskey setHistory:@"Distillation spread from Ireland to Scotland (about one hundred years later) and originated from the European continent in the later medieval centuries"];
    [whiskey setLink:@"http://en.wikipedia.org/wiki/Whisky"];
    [whiskey setAlcholContent:@"Whiskey has varying proof levels depending on the specific whiskey. Read more: http://wiki.answers.com/Q/What_percentage_of_alcohol_is_in_whisky#ixzz25n6vmBTZ"];
    
    
    //Make Beer Object
    Liquor *beer = [[Liquor alloc] init];
    [beer setLiquorType:LIQUOR_TYPE_BEER];
    [beer setDescription:@"Beer is produced by the saccharification of starch and fermentation of the resulting sugar."];
    [beer setHistory:@"Beer is one of the worlds oldest prepared beverages, possibly dating back to the early Neolithic or 9500 BC, when cereal was first farmed, and is recorded in the written history of ancient Egypt and Mesopotamia."];
    [beer setLink:@"http://en.wikipedia.org/wiki/Beer"];
    [beer setAlcholContent:@"A beer that is 4.0 percent by volume is about 3.2 percent by weight"];
    
    
    //Make Wine Object
    Liquor *wine = [[Liquor alloc] init];
    [wine setLiquorType:LIQUOR_TYPE_WINE];
    [wine setDescription:@"Wine is typically made of fermented grape juice."];
    [wine setHistory:@"Wine dates back to 6000 BC and is believed to have originated in the area now considered Iran and Georgia."];
    [wine setLink:@"http://en.wikipedia.org/wiki/Wine"];
    [wine setAlcholContent:@"100 grams (g) of wine is equivalent to 100 milliliters (mL) or 3.4 fluid ounces (fl oz.) of wine. 10.6 g of alcohol in 3.4 fl ounces is 13 percent alcohol by volume."];
    
    
    @try {
        
        [gin saveOrUpdate];
        [rum saveOrUpdate];
        [tequilla saveOrUpdate];
        [vodka saveOrUpdate];
        [whiskey saveOrUpdate];
        [beer saveOrUpdate];
        [wine saveOrUpdate];
        
        [self createGinBrands:gin];
        [self createRumBrands:rum];
        [self createTequilaBrands:tequilla];
        [self createVodkaBrands:vodka];
        [self createWhiskeyBrands:whiskey];
        [self createBeerBrands:beer];
        [self createWineBrands:wine];
        
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createLiquors" message:[NSString stringWithFormat:@"DatabaseException caught while creating liquors, :%@",[databaseException getMessage]]];
    }
}

- (void)createGinBrands:(Liquor *)liquor {
    
    LiquorBrand *theBotanist = [[LiquorBrand alloc] init];
    
    [theBotanist setLiquor:liquor];
    [theBotanist setBrandName:GIN_BRAND_THE_BOTANIST];
    [theBotanist setCountry:@"Islay"];
    [theBotanist setDescription:@"The Botanist is a brand of gin produced by distilling nine botanicals into the alcohol through direct boiling followed by passing the vapors through a basket containing an additional 22 herbal ingredients."];
    [theBotanist setLink:@"http://www.bruichladdich.com"];
    
    LiquorBrand *tanqueray = [[LiquorBrand alloc] init];
    
    [tanqueray setLiquor:liquor];
    [tanqueray setBrandName:GIN_BRAND_TANQUERAY];
    [tanqueray setCountry:@"United Kingtom"];
    [tanqueray setDescription:@"Tanqueray is a form of London dry gin, a spirit produced through double-distillation with botanicals added to the spirit during the second distillation phase. Tanqueray was first distilled in 1830 in England, with production moved to Scotland after World War II."];
    [tanqueray setLink:@"http://www.tanqueray.com"];
    
    @try {
        [theBotanist saveOrUpdate];
        [tanqueray saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createGinBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating  gin brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createRumBrands:(Liquor *)liquor {
    
    LiquorBrand *bacardi = [[LiquorBrand alloc] init];
    
    [bacardi setLiquor:liquor];
    [bacardi setBrandName:RUM_BRAND_BACARDI];
    [bacardi setCountry:@"Bermuda"];
    [bacardi setDescription:@"Bacardi Limited is the largest privately-held, family-owned spirits company in the world. Its brand portfolio comprises more than 200 brands and labels, including the eponymous Bacardi rum."];
    [bacardi setLink:@"http://www1.bacardi.com"];
    
    LiquorBrand *oldMonk = [[LiquorBrand alloc] init];
    
    [oldMonk setLiquor:liquor];
    [oldMonk setBrandName:RUM_BRAND_OLD_MONK];
    [oldMonk setCountry:@"India"];
    [oldMonk setDescription:@"Old Monk Rum is dark rum aged and blended seven years in India. The rum is vatted and aged with whole vanilla and a number of other ingredients to create a heavily spiced flavor."];
    [oldMonk setLink:@"http://en.wikipedia.org/wiki/Old_Monk"];
    
    @try {
        [bacardi saveOrUpdate];
        [oldMonk saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createRumBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating rum brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createTequilaBrands:(Liquor *)liquor {
    
    LiquorBrand *patron = [[LiquorBrand alloc] init];
    
    [patron setLiquor:liquor];
    [patron setBrandName:TEQUILA_BRAND_PATRON];
    [patron setCountry:@"Mexico"];
    [patron setDescription:@"Patron is a luxury brand of tequila produced in Mexico and sold in hand-blown, individually numbered bottles."];
    [patron setLink:@"http://www.patrontequila.com"];
    
    LiquorBrand *sauzate = [[LiquorBrand alloc] init];
    
    [sauzate setLiquor:liquor];
    [sauzate setBrandName:TEQUILA_BRAND_SAUZA];
    [sauzate setCountry:@"Mexico"];
    [sauzate setDescription:@"Sauza Tequila Import Company is a producer of tequila located in Tequila, a municipality of the state of Jalisco, Mexico. It was founded in 1873 when Don Cenobio Sauza started La Perseverancia distillery."];
    [sauzate setLink:@"http://us.sauzatequila.com"];
    
    @try {
        [patron saveOrUpdate];
        [sauzate saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createTequilaBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating tequila brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createVodkaBrands:(Liquor *)liquor {
    
    LiquorBrand *absolut = [[LiquorBrand alloc] init];
    
    [absolut setLiquor:liquor];
    [absolut setBrandName:VODKA_BRAND_ABSOLUT];
    [absolut setCountry:@"Sweden"];
    [absolut setDescription:@"Absolut Vodka is a brand of vodka, produced near Ahus, Skane, in southern Sweden. Absolut is owned by French group Pernod Ricard; they bought Absolut for 5.63 billion Euros in 2008 from the Swedish state."];
    [absolut setLink:@"http://www.absolut.com"];
    
    LiquorBrand *smirnoff = [[LiquorBrand alloc] init];
    
    [smirnoff setLiquor:liquor];
    [smirnoff setBrandName:VODKA_BRAND_SMIRNOFF];
    [smirnoff setCountry:@"British"];
    [smirnoff setDescription:@"Smirnoff is a brand of vodka owned and produced by the British company Diageo. The Smirnoff brand began with a vodka distillery founded in Moscow by Pyotr Arsenievich Smirnov (1831–1898), the son of illiterate Russian peasants.[citation needed] It is now distributed in 130 countries. It is produced in several countries including USA, Italy, Northern Ireland and Scotland."];
    [smirnoff setLink:@"http://www.smirnoff.com"];
    
    @try {
        [absolut saveOrUpdate];
        [smirnoff saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createVodkaBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating vodka brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createWhiskeyBrands:(Liquor *)liquor {
    
    LiquorBrand *jackDaniels = [[LiquorBrand alloc] init];
    
    [jackDaniels setLiquor:liquor];
    [jackDaniels setBrandName:WHISKEY_BRAND_JACK_DANIELS];
    [jackDaniels setCountry:@"U.S"];
    [jackDaniels setDescription:@"Jack Daniels is a brand of sour mash Tennessee whiskey that is the best selling whiskey in the world.[1] It is known for its square bottles and black label. It is produced in Lynchburg, Tennessee by the Jack Daniel Distillery, which has been owned by the Brown-Forman Corporation since 1956."];
    [jackDaniels setLink:@"http://www.jackdaniels.com"];
    
    LiquorBrand *johnnieWalker = [[LiquorBrand alloc] init];
    
    [johnnieWalker setLiquor:liquor];
    [johnnieWalker setBrandName:WHISKEY_BRAND_JOHNNIE_WALKER];
    [johnnieWalker setCountry:@"Scotland"];
    [johnnieWalker setDescription:@"Johnnie Walker is a brand of Scotch Whisky owned by Diageo and originated in Kilmarnock, Ayrshire, Scotland. It is the most widely distributed brand of blended Scotch whisky in the world, sold in almost every country with yearly sales of over 130 million bottles."];
    [johnnieWalker setLink:@"http://www.johnniewalker.com"];
    
    @try {
        [jackDaniels saveOrUpdate];
        [johnnieWalker saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createWhiskeyBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating whiskey brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createBeerBrands:(Liquor *)liquor {
    
    LiquorBrand *heineken = [[LiquorBrand alloc] init];
    
    [heineken setLiquor:liquor];
    [heineken setBrandName:BEER_BRAND_HEINEKEN];
    [heineken setCountry:@"Dutch"];
    [heineken setDescription:@"Heineken Lager Beer (Dutch: Heineken Pilsener) or simply Heineken is a pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International."];
    [heineken setLink:@"http://www.heineken.com"];
    
    LiquorBrand *kingfisher = [[LiquorBrand alloc] init];
    
    [kingfisher setLiquor:liquor];
    [kingfisher setBrandName:BEER_BRAND_KINGFISHER];
    [kingfisher setCountry:@"India"];
    [kingfisher setDescription:@"Kingfisher is an Indian beer brewed by United Breweries Group. The brand was launched in 1978. With a market share of over 36%, it is Indias largest selling beer, with 1 out of every 3 bottles of beer sold in India being a Kingfisher brand. It is currently available in 52 countries outside India."];
    [kingfisher setLink:@"http://www.kingfisherworld.com"];
    
    @try {
        [heineken saveOrUpdate];
        [kingfisher saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createBeerBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating beer brands, :%@",[databaseException getMessage]]];
    }
}

- (void)createWineBrands:(Liquor *)liquor {
    
    LiquorBrand *gallo = [[LiquorBrand alloc] init];
    
    [gallo setLiquor:liquor];
    [gallo setBrandName:WINE_BRAND_GALLO];
    [gallo setCountry:@"California"];
    [gallo setDescription:@"E and J Gallo Winery was founded in 1933 by Ernest Gallo and Julio Gallo in Modesto, California. E and J Gallo Winery is the largest exporter of California wines and is a large promoter of wines from Sonoma County."];
    [gallo setLink:@"http://gallo.com/"];
    
    LiquorBrand *yellowTail = [[LiquorBrand alloc] init];
    
    [yellowTail setLiquor:liquor];
    [yellowTail setBrandName:WINE_BRAND_YELLOW_TAIL];
    [yellowTail setCountry:@"Australia"];
    [yellowTail setDescription:@"Yellow Tail (officially typeset is a brand of wine produced by Casella Wines Pty Ltd. Casella wines is based in Yenda, Australia, which has a population of approximately 1400 people."];
    [yellowTail setLink:@"http://www.yellowtailwine.com"];
    
    @try {
        [gallo saveOrUpdate];
        [yellowTail saveOrUpdate];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"createWineBrands" message:[NSString stringWithFormat:@"DatabaseException caught while creating wines brands, :%@",[databaseException getMessage]]];
    }
}

@end
