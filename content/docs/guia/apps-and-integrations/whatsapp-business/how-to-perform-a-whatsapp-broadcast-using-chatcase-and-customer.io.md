---
title: "Como executar uma transmissão WhatsApp usando ChatCase e Customer.io"
description: "Se você é um usuário Customer.io você pode ter notado que não é possível realizar uma transmissão nativa no canal WhatsApp. No entanto, é possível usar a opção Webhook para “mover”"
---

Se você é um usuário Customer.io você pode ter notado que não é possível realizar uma transmissão nativa no canal WhatsApp. No entanto, é possível usar a opção Webhook para “mover” a transmissão para ChatCase e usar nossas novas ações dedicadas WhatsApp. Como é possível? Fácil, as ações do Chatbot agora podem ser executadas através da API!

Vamos ver como se faz isso!

# ### Crie e configure um Chatbot no ChatCase<a href="#create-and-configure-a-chatbot-on-chatcase" id="create-and-configure-a-chatbot-on-chatcase"></a>Se você ainda não criou um Chatbot, entre no [ChatCase Dashboard] (https://panel.chatcase.com/v3/), crie ou selecione um projeto e clique em **Bot** na barra lateral esquerda. Clique no botão * Adicionar do zero* e crie um novo Chatbot.

Você está agora no Chatbot Design Studio. Criar um novo bloco clicando no botão *+add* e escolher um nome para este bloco. Antes de continuar, apague a ação padrão Responder, pois não é necessário atingir nosso objetivo.

<figure><img src="/doc-images/k5xcJa2PDyXA1ij33dgR.png" alt=""><figcaption></figcaption></figure>Agora clique em *Adicionar ação* e selecione o **WhatsApp by Attribute** action. Configurar esta ação é muito fácil. Basta criar um atributo personalizado, dando-lhe um nome que você irá usar mais tarde e escolhê-lo na seleção "Atribuir a"

<figure><img src="/doc-images/oPgPW8VlnALVI4wW4AyG.png" alt=""><figcaption></figcaption></figure>Feito! Sua ação está pronta para ser usada.

Use a ação em Customer.iohttps://gethelp.chatcase.com/articles/how-to-perform-a-whatsapp-broadcast-using-chatcase-and-customerio/#use-the-action-in-customerio) <a href="#use-the-action-in-customerio" id="use-the-action-in-customerio"></a>Assinatura em [cliente.io](https://customer.io/), criar uma nova transmissão, e configurá-lo para suas preferências escolhendo segmentos, condições, metas, etc.

No Passo 3 (**Conteúdo**), escolha a opção **Webhook** e acesse as configurações avançadas clique em *Conteúdo* caixa.

<figure><img src="/doc-images/eIPAsPne4NjCogJqKMLp.png" alt=""><figcaption></figcaption></figure>Neste ponto, uma solicitação HTTP deve ser escrita corretamente e para fazê-lo, é necessário conhecer a linguagem e a estrutura do modelo WhatsApp a ser enviado em transmissão. Mas não te preocupes, temos um truque para ti!

> Lembre-se que você pode enviar mensagens para seus clientes no WhatsApp apenas usando um modelo aprovado. Para qualquer dúvida sobre o processo de criação de modelos e configuração WhatsApp por favor se refere aos nossos guias em [WhatsApp Business Integration](/docs/guia/apps-and-integrations/whatsapp-business).

Use o truque de Prototipagem Rápida para gerar a carga útil da solicitação<a href="#use-the-fast-prototyping-trick-to-generate-the-request-payload" id="use-the-fast-prototyping-trick-to-generate-the-request-payload"></a>Volta no Chatbot Design Studio. Adicione um novo bloco para o Chatbot criado anteriormente, do que clique em *Adicionar ação* e selecione a ação **WhatsApp Static**.

Note que este bloco nunca será executado diretamente, mas pode ser usado como uma importante ferramenta de prototipagem rápida.

Neste ponto, obtenha o seu *número de telefone ID* do [Meta para desenvolvedores] (https://developers.facebook.com/apps/) plataforma e colá-lo no campo de entrada Telefone Número ID, em seguida, escolher o modelo que você deseja usar na transmissão.

É muito provável que o modelo selecionado contenha parâmetros, então vamos preencher os campos correspondentes com algumas informações de exemplo, incluindo o número de telefone do destinatário.

<figure><img src="/doc-images/JgBzBdZHbgUQ8yBFDfAF.png" alt=""><figcaption></figcaption></figure>se desejar, poderá ver a antevisão da sua mensagem do WhatsApp como o destinatário irá vê- la.

Um pouco mais abaixo, você poderá ver a carga útil gerada automaticamente que podemos usar para compilar a solicitação HTTP no customer.io.

> **Aviso!** No caso específico do customer.io é necessário e suficiente para entrar apenas um destinatário.

<figure><img src="/doc-images/4ECihOn4dozQopDv3v1o.png" alt=""><figcaption></figcaption></figure>Copie a carga gerada automaticamente e mova novamente no customer.io. Colar a carga estática no editor e torná-lo dinâmico.

<figure><img src="/doc-images/IinOeHBShE1cAIfdhsIO.png" alt=""><figcaption></figcaption></figure>Coloque as variáveis fornecidas pelo customer.io para preencher parâmetros como telefone destinatário\ número, nome, etc. Então, preste atenção às seguintes mudanças:

* payload.text deve ser o nome da ação **WhatsApp by Attribute**
* payload.token deve ser o token do chatbot fornecido por ** ChatCase**

** Obter o token do chatbot **

Você pode obter o token associado ao seu chatbot do Chatbot Design Studio em si, clicando em **General** no menu do lado esquerdo, e sob a aba **Desenvolvedor** você pode gerar um novo token simplesmente clicando no botão ** Get Token**.

<figure><img src="/doc-images/zknZ6LbFgDU4KGkPOnQP.png" alt=""><figcaption></figcaption></figure>Vamos completar a solicitação HTTP no customer.io especificando:

* Método: **POST**
* Url: **<https://api.chatcase.com/v3/modules/tilebot/ext/YOUR\\_BOT\\_ID>**
* Cabeçalho: **Content-Type: application/json**

<figure><img src="/doc-images/PP1EI9jJbVjv4Azt3iqN.png" alt=""><figcaption></figcaption></figure>É tudo! Agora você será capaz de fazer sua primeira transmissão WhatsApp com ChatCase.

Você pode realizar um teste clicando no botão **Enviar teste** no customer.io para ter certeza de que tudo funciona corretamente, então você pode salvar alterações, rever toda a sua transmissão e escolher se deve enviá-lo imediatamente ou programá-lo.

Se tiver alguma dúvida, não hesite em entrar em contato-nos ao vivo no chat ou no[redacted@example.invalid](mailto:redacted@example.invalid)□\
&#x20;

Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀
