---
title: "Widget para Reagir com WebView"
description: "Este exemplo mostra como integrar o Widget ChatCase através de um WebView for React Native Expo ou React Native CLI project"
---

Este exemplo mostra como integrar o Widget ChatCase através de um WebView for React Native Expo ou React Native CLI project

# # Integrar Widget para Reagir Projeto Expo Nativo com WebView

Pré-requisitos

Certifique-se de ter instalado o reactive-native-webview via comando Expo:

```shell
npx expo install react-native-webview
`$([Environment]::NewLine)
## # **Método 1:** carregar widget ChatCase de incorporar url

Considere um arquivo \*.html em ativos que contém código html básico com tag script capaz de integrar widget telesk insede seu webview

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
Adicionar uma visão Web ao arquivo e definir a origem como a URL do arquivo html local

```dart
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';


const WebViewScreen = () => {
 return (
   <View style={styles.container}>
     <WebView
       originWhitelist={['*']}
       source={require('../../assets/widget.html')}
       style={{ flex: 1 }}
     />
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
});


export default WebViewScreen;
`$([Environment]::NewLine)
### **Método 2:** carregar widget ChatCase do script de incorporação

Adicione uma visão web ao arquivo e defina a fonte como código html

```dart
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';


const WebViewScreen = () => {
 const htmlContent = `
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
    <body>
    </body>
   </html>
 `;


 return (
   <View style={styles.container}>
     <WebView
       originWhitelist={['*']}
       source={{ html: htmlContent }}
       style={{ flex: 1 }}
     />
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
});


export default WebViewScreen;
`$([Environment]::NewLine)
# # Integrar Widget para Reagir Projeto CLI Nativo com WebView

Pré-requisitos

Certifique-se de ter instalado o reactive-native-webview via comando Expo:

```shell
npx expo install react-native-webview
`$([Environment]::NewLine)
Implementação

Considere um arquivo \*.html em ativos que contém código html básico com tag script capaz de integrar widget azulejo dentro de sua webview ex. * "widget.html"*

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
Adicione o arquivo **widget.html** ao diretório correto do projeto.

**Para Android**: Coloque o arquivo em android/app/src/main/assets/.\
**Para iOS**: Coloque o arquivo em iOS/\<AppName>/widget.html. Se a pasta de ativos não existe (no Android), você pode criá-la manualmente.

Adicionar visão web ao App.tsx

```dart
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


import { Platform } from 'react-native';


const App = () => {
 const localFile = Platform.OS === 'ios' ? require('./widget.html') : 'file:///android_asset/widget.html';


 return (
   <SafeAreaView style={styles.container}>
     <WebView
       originWhitelist={['*']}
       source={Platform.OS === 'ios' ? localFile : { uri: localFile }}
       style={styles.webview}
     />
   </SafeAreaView>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 webview: {
   flex: 1,
 },
});


export default App;
`$([Environment]::NewLine)
# # Exemplo

Você pode encontrar aqui um exemplo completo de [ChatCase Widget para Reagir o exemplo de projeto de EXPO nativo](https://github.com/ChatCase/chatcase-widget-react-native-expo) ou [exemplo do ChatCase Widget para Reagir o exemplo do projeto CLI nativo](https://github.com/ChatCase/chatcase-widget-react-native-cli)
