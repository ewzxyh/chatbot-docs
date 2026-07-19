---
title: "Javascript API: Métodos"
description: "ChatCase fornece um objeto JavaScript ChatCase que responde a alguns métodos. Estes permitem- lhe atualizar widget sem uma atualização da página e interagir com a janela do mensage"
---

ChatCase fornece um objeto JavaScript ChatCase que responde a alguns métodos. Estes permitem- lhe atualizar widget sem uma atualização da página e interagir com a janela do mensageiro.

# # Abra o widget

Isto irá abrir o elemento:

```javascript
window.ChatCase('open');
`$([Environment]::NewLine)
# # Minimizar o widget

Isto irá minimizar o elemento:

```javascript
window.ChatCase('close');
`$([Environment]::NewLine)
# # Esconder o elemento

Isto irá esconder o elemento:

```javascript
window.ChatCase('hide');
`$([Environment]::NewLine)
# # Mostrar o widget

Isto mostrará o elemento:

```javascript
window.ChatCase('show');
`$([Environment]::NewLine)
# # Elimine o widget

Isto irá limpar os elementos do widget html do DOM:

```javascript
window.ChatCase('dispose');
`$([Environment]::NewLine)
# # Reinicializar o widget

Se seu aplicativo é caracterizado por muito poucas atualizações de página (ou seja, conteúdo é trocado no lado do cliente, mas nenhuma atualização de página acontece, Angular, React, jQuery, etc.) e muitos JS assíncronos, você precisará atualizar o ChatCase quando os dados do usuário mudarem. Uma chamada reInit simula uma atualização de página, fazendo com que o ChatCase carregue novamente o widget e todas as configurações.

```javascript
window.ChatCase('reInit');
`$([Environment]::NewLine)
# # Reiniciar o widget

Este método permite- lhe reiniciar o widget com os dados do mesmo usuário sem fazer uma nova autenticação. Isto também mante em todas as configurações.

```javascript
window.ChatCase('restart');
`$([Environment]::NewLine)
# # Signin com anonimamente

Este método faz um sinal anonimamente

```javascript
window.ChatCase('signInAnonymous');
`$([Environment]::NewLine)
# # Signin com JWT personalizado Token

Este método faz um sigin usando um JWT Custom Token como descrito [aqui](/docs/desenvolvedor/widget/auth).

```javascript
window.ChatCase('signInWithCustomToken', customJwt);
`$([Environment]::NewLine)
# # Fazer um encerramento

Isto irá encerrar o widget:

```javascript
window.ChatCase('logout');
`$([Environment]::NewLine)
# # Mostrar chamada

Isto irá mostrar a chamada do elemento se não estiver aberto:

```javascript
window.ChatCase('showCallout');
`$([Environment]::NewLine)
# # Mostra ou esconde o PreChatForm

Este parâmetro configura a visibilidade do PreChatForm:

```javascript
window.ChatCase('setPreChatForm', true|false);
`$([Environment]::NewLine)
# # Definir prechatform Json personalizado

Este método permite personalizar a propriedade preChatFormJson e alterar a estrutura preChatForm se o preChatForm ainda estiver ativo (assegure que o valor preChatForm seja definido como true, otherwize use window\. Método ChatCase('setPreChatForm', true) antes de chamar setPreChatFormJson ). Este método aceita um Array (ver [docs](https://developer.chatcase.com/widget/advanced/prechat-form-json) para mais detalhes sobre personalizá-lo:

```javascript
window.ChatCase('setPreChatFormJson', customFormArray);
`$([Environment]::NewLine)
# # Obter personalizado PreChatForm Json

Este método permite que você obtenha o array preChatForm Json atual usado no componente preChatForm quando estiver ativo (verifique o valor preChatForm como true):

```javascript
window.ChatCase('setPreChatFormJson', customFormArray);
`$([Environment]::NewLine)
# # Definir novo valor para parâmetro Widget

Você pode alterar um valor para o parâmetro Widget ChatCase. Passe um objeto na forma de chave/valor, onde a chave representa o nome da propriedade que deseja modificar, e valor é o novo valor que deseja definir:

```javascript
window.ChatCase('setParameter', {key: string, value: string});
`$([Environment]::NewLine)
# # Definir novo valor para parâmetro de atributo Widget

Você pode alterar um valor para o parâmetro do atributo Widget ChatCase. Passe um objeto na forma de chave/valor, onde a chave representa o nome da propriedade que deseja modificar, e valor é o novo valor que deseja definir:

```javascript
window.ChatCase('setAttributeParameter', {key: string, value: string});
`$([Environment]::NewLine)
# # Começar uma nova conversa

Você pode iniciar programaticamente uma nova conversa:

```javascript
window.ChatCase('startConversation');
`$([Environment]::NewLine)
# # Abra uma conversa de uma identificação específica

Você pode abrir programaticamente uma conversa já existente por id na forma de *'support-group-'+\<project\_id>+'-'+uid*

```javascript
window.ChatCase('openConversationById', conversation_id);
`$([Environment]::NewLine)
# # Limpar dados do site

Você pode programaticamente limpar dados salvos da sessão :

```javascript
window.ChatCase('clearStorage');
```
