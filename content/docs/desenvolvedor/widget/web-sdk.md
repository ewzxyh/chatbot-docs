---
title: "Widget SDK"
description: "Widget SDK ver 6.0"
---

# # Widget da telha

**Widget SDK ver 6.0**

![](https://user-images.githubusercontent.com/47848430/151355859-f94be6a7-3098-43a2-924c-d411e10d5815.png)

Está interessado na versão v4? [Clique aqui](/docs/desenvolvedor/widget/advanced/old-versions/web-sdk-v4).

Este guia mostrar- lhe- á como iniciar o mais rapidamente possível com o Widget SDK do ChatCase. O Widget SDK dará às empresas e desenvolvedores a flexibilidade para construir e personalizar uma experiência de chat que atenda aos seus requisitos específicos de design/marca.

# # Como instalar

Para conversar com seus visitantes, incorpore o widget em seu site. Copie o seguinte script e insira-o na fonte HTML entre as tags HEAD:

```html
    <script type="application/javascript">
        var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
        window.chatcaseSettings=
        {
            projectid: PROJECT_ID
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
`$([Environment]::NewLine)
Para obter o seu CHATCASE\ PROJECT\ ID vá ao Painel de Desenho e clique no item Widget do menu:

! [Painel ChatCase] (https://user-images.githubusercontent.com/47848430/150099187-a7697396-bc63-44d1-bcfc-d375da7a1b4b.png)

## # Instalar com informações básicas do visitante

Os visitantes do site são geralmente leads (visitantes se não comunicaram através do Messenger) enquanto que os usuários logados são usuários do ChatCase já logados uma vez. A principal diferença é a quantidade de informação que você sabe sobre eles. Você pode passar informações básicas através do objeto chatcaseSettings. Um exemplo é fornecido abaixo.

```html
    <script type="application/javascript">
        var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
        const USER_FULLNAME = "James Smith";
        const USER_EMAIL = redacted@example.invalid"
        window.chatcaseSettings=
        {
            projectid: PROJECT_ID,
            userFullname: USER_FULLNAME,
            userEmail: USER_EMAIL
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
`$([Environment]::NewLine)
## # Instalar com posição personalizada

Às vezes você pode querer mostrar Widget ChatCase no lado esquerdo ou direito do seu site. Além disso, você também pode querer obter mais / menos distância entre widget e margem do site. O exemplo a seguir mostra um widget alinhado no lado esquerdo e com margem personalizada do eixo X e Y.

```html
    <script type="application/javascript">
        var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"

        window.chatcaseSettings=
        {
            projectid: PROJECT_ID,
            align: 'left',
            marginX: '200px',
            marginY: '150px'
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
`$([Environment]::NewLine)
![Posição personalizada do widget: explicação da propriedade](https://user-images.githubusercontent.com/47848430/151353935-8ee4711d-0bc3-4044-ba67-039adfb0a4b2.png)

# # Habilitando visitantes autenticados no widget Chat

Você pode configurar seu widget para autenticar os visitantes usando a API Javascript e o token JWT. Mais informações [Widget Autenticação](/docs/desenvolvedor/widget/auth)
