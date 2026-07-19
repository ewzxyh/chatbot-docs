---
title: "Conversa Aplicações Incorporadas"
description: "! Exemplo do aplicativo incorporado (https://user-images.githubusercontent.com/32564846/161718340-b89817b5-a3d3-45f2-a55e-a0d6b3fc99d5.png)"
---

# # Aplicações embutidas

! [Exemplo do aplicativo incorporado] (https://user-images.githubusercontent.com/32564846/161718340-b89817b5-a3d3-45f2-a55e-a0d6b3fc99d5.png)

Aplicações (aka Apps) exibidas no fluxo de conversação são uma ferramenta muito útil. Permitem atingir dois objectivos principais:

1. Melhoria da UI. Eles aumentam o poder interativo e funcional de uma conversa
2. Isolamento dos dados. Eles isolam totalmente o fluxo de dados da conversa.

** O aperfeiçoamento da IU** é óbvio. Você pode, por exemplo, jogar um vídeo game inteiro no fluxo de conversa, sem nunca deixar a conversa no chat. Você também pode completar um formulário de entrada complexo, que através de um chatbot é difícil de preencher. Há muitos casos de uso onde um aplicativo em execução na conversa aumenta o poder interativo percebido pelo usuário final.

** O isolamento de dados** é menos óbvio, mas provavelmente mais importante. Em ChatCase, o aplicativo conversacional é uma aplicação web inteira rodando em seu próprio servidor web no protocolo HTTPS. Isso significa que os dados trocados com o aplicativo são unkonwn pelo ChatCase e são trocados diretamente entre o aplicativo e sua própria infraestrutura. Isto diz respeito a ** privacidade** e ** segurança**. Imagine, por exemplo, que um usuário deve pagar por um carrinho. O chatbot pode fornecer ao usuário um aplicativo de pagamento onde o usuário é questionado sobre seu cartão de crédito e esses dados são diretamente trocados com a infraestrutura de pagamento, nunca com ChatCase. Nenhuma informação sobre a transação é armazenada na conversa. Através de um aplicativo apenas os atores interessados na interação estão envolvidos.

# # Anatomia de aplicação incorporada em conversação

Um aplicativo é apenas uma mensagem do tipo *frame*. Veja o protocolo [Widget JSON](https://developer.chatcase.com/widget/advanced/widget-json-protocol#message-with-content-in-iframe) para ver os detalhes.

! ['frame' tipo mensagem] (https://user-images.githubusercontent.com/32564846/161697596-3567a083-7ec7-47f1-bde0-933c7bec6e1b.png)

Aplicativo de incorporação com microlíngua

Além de usar o protocolo JSON widget, você pode usar melhor o [microlinguagem](https://docs.chatcase.com/knowledge-base/response-bot-images-buttons-videos-and-more/) para renderizar o aplicativo na resposta do chatbot sem conhecer especificações JSON estranhas.

```
tdFrame:APPLICATION_ENDPOINT
`$([Environment]::NewLine)
Por exemplo:

```
tdFrame:https://chatcase-conversational-app.chatcase.repl.co/chatbot
`$([Environment]::NewLine)
## # Altura da aplicação

Você também pode especificar a altura do aplicativo na conversa, usando o formato followinf:

```
tdFrame,hHEIGHT:APPLICATION_ENDPOINT
`$([Environment]::NewLine)
Por exemplo:

```
tdFrame,h310:https://chatcase-conversational-app.chatcase.repl.co/apps/creditcard
`$([Environment]::NewLine)
![Definir altura do aplicativo com microlíngua](https://user-images.githubusercontent.com/32564846/161760857-2dd0b10b-789e-4c4a-ad79-4e520a5fe7b6.png)

Com o ChatCase exibindo uma aplicação para o usuário final significa simplesmente enviar-lhe uma mensagem.

# # Situação da aplicação

Vale a pena entender que um aplicativo está totalmente sob seu controle. Você é totalmente responsável pelos dados do aplicativo, recursos do aplicativo, aplicativo ChatCase e uso de APIs de terceiros e ... status do aplicativo!

O "status do aplicativo" é o status do seu aplicativo no fluxo de trabalho de conversa. Suponha por exemplo que você incorporou um aplicativo na conversa para permitir que os usuários paguem por um carrinho usando seu cartão de crédito. Wath você quer é um aplicativo "ativo" apenas quando o usuário tem que pagar, enquanto o aplicativo deve estar em uma espécie de estado "inativo" quando o usuário parou ou terminou seu pagamento.

Para gerenciar o status do aplicativo há uma maneira simples. Você pode usar o *messageId* que vem no webhook de sua aplicação para identificar exclusivamente sua aplicação. Considere que, no caso de uso mais frequente, há uma estrita correspondência entre o aplicativo e a mensagem em que ele é exibido.

![Use o messageId como referência única do aplicativo em sua infraestrutura](https://user-images.githubusercontent.com/32564846/162071545-99326eca-de53-4931-95bc-35cb20a78427.png)

O princípio básico é que você pode usar a mensagem únicaId para identificar exclusivamente o aplicativo no fluxo de conversação e usar esta mesma mensagemId como um ID único em seu banco de dados para salvar dados relativos a essa instância de aplicativo, incluindo seu status.

# # App > Interação com APIs de telha

Seu aplicativo sempre pode usar * APIs ChatCase* para se comunicar com seu projeto, por exemplo, para enviar mensagens de volta para sua conversa quando quiser.

Como? Com cada carga útil do webhook você recebe uma **token** que você pode usar para falar com a conversa onde (como uma mensagem) o aplicativo é hospedado. Basta usar este token nas APIs do ChatCase para chamar qualquer (permitido) [Método REST](https://developer.chatcase.com/apis/rest-apiQueres...

Enviar mensagens aos usuários finais

...mas especialmente o [SendSupportMessage()](https://chatcase.github.io/chatcase-nodejs-libs/ChatCaseClient.html#sendSupportMessage) método. Este é um método especial que permite ao usuário enviar mensagens para a conversa onde o token pertence.

![Enviar mensagens para a conversa](https://user-images.githubusercontent.com/32564846/162134720-84f37b1f-b52d-473d-aaa0-908d9563a0e6.png)

Como você pode ver na imagem enviando mensagens do aplicativo de volta para a conversação pode ser muito útil. Você pode, por exemplo, notificar de forma graciosa e útil o fim de uma operação repleta de alguns dados úteis.

Agora é hora de enfrentar um exemplo **Tutorial**, o tutorial [Credit Card payment App](/docs/desenvolvedor/widget/widget-app-introduction/widget-app-payment).
