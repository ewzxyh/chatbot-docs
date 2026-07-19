---
title: "Widget para Android com WebView"
description: "Atenção, o Widget ChatCase é compatível com Android 13+"
---

Atenção, o Widget ChatCase é compatível com Android 13+

# # Integrar Widget para Android com WebView

Permissões

Não se esqueça de dar permissão em seu manifest.xml adicionando o seguinte:

```
<uses-permission android:name="android.permission.INTERNET"></uses-permission>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
`$([Environment]::NewLine)
# # **Método 1:** carregar widget ChatCase de incorporar url

Atividade

```
package com.chatcase.chatcasewidgetintegrationexample;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

public class ChatCaseActivity extends AppCompatActivity {


    public static final int REQUEST_SELECT_FILE = 100;
    public ValueCallback<Uri[]> uploadMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chatcase);

        WebView myWebView = (WebView) findViewById(R.id.chatcase);


        myWebView.setWebChromeClient(new FileChooserWebChromeClient(this) {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                Log.d("ChatCaseActivity", consoleMessage.message() + " -- From line "
                        + consoleMessage.lineNumber() + " of "
                        + consoleMessage.sourceId());
                return super.onConsoleMessage(consoleMessage);
            }
        });

        // Enable JavaScript
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);


        // Enable DOM storage API (localStorage/sessionStorage)
        webSettings.setDomStorageEnabled(true);

        //allow to snap photos
        webSettings.setAllowFileAccess(true);

        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);

        //Inject widget load URL
        myWebView.loadUrl("https://widget.chatcase.com/v6/assets/twp/index.html?chatcase_projectid=<CHANGE_IT>&chatcase_fullscreenMode=true&chatcase_hideHeaderCloseButton=true&chatcase_open=true");

    }


    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_SELECT_FILE) {
            if (uploadMessage == null) return;
            uploadMessage.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            uploadMessage = null;
        }
    }


    public class FileChooserWebChromeClient extends WebChromeClient {

        private Activity myActivity;

        public FileChooserWebChromeClient(ChatCaseActivity myActivity) {
            this.myActivity = myActivity;
        }

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
            uploadMessage = filePathCallback;

            Intent intent = fileChooserParams.createIntent();
            try {
                myActivity.startActivityForResult(intent, REQUEST_SELECT_FILE);
            } catch (ActivityNotFoundException e) {
                Toast.makeText(myActivity, "Cannot open file chooser", Toast.LENGTH_LONG).show();
                return false;
            }

            return true;
        }
    }

}
`$([Environment]::NewLine)
Disposição

```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".ChatCaseActivity">

    <WebView
        android:id="@+id/chatcase"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
`$([Environment]::NewLine)
## # **Método 2:** carregar widget ChatCase a partir de arquivo html personalizado que integra script chatcase

## # Código HTML

Considere um arquivo \*.html em ativos que contém código html básico com tag script capaz de integrar widget telesk dentro de sua webview

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <script type="application/javascript">
      window.chatcaseSettings=
      {
          projectid: "<CHANGE_IT>",
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

      window.addEventListener('load', (event)=> {
        document.dispatchEvent(new Event('mousemove'))
      })

    </script>
</head>
</html>
`$([Environment]::NewLine)
Atividade

```
package com.chatcase.chatcasewidgetintegrationexample;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

public class ChatCaseInjectActivity extends AppCompatActivity {


    public static final int REQUEST_SELECT_FILE = 100;
    public ValueCallback<Uri[]> uploadMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chatcase);

        WebView myWebView = (WebView) findViewById(R.id.chatcase);


        myWebView.setWebChromeClient(new FileChooserWebChromeClient(this) {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                Log.d("ChatCaseInjectActivity", consoleMessage.message() + " -- From line "
                        + consoleMessage.lineNumber() + " of "
                        + consoleMessage.sourceId());
                return super.onConsoleMessage(consoleMessage);
            }
        });

        // Enable JavaScript
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);


        // Enable DOM storage API (localStorage/sessionStorage)
        webSettings.setDomStorageEnabled(true);

        //allow to snap photos
        webSettings.setAllowFileAccess(true);

        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);

        //Inject widget load URL
        myWebView.loadUrl("file:///android_asset/index.html");

    }


    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_SELECT_FILE) {
            if (uploadMessage == null) return;
            uploadMessage.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            uploadMessage = null;
        }
    }


    public class FileChooserWebChromeClient extends WebChromeClient {

        private Activity myActivity;

        public FileChooserWebChromeClient(ChatCaseInjectActivity myActivity) {
            this.myActivity = myActivity;
        }

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
            uploadMessage = filePathCallback;

            Intent intent = fileChooserParams.createIntent();
            try {
                myActivity.startActivityForResult(intent, REQUEST_SELECT_FILE);
            } catch (ActivityNotFoundException e) {
                Toast.makeText(myActivity, "Cannot open file chooser", Toast.LENGTH_LONG).show();
                return false;
            }

            return true;
        }
    }

}
`$([Environment]::NewLine)
Encontre [aqui](/docs/desenvolvedor/widget/web-sdk) outros parâmetros widget para personalizar sua experiência.

Disposição

```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".ChatCaseInjectActivity">

    <WebView
        android:id="@+id/chatcase"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
`$([Environment]::NewLine)
# # Exemplo

Você pode encontrar aqui um exemplo completo [ChatCase Widget para Android](https://github.com/ChatCase/chatcase-android-widget-example).
