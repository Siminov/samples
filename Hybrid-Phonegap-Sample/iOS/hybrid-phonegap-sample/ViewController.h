//
//  ViewController.h
//  hybrid-phonegap-sample
//
//  Created by user on 09/08/15.
//  Copyright (c) 2015 Siminov. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController<UIWebViewDelegate>

/*
 *While holding down the Control key, click and drag the Web View from the View Controller Scene to the ViewController.h edit screen, placing it just below the @interface line.
 */
@property (weak, nonatomic) IBOutlet UIWebView *webView;

@end

