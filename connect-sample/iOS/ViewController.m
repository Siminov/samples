//
//  ViewController.m
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "ViewController.h"
#import "CredentialManager.h"
#import "SICISelectClause.h"
#import "LiquorListViewController.h"

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

- (IBAction)moveToLiquorList:(id)sender {
    
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
    
    LiquorListViewController *aMessageViewController = [[LiquorListViewController alloc] initWithNibName:@"LiquorListViewController" bundle:nil];
    [self presentViewController:aMessageViewController animated:YES completion:nil];
}

- (IBAction)cancelLogin:(id)sender {
    
}

@end
