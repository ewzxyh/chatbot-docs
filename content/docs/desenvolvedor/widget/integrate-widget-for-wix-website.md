---
title: "Widget para plataforma Wix Website"
description: "Este exemplo mostra como integrar o Widget ChatCase através de um código HTML personalizado usando Plataforma de website Wix(https://manage.wix.com/)"
---

Este exemplo mostra como integrar o Widget ChatCase através de um código HTML personalizado usando [Plataforma de website Wix](https://manage.wix.com/)

Pré-requisitos

Devido à [atualização de segurança](https://support.wix.com/en/article/updates-to-iframes-and-custom-elements) em wix, alguns elementos na instalação de widget snippet código poderia ser bloqueado. Mas nada de guerras. Já encontramos uma solução inteligente com algum trabalho adicional.

O que você tem que fazer, antes de adicionar código personalizado para o seu site com wix, é criar uma página html que pode hospedar o código de instalação ChatCase Widget snippet como o seguinte:

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
Agora tome notas deste url (para este tutorial vamos chamá-lo de **https\://\<my-server-hosting-page-url>** ). Temos de usá-lo em breve.

Instalação

Do seu painel wix website, siga estes passos:

1. Depois de completar a configuração básica do seu site, navidate para "Configurações". Você pode normalmente encontrar esta opção no menu superior ou barra lateral.
2. Role para baixo e clique em *Custom code* opção de configuração em **Desenvolvedor e integrações** seção.
3. Adicione o seu código personalizado clicando em * + Adicionar código personalizado * ![] (https://a.storyblok.com/f/156985/975x505/2a40158e0d/wix-custom-code.png/m/)
4. Da janela modal que aparece, coloque um elemento HTML iframe na caixa de texto. A propriedade iframe src tem que vincular a uma página pública https hospedada em seu servidor. Exemplo de código poderia ser:

```html
<iframe src="https://<my-server-hosting-page-url>" width="100%" height="600" style="border:none;"></iframe>
`$([Environment]::NewLine)
Defina um nome, as páginas em que o código tem de estar ativo e defina o código incorporado como 'pin to screen' (para o fazer ficar no canto inferior direito)

5. Aplicar as alterações e o widget de chat ao vivo do ChatCase em seu site Wix deve funcionar bem.

É isso! Seu site Wix está agora equipado com o widget de chat ao vivo da ChatCase, permitindo que você se envolva com os visitantes em tempo real e forneça excelente suporte ao cliente.

Muito obrigado a Frank Huisman da agência Duo Criativo pela colaboração na redação deste tutorial
