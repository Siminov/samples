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

#import <UIKit/UIKit.h>
#import "Liquor.h"

@interface LiquorDetailViewController : UIViewController <UITableViewDelegate> {
    NSArray *liquorBrands;
}

@property (strong, nonatomic) IBOutlet UINavigationBar *detailNavigationBar;
@property (strong, nonatomic) IBOutlet UITableView *detailTableView;
@property (strong, nonatomic) Liquor *liquor;

- (IBAction)backToLiquorList:(id)sender;

@end
