---
title: "Autenticação do Widget"
description: "Requer Widget Javascript API v4"
---

# # Habilitando visitantes autenticados

Requer Widget Javascript API v4

Visão geral

Você pode configurar seu widget para autenticar os visitantes usando a API Javascript e o token JWT.

Quando você configura o widget Chat para usar visitantes autenticados, você obtém os seguintes benefícios:

* Capacidade de ter maior confiança e segurança que o visitante / cliente que você ou seus agentes estão falando é o negócio real
* Suporte para identificação de dispositivo cruzado / navegador. O visitante pode ser visto como a mesma pessoa se ou quando ele optar por usar um dispositivo ou navegador diferente quando o ID personalizado é especificado na chamada de autenticação.

Para configurar seu widget para autenticação de visitante, você precisa [Gerar um Projeto Shared Secret](/docs/desenvolvedor/apis/authentication#genering-a-project-shared-secret). Apenas os administradores de chat podem configurar as configurações de autenticação do visitante. Depois de gerar o segredo compartilhado, use-o para criar um token JWT que você adicionará ao seu trecho do Web Widget.

Criando um token JWT

Para criar um token JWT:

1\) Construir uma carga útil do servidor para o token JWT. Seu token precisa ser gerado dinamicamente do lado do servidor na carga da página. Siga este guia para [Criar um JWT Token](/docs/desenvolvedor/apis/authentication).

2\) Defina a propriedade widget ChatCase **autoStart** para **false**.

3\) Use a **janela\. ChatCase( 'signInWithCustomToken', JWT)** Javascript API para fornecer uma função que fornece um JWT fresco cada vez que é invocado. Abaixo está um exemplo de código:

```
window.ChatCase("signInWithCustomToken", "<JWT JWT_TOKEN_HERE_GENERATED_SERVER_SIDE>");
`$([Environment]::NewLine)
ATENÇÃO: o token passado com signInWithCustomToken deve começar com a string "JWT".

Exemplo:

```
window.ChatCase("signInWithCustomToken","JWT 12345678...");
`$([Environment]::NewLine)
4\) Use o evento **onAuthStateChanged** para verificar se o usuário está logado e então mostrar widget

```
window.ChatCase('onAuthStateChanged', function(event_data) {
    console.log("onAuthStateChanged FIRED-->", event_data);
    if(event_data.detail.isLogged){
        window.ChatCase('show')
    }
});
`$([Environment]::NewLine)
Veja um exemplo completo [aqui](https://www.w3schools.com/code/tryit.asp?filename=GU3DPFHYTP8E).

# # Sobre a experiência do agente com visitantes autenticados

Algumas coisas são atualizadas no painel do Chat quando um agente começa a conversar com um visitante autenticado.

Primeiro, o agente poderá dizer que o visitante é autenticado pela sobreposição autenticada do checkmark no avatar do visitante.

![imagem] (https://user-images.githubusercontent.com/9378770/150633296-5bb21335-2b5d-4be9-a5d2-d62b0f488e7e.png)
