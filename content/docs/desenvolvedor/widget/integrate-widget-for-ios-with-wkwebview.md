---
title: "Widget para iOS com WKWebView"
description: "``` // // WebViewViewController.swift // ChatCase //"
---

# # Controlador

```
//
//  WebViewViewController.swift
//  ChatCase
//

import UIKit
import WebKit

class WebViewViewController: UIViewController, WKUIDelegate {

    @IBOutlet weak var webView: WKWebView!
    @IBAction func actionClosing(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }

    override func loadView() {

        let image = UIImage(named: "ic_navigation_bar")!
        let nav = self.navigationController?.navigationBar
        let tintColor = UIColor(red: 51, green: 71, blue: 94, alpha: 1)
        nav?.setupNavigationBar(barStyleBlack: true, tintColor: tintColor, image: image)


        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }



    override func viewDidLoad() {
        super.viewDidLoad()
        let url = "https://widget.chatcase.com/v6/assets/twp/blank.html?chatcase_projectid=<CHANGE_IT>&chatcase_fullscreenMode=true&chatcase_hideHeaderCloseButton=true&chatcase_open=true"
        let myURL = URL(string:url)
        let myRequest = URLRequest(url: myURL!)
        webView.load(myRequest)
    }


    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
`$([Environment]::NewLine)
Encontre [aqui](/docs/desenvolvedor/widget/web-sdk) outros parâmetros widget para personalizar sua experiência.

# # Controlador de Vista Web

Crie um Web View Controller no seu Story Board e adicione um WebView como abaixo:

![](/developer-files/-LkZT1Acumur8-pemJUB)
