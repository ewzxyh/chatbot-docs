---
title: "Widget para Flutter com WebView"
description: "Este exemplo mostra como integrar o Widget ChatCase através de um WebView para Flutter."
---

Este exemplo mostra como integrar o Widget ChatCase através de um WebView para Flutter.

# # Integrar Widget para Flutter com WebView

Este guia irá usar o pacote [webview\ flutter](https://pub.dev/packages/webview_flutter) para implementar uma Webview, mas outros pacotes similares devem trabalhar com mudanças mínimas no código.

# # Implementação

```dart
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';

class Webview extends StatefulWidget {
  const WebView();

  @override
  ConsumerState<WebView> createState() => _WebViewState();
}

class _WebViewState extends State<WebView> {
  late final _controller = WebViewController();

  @override
  void initState() {
    super.initState();
    unawaited(_initializeController());
  }

  @override
  Widget build(BuildContext context) {
    return ColoredBox(
      color: Colors.white,
      child: WebViewWidget(controller: _controller),
    );
  }

  Future<void> _initializeController() async {
    // disable javascript dialog
    await _controller.setOnJavaScriptAlertDialog((request) async {
      return;
    });
    switch (_controller.platform) {
      case final AndroidWebViewController controller:
        await controller.setOnShowFileSelector((params) {
          // implement your logic to show a file picker
          // attachment upload will not work on android unless this is setup
        });
      case final WebKitWebViewController _:
        break;
    }

    await _controller.setJavaScriptMode(JavaScriptMode.unrestricted);

    return _loadRequest();
  }

  Future<void> _loadRequest() async {
    final navigationDelegate = NavigationDelegate(
      onPageFinished: (url) {
        // this is necessary to trigger the widget to show without the need for
        //the user to interact with the webview
        _controller.runJavaScript('''
document.dispatchEvent(new Event('mousemove'));
''');
      }
      onNavigationRequest: (request) {
        // intercept url navigation
        // this may be useful to display attachments like PDFs in a custom widget

        // if(request.url.endsWith('.pdf')) {
        //   Navigator.of(context).push(MyPdfViewer());
        //   return NavigationDecision.prevent;
        // }

        return NavigationDecision.navigate;
      },
    );
    await _controller.setNavigationDelegate(navigationDelegate);

    return _controller.loadHtmlString(
      '''
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <script type="application/javascript">
      window.chatcaseSettings=
      {
          projectid: "<<CHATCASE_PROJECT_ID>>",
          fullscreenMode: true,
          open:true,
      };
      (function(d, s, id) {
        var w=window; var d=document; var i=function(){i.c(arguments);};
        i.q=[]; i.c=function(args){i.q.push(args);}; w.ChatCase=i;
        var js, fjs=d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js=d.createElement(s);
        js.id=id; js.async=true; js.src="https://widget.chatcase.com/v6/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document,'script','chatcase-jssdk'));
    </script>
  </head>
</html>''',
      baseUrl: 'https://widget.chatcase.com',
    );
  }
}

`$([Environment]::NewLine)
Procurar [aqui] (https://developer.chatcase.com/widget/web-sdk) outros parâmetros widget para personalizar sua experiência.
