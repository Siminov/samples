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


#import "ViewController.h"
#import "CredentialManager.h"
#import "SICISelectClause.h"
#import "BooksListViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    isAccountPresent = false;
    isAccountPresent = [[CredentialManager getInstance] isAnyActiveCredential];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)moveToBooksList:(id)sender {
    
    if (!isAccountPresent) {
        
        Credential *credential = [[Credential alloc]init];
        [credential setAccountId:accountIdField.text];
        [credential setToken:tokenField.text];
        [credential setActive:true];
        
        @try {
            [credential saveOrUpdate];
        }
        @catch (SICDatabaseException *databaseException) {
            [SICLog error:NSStringFromClass([self class]) methodName:@"onClick" message:[NSString stringWithFormat:@"DatabaseException caught while creating account, %@",[databaseException getMessage]]];
            return;
        }
    }
    
    BOOL authenticated = false;
    @try {
        NSArray *credentials = [[[[[[Credential alloc]init] select] where:ACCOUNT_ID] equalTo:accountIdField.text] execute];
        authenticated = [[credentials[0] getToken] isEqualToString:tokenField.text];
    }
    @catch (SICDatabaseException *databaseException) {
        [SICLog error:NSStringFromClass([self class]) methodName:@"onClick" message:[NSString stringWithFormat:@"DatabaseException caught while authenticating account, %@",[databaseException getMessage]]];
        return;
    }
    
    if (authenticated) {
        
    }
    
    BooksListViewController *aMessageViewController = [[BooksListViewController alloc] initWithNibName:@"BooksListViewController" bundle:nil];
    [self presentViewController:aMessageViewController animated:YES completion:nil];
}

- (IBAction)cancelLogin:(id)sender {
    
}

@end
