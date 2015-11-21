//
//  ViewController.m
//  hybrid-phonegap-sample
//
//  Created by user on 09/08/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import "ViewController.h"
#import "SIHSiminov.h"


@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    id<SICIInitializer> initializer = [SIHSiminov initializer];
    [initializer addParameter:self.webView];
    [initializer initialize];
    
    
    NSString *localURL = [[NSBundle mainBundle] pathForResource:@"home" ofType:@"html" inDirectory:@"Assets/www"];
    NSURLRequest *urlRequest = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:localURL]];
    [self.webView loadRequest:urlRequest];

    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
