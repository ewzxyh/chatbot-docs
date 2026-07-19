---
title: "Como instalar o widget de chat ao vivo ChatCase em um site Wix"
description: "Passo 1: Aceda a Definições no painel do seu site"
---

**Passo 1: Aceda a Definições no painel do seu site**

1. Entre na sua conta Wix e acesse o painel do seu site.
2. No painel, navegue até "Configurações". Você pode normalmente encontrar esta opção no menu superior ou barra lateral.

**Passo 2: Clique na guia Código Personalizado na seção Avançado**

1. Dentro da seção "Configurações", selecione "Avançado".
2. Em "Avançado", clique na guia "Código Personalizado". Aqui é onde você pode adicionar trechos de código personalizados para o seu site Wix.

** Passo 3: Clique + Adicionar Personalizado Código no canto superior direito**

Para adicionar o código widget de chat ao vivo do ChatCase, clique no botão "+ Adicionar Código Personalizado" localizado no canto superior direito da guia "Código Personalizado".

**Passo 4: Colar o Código de Widget da telha

Na caixa de texto fornecida, cole o seguinte trecho de código:

\<script type="application/javascript">\
&# x20; window\. chatcaseSettings = #
&# x20; projectid: "63a075485f117f001354g43"\
&# x20;};\
&# x20; (função( d, s, id)
&# x20; var w = window; var d = document; var i = function () { i. c( argumentos); };\
&#x20; i.q = \[]; i.c = função(args) { i.q.push(args); }; w\. ChatCase = i;\
&#x20; var js, fjs = d.getElementsByTagName(s)\[0];\
&#x20; se (d.getElementById(id)) retornar;\
&# x20; js = d. createElement(s);\
&#x20; js.id = id; js.async = true; js.src = "<https://widget.chatcase.com/v6/launch.js";\\>&#x20; fjs.parentNode.inserirBefore( js, fjs);\
&# x20;} (documento, 'script', 'chatcase- jssdk'));\
\</script>\
&#x20;

Por favor, lembre-se de usar o seu ProjectID

** Passo 5: Digite um nome para o seu código**

Dê ao seu snippet um nome reconhecível. Isso facilitará a identificação mais tarde.

**Passo 6: Selecione uma opção em Adicionar Código às Páginas **

Escolha onde deseja que o código seja aplicado:

* "Todas as páginas": Isso adiciona o widget ChatCase a todas as páginas do seu site, incluindo páginas futuras.
* "Escolha páginas específicas": Use o menu suspenso para selecionar as páginas específicas onde você deseja exibir o widget.

**Passo 7: Escolha onde colocar seu código em:**

Selecione onde você deseja colocar o código dentro da estrutura HTML da sua página. As opções incluem:

* "Head"
* "Body - start"
* "Corpo - fim"

**Passo 8: Clique em Aplicar **

Finalmente, clique no botão "Aplicar" para salvar suas alterações e ativar o widget de chat ao vivo do ChatCase em seu site Wix.

É isso! Seu site Wix está agora equipado com o widget de chat ao vivo da ChatCase, permitindo que você se envolva com os visitantes em tempo real e forneça excelente suporte ao cliente.
