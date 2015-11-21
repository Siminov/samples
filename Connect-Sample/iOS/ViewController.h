//
//  ViewController.h
//  connect-sample
//
//  Created by Geetika on 28/05/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController {
    BOOL isAccountPresent;
    IBOutlet UITextField *accountIdField;
    IBOutlet UITextField *tokenField;
}

@property (weak, nonatomic) IBOutlet UIButton *loginButton;
@property (weak, nonatomic) IBOutlet UIButton *cancelButton;

- (IBAction)moveToLiquorList:(id)sender;
- (IBAction)cancelLogin:(id)sender;

@end

