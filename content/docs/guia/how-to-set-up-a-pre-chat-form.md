---
title: "Como configurar um Formulário Pré-Conversa"
description: "Como configurar um formulário pré-conversa"
---

Como configurar um formulário pré-conversa

O que é uma forma pré-conversa?<a href="#what-is-a-pre-chat-form" id="what-is-a-pre-chat-form"></a>Antes de nos tornarmos práticos, devemos fornecer uma definição do formulário Pré-Conversa. Um formulário pré-chat é um ** formulário pré-fabricado** que um usuário obtém ao clicar na janela de chat ao vivo para iniciar uma conversa. Normalmente, ele pede informações básicas, como nome completo e endereço de e-mail. Naturalmente, ele pode ser **tailored** para qualquer informação que você gostaria de adquirir.

<figure><img src="/files/UwFq5EbV4i9zvxBkH2SE" alt=""><figcaption></figcaption></figure>Como habilitar um formulário de pré-conversa?<a href="#how-to-enable-a-pre-chat-form" id="how-to-enable-a-pre-chat-form"></a>[Assine na sua conta do ChatCase] (https://panel.chatcase.com/v3/dashboard/#/projects), vá para **Settings**, escolha Widget e finalmente role para baixo para Pre-chat.

<figure><img src="/files/zBU8zh1LmDkI2ml8NkrM" alt=""><figcaption></figcaption></figure>Personaliza o seu formulário de pré-conversa<a href="#customize-your-pre-chat-form" id="customize-your-pre-chat-form"></a>Uma vez que você habilitou seu formulário pré-conversa, você pode definir seu título descritivo, ou simplesmente deixar o que disponibilizamos para você. **Um formulário básico pré-chat** pedirá apenas um nome e um e-mail. Se você precisar de outros tipos de informações, basta ativar campos personalizados.

<figure><img src="/files/jz9ujv1uHLz9JgDynkFK" alt=""><figcaption></figcaption></figure>Se optar por activar ** campos personalizados**, estas são as opções que irá obter:&#x20;

* Nome completo;
* email;
* telefone;
* Termos & Compliance de privacidade;
* Aceitar Termos & Privacidade;
* Primeira mensagem

<figure><img src="/files/395zEY53xAtxATLCzzze" alt=""><figcaption></figcaption></figure>Exemplos pré-conversa<a href="#pre-chat-form-examples" id="pre-chat-form-examples"></a>Aqui estão dois casos de uso interessantes para o &#x20;

** Primeira mensagem**

Em particular, se você escolher **Primeira mensagem**, isso permitirá ao seu usuário redigir uma mensagem para a Equipe de Suporte que lhes dará uma ideia inicial do problema. Dessa forma, eles serão capazes de rapidamente voltar para o usuário com solução. Veja abaixo.

<figure><img src="/files/PXC9lwQCViyUF4f8zBAw" alt=""><figcaption></figcaption></figure>Primeira mensagem como a pré-visualização do formulário:

<figure><img src="/files/rfMIAG7T5mp1hCUvNe8H" alt=""><figcaption></figcaption></figure>** Termos e Política de Privacidade**

Outro caso de uso frequente é quando você precisa que seus usuários se familiarizem com suas políticas, como Termos de Serviço e Política de Privacidade. Você pode incluir o script html dentro do campo personalizado, por exemplo:

```
<a href='https://chatcase.com/termsofservice/' target='_blank'>Terms</a> and <a href='https://chatcase.com/privacy.html' target='_blank'>Privacy Policy</a>
`$([Environment]::NewLine)
Você também pode incluir a caixa de seleção obrigatória “Concordo”.

<figure><img src="/files/ay9T3eAVqSg6VVHauFAz" alt=""><figcaption></figcaption></figure>Termos & Política de privacidade como pré-visualização do formulário:

<figure><img src="/files/57ReuwyHBmVhZmAZcPIE" alt=""><figcaption></figcaption></figure>Para personalizações pré-chat mais específicas com ** Especificações JSON**, confira nossa [zona de desenvolvimento](https://developer.chatcase.com/widget/advanced/prechat-form-json#custom-prechat-form).

É isso, pessoal! Isto era tudo o que precisavas de saber sobre o nosso formulário pré-conversa. Se você precisar de algum esclarecimento, escreva em[redacted@example.invalid](mailto:redacted@example.invalid)
