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

#import "BooksListViewController.h"
#import "ViewController.h"
#import "Book.h"
#import "GetBooks.h"
#import "BookDetailViewController.h"
#import "SIKSyncRequest.h"
#import "Constants.h"
#import "SIKSyncHandler.h"

@interface BooksListViewController ()

@end

@implementation BooksListViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    
    GetBooks *getBooks = [[GetBooks alloc]init];
    [getBooks invoke];
    
    //    id<SIKISyncRequest> syncRequest = [[SIKSyncRequest alloc]init];
    //    [syncRequest setName:SYNC_BOOKS];
    //
    //    SIKSyncHandler *syncHandler = [SIKSyncHandler getInstance];
    //    [syncHandler handle:syncRequest];
    
    books = [[[[Book alloc] init] select] execute];
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

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return [books count];
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *simpleTableIdentifier = @"SimpleTableItem";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:simpleTableIdentifier];
    
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:simpleTableIdentifier];
    }
    
    cell.textLabel.text = [[books objectAtIndex:indexPath.row] getTitle];
    cell.detailTextLabel.text = [[books objectAtIndex:indexPath.row] getDescription];
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    BookDetailViewController *bookDetail = [[BookDetailViewController alloc] initWithNibName:@"BookDetailViewController" bundle:nil];
    bookDetail.book = [books objectAtIndex:indexPath.row];
    
    [self presentViewController:bookDetail animated:YES completion:nil];
}


@end
