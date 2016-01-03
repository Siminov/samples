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



#import "BookDetailViewController.h"
#import "Lession.h"
#import "SICISelectClause.h"
#import "GetLessions.h"

@interface BookDetailViewController ()

@end

@implementation BookDetailViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    GetLessions *getLessions = [[GetLessions alloc]init];
    [getLessions addResource:@"BOOK" value:self.book];
    [getLessions addResource:@"BOOK-TITLE" value:self.book.getTitle];
    [getLessions invoke];
    
    @try {
        lessions = [[[[[[Lession alloc] init] select] where:LESSION_BOOK_TITLE] equalTo:self.book.getTitle] execute];
    } @catch(SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"getLessions" message:[NSString stringWithFormat:@"DatabaseException caught while getting lessions, %@",[databaseException getMessage]]];
    }
    self.detailNavigationBar.topItem.title = [self.book getTitle];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

#pragma mark -
#pragma mark UITableView Delegate/Datasource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 5;
}


- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    switch (section) {
        case 0:
            return NSLocalizedStringFromTable(@"Description", @"Localized", nil);
        case 1:
            return NSLocalizedStringFromTable(@"History", @"Localized", nil);
        case 2:
            return NSLocalizedStringFromTable(@"Alcohol Content", @"Localized", nil);
        case 3:
            return NSLocalizedStringFromTable(@"Link", @"Localized", nil);
        case 4:
            return NSLocalizedStringFromTable(@"Brands", @"Localized", nil);
        default:
            break;
    }
    return nil;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    NSInteger rows = 1;
    
    switch (section) {
        case 4:
            rows = lessions.count;
            break;
        default:
            break;
    }
    return rows;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    if (indexPath.section == 4) {
        static NSString *StatisticsCellIdentifier = @"StatisticsCell";
        
        UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:StatisticsCellIdentifier];
        if (cell == nil) {
            cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:StatisticsCellIdentifier];
        }
        
        cell.textLabel.text = [[lessions objectAtIndex:indexPath.row] getName];
        return cell;
    }
    
    static NSString *MyIdentifier = @"MyIdentifier";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:MyIdentifier];
    
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithFrame:CGRectZero];
    }
    cell.textLabel.text = [self textForIndexPath:indexPath];
    return cell;
    
}

- (NSString *)textForIndexPath:(NSIndexPath *)indexPath {
    NSString *text;
    switch (indexPath.section) {
        case 0:
            text = [self.book getDescription];
            break;
        case 1:
            text = [self.book getAuthor];
            break;
        case 2:
            text = [self.book getLink];
            break;
        default:
            text = @"";
            break;
    }
    return text;
}

- (IBAction)backToBooksList:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}
@end
