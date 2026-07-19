---
title: "Como instalar o widget ChatCase Live Chat em um site BigCommerce"
description: "Passo 1: Entre no seu painel de administração BigCommerce"
---

**Passo 1: Entre no seu painel de administração BigCommerce**

faça login no seu painel de administração BigCommerce usando suas credenciais.

**Passo 2: Ir para a frente da loja**

No painel de administração BigCommerce, navegue até a seção "Storefront". Aqui é onde você pode gerenciar vários aspectos da aparência e funcionalidade do seu site.

**Passo 3: Gerenciador de scripts de acesso**

Dentro da seção "Storefront", encontre e selecione "Script Manager". Gerenciador de script permite que você adicione scripts personalizados ao seu site.

**Passo 4: Criar um Script**

No Gerenciador de scripts, clique no botão "Criar um script" para começar a adicionar o widget de chat ao vivo do ChatCase.

** Passo 5: Configurar parâmetros do script**

Preencha os parâmetros do script da seguinte forma:

* **Localização na página**: Escolha "Footer" para colocar o script na parte inferior de suas páginas web.
* **Selecione páginas onde o script será adicionado**: Selecione "Páginas de armazenamento" para adicionar o widget a todas as páginas relacionadas à loja.
* ** Categoria do script**: Escolha "Functional" para categorizá-lo como um script funcional.
* **Script type**: Selecione "Script" para indicar que você está adicionando um script personalizado.

**Passo 6: Copiar o Código de Widget da telha

Vá para o seu painel ChatCase e localize a seção " Widget de Instalação". Aqui, você vai encontrar o código widget que você precisa incorporar em seu site.

Este é um exemplo:\
&#x20; \<script type="application/javascript">\
&# x20; window\. chatcaseSettings= \
&#x20; #
&# x20; projectid: "63a075485f117f0013541f43"\
&# x20; };\
&# x20; (função( d, s, id) {\
&# x20; var w=window; var d=document; var i=function() {i. c( argumentos);};\
&#x20; i.q=\[]; i.c=function(args){i.q.push(args);}; w\. ChatCase=i; \
&#x20; var js, fjs=d.getElementsByTagName(s)\[0];\
&#x20; se (d.getElementById(id)) retornar;\
&# x20; js=d.createElement(s); \
&#x20; js.id=id; js.async=true; js.src="<https://widget.chatcase.com/v6/launch.js";\\>&#x20; fjs.parentNode.inserirBefore( js, fjs);\
&# x20; }( documento, 'script',' chatcase- jssdk'));\
&# x20;\</script>\
&#x20;

Por favor, lembre-se de usar seu ProjectID.

**Passo 7: Colar o Código de Widget**

1. Copie o código widget fornecido pelo ChatCase. Este código contém as configurações do widget de chat e as configurações de aparência.
2. Retorne ao seu painel de administração BigCommerce e cole o código widget no campo "Conteúdo Script". Aqui é onde você irá inserir o código widget de chat ao vivo do ChatCase.

**Passo 8: Salve o script**

Depois de colar o código widget, clique no botão "Salvar" para salvar suas alterações.

** Passo 9: Feito!**

Parabéns! Você instalou com sucesso o widget de chat ao vivo do ChatCase em seu site BigCommerce. Os visitantes do seu site poderão agora usar o widget de chat para contactá-lo para obter suporte ou perguntas.

Lembre-se de monitorar regularmente e responder às mensagens de chat recebidas para fornecer excelente suporte ao cliente através do widget de chat ao vivo ChatCase em seu site BigCommerce.

É isso! Seu widget de chat ao vivo do ChatCase deve agora estar funcionando em seu site BigCommerce, permitindo que você se envolva com seus clientes em tempo real.
