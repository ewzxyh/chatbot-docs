---
title: "Como instalar o widget ChatCase Live Chat em um site Magento"
description: "Passo 1: Acesse o seu Painel de Administração Magentoa href=\"step-1-access-your-magento-admin-panel\" id=\"step-1-access-your-magento-admin-panel\"/afaça login no seu Painel de Admini"
---

Passo 1: Acesse o seu Painel de Administração Magento<a href="#step-1-access-your-magento-admin-panel" id="step-1-access-your-magento-admin-panel"></a>faça login no seu Painel de Administração Magento usando suas credenciais.

Passo 2: Navegue para a seção "Design"

Uma vez conectado, navegue até a seção "Design" e clique em Configuração.

Passo 3: Selecione a visão apropriada da loja

Encontre a visão de armazenamento apropriada que deseja configurar e clique em Editar na coluna de ação.

#### Passo 4: Edite a vista da loja e insira o widget de chat ao vivo do ChatCase Código JavaScript

Expandir a seção HTML Cabeça colar o código widget no campo Scripts e Folhas de Estilo e pressione o botão Salvar configuração.

Este é um exemplo do código do widget:

**\<script type="application/javascript">**\
&# x20; ** window\. chatcaseSettings=** \
&# x20; ** {**\
&# x20; ** projectid: "\<project-ID>"**\
&# x20; **};**\
&# x20; **( function( d, s, id) {** \
&# x20; ** var w=window; var d=document; var i=function() {i. c( argumentos);};**\
&#x20; **i.q=\[]; i.c=function(args){i.q.push(args);}; w\. ChatCase=i;** \
&#x20; **var js, fjs=d.getElementosPorTagName(s)\[0];**\
&# x20; ** se (d. geElementById(id)) retornar;**\
&# x20; ** js=d.createElement(s);** \
&#x20; \*\*js.id=id; js.async=true; js.src="<https://widget.chatcase.com/v6/launch.js";**\\>&# x20; ** fjs.parentNode.inserirBefore( js, fjs);**\
&# x20; **}( documento, 'script',' chatcase- jssdk'));**\
**\</script>**

Por favor, lembre-se de usar o seu ID do projeto. Você encontrará o código a qualquer momento em Configurações > Widget > Secção de Instalação.&#x20;

#### Passo 6: Salve as Alterações e Verifique o Resultado &#x20;

Depois de inserir o código, vá para o Sistema > Gerenciamento de cache, selecione TODAS as caixas de seleção e pressione o botão Atualizar/Enviar.

Finalmente salve as configurações e verifique o resultado visitando seu site Magento. O widget de chat ao vivo do ChatCase deve agora estar visível na página onde você inseriu o código.

Certifique-se de testar a funcionalidade do widget para garantir que ele funciona corretamente e está posicionado exatamente onde você quer no seu site Magento.
