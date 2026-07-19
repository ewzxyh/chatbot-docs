---
title: "Integrar o Agente de IA do Ticket do Zendesk"
description: "Embora o Zendesk seja uma ferramenta dominante e poderosa no ticketing, ele não oferece os melhores recursos de IA para agentes ou assistentes baseados em IA. Novas plataformas com"
---

Embora o Zendesk seja uma ferramenta dominante e poderosa no ticketing, ele não oferece os melhores recursos de IA para agentes ou assistentes baseados em IA. Novas plataformas como a ChatCase, com recursos focados em IA, têm mostrado uma abordagem mais inovadora no suporte ao cliente automatizado.

Combinar o robusto sistema de tickets do Zendesk com as soluções orientadas para IA da ChatCase pode melhorar significativamente a eficiência e a satisfação do cliente. &#x20;

Neste tutorial, mostraremos passo a passo como integrar o ChatCase com o Zendesk.

#### **Configuração de ChatCase**<a href="#chatcase-configuration" id="chatcase-configuration"></a>Primeiro, você precisará entrar na sua conta do ChatCase.

Se você ainda não tem uma conta, não se preocupe – você pode [**criar uma rapidamente aqui.**](https://panel.chatcase.com/v3/dashboard/#/signup)

Uma vez conectado, vá até a seção **Bots** em seu painel ChatCase. Aqui, você tem a opção de escolher um bot existente ou começar do zero.

Para este tutorial, vamos começar do zero.

No **Design Studio**, você configurará seu bot para coletar informações essenciais dos usuários, como seu nome, e-mail e solicitação. Para fazer isso, basta usar a ação "[Capture User Reply](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action)", como mostrado na imagem abaixo.

<figure><img src="/files/gT0S0tcNIRTyHLmY1Zeu" alt=""><figcaption></figcaption></figure>Agora, vamos conectar ChatCase ao Zendesk usando [**Make**](/docs/guia/ai-chatbots-and-automation/actions-explained/make.com-action).&#x20;

Na barra de ferramentas esquerda, sob a seção **Integrações**, encontre e selecione **Make** para adicioná-la ao fluxo do seu bot, como ilustrado abaixo.

<figure><img src="/files/HiQ74POtAsgl33Yk6CQP" alt=""><figcaption></figcaption></figure>Quando você clicar no bloco Make, uma popup aparecerá à direita. É aqui que você define quais informações devem ser enviadas para o Make. Na seção ** Parâmetros do Corpo**, mapeie os detalhes do usuário para os seguintes atributos:

* userFullname
* userEmail
* Pedido do Usuário

Em seguida, você vai precisar criar uma URL webhook no Make, que eu vou mostrar-lhe como fazer em breve. &#x20;

Uma vez que isso seja feito, você conectará o endpoint verde do fluxo a uma ação de resposta simples para confirmar que os dados foram enviados com sucesso.

<figure><img src="/files/z2tfJTmrZnSnp12oJzH5" alt=""><figcaption></figcaption></figure>Óptimo! Essa é a configuração ChatCase feito. Agora, vamos passar para a configuração do Zendesk.

### **Zendesk Configuration**

Para conectar o ChatCase ao Zendesk, a primeira coisa que você precisará fazer é criar um cliente OAuth na sua conta do Zendesk. Isso lhe fornecerá o necessário **Domain**, **Client ID** e **Client Secret** para a integração.

Aqui está como você faz:

1. Entre na sua conta do Zendesk como administrador.
2. Navegue até o **Admin Center** clicando no ícone de engrenagem ou através de seu perfil dropdown.
3. No Centro de Administração, acesse **Apps e Integrações > APIs > Clientes OAuth**.
4. Clique no botão ** Adicionar Cliente OAuth**.
5. Preencha os campos necessários:
* ** Nome do cliente**
* **Unique Identifier (ID do cliente)**
* **Client Type**: Confidencial**.
6. Uma chave **Secret** será gerada automaticamente – certifique-se de copiar e salvá-la com segurança, como o Zendesk sugere.
7. Finalmente, clique em **Salvar** para criar seu cliente OAuth.

Fantástico! Agora que temos o que precisamos do Zendesk, vamos terminar de configurar a integração no Make.

#### **Fazer configuração#

Primeiro, faça login na sua conta Faça e navegue para a seção ** Cenários**.

A partir daí, selecione o módulo **Custom Webhook**. Uma vez que você fizer isso, uma URL webhook será gerada – copie esta URL.

<figure><img src="/files/GnNep2IIjU4fXgilW9uO" alt=""><figcaption></figcaption></figure>Em seguida, volte para o seu painel ChatCase, e no bloco **Make** do fluxo do seu bot, cole o URL webhook que você acabou de copiar.

<figure><img src="/files/FAAp3QoFtXqAbcwJO00U" alt=""><figcaption></figcaption></figure>Agora, retorne ao Make e adicione um novo módulo chamado **Zendesk - Criar um Ticket**.&#x20;

Você precisará conectar este módulo à sua conta do Zendesk usando o **Unique Identifier (Client ID)**, **Secret (Client Secret)** e **Domain** que recebemos antes da configuração do Zendesk OAuth.

Se você não tiver certeza sobre o Domínio, você pode facilmente encontrá-lo na URL do seu painel do Zendesk, algo como \<yourdomain>.zendesk.com.

<figure><img src="/files/A9tBUb0v8kgzaHDlRLvF" alt=""><figcaption></figcaption></figure>Uma vez que você tenha feito isso, seu cenário Make estará pronto para conectar o ChatCase com o Zendesk.&#x20;

Bata em **Corra Uma vez** para testar tudo.

Em seguida, volte para o seu painel ChatCase. Clique no botão **Teste-o** no canto superior direito.

Passe pela conversa com o bot, fornecendo seu nome, e-mail e solicitação.

<figure><img src="/files/NOhjg9yjuXQs9ysKeHkf" alt=""><figcaption></figcaption></figure>Agora temos de voltar ao cenário do Make.

No módulo Zendesk, mapeie os dados do ChatCase para os campos apropriados:

* Para **Sujeito**, você pode usar .
* Para **Pedido Nome**, use .
* Para **Requester Email**, use .

<figure><img src="/files/I0WtJtyrKAZQuUyjQCNf" alt=""><figcaption></figcaption></figure>Sinta-se livre para personalizar outros campos com base em suas necessidades específicas.

Perfeito. Pronto. Só precisamos de salvar e activar o cenário.

## **Testando a Integração#

Vamos testar o bot em ChatCase. Clique no botão **Teste-o** no canto superior direito do painel do ChatCase e interaja com o bot para passar pela conversa.

<figure><img src="/files/x3CZGKeP24HhH9QtwgjG" alt=""><figcaption></figcaption></figure>Em seguida, verifique o painel Make para ver se o cenário foi executado com sucesso e recebeu os dados do ChatCase.

Finalmente, vá ao seu painel do Zendesk, atualize a página e você deve ver um novo ticket criado com as informações fornecidas.

<figure><img src="/files/MhCmRKXHWt1SqWKzLlyU" alt=""><figcaption></figcaption></figure>Agora, sua integração está ao vivo, e quaisquer novas interações com seu bot ChatCase criarão automaticamente tickets no Zendesk.

Por favor, note que a integração **Make** não está disponível no ChatCase ** versão experimental**. Se você estiver em um teste e quiser testar esse recurso, sinta-se à vontade para [** contact us**](mailto:redacted@example.invalid).

Esperamos que esta integração melhore sua experiência de suporte ao cliente!

Se tiver alguma dúvida, não hesite em entrar em contato-nos em [**redacted@example.invalid**](mailto:redacted@example.invalid).

Saiba mais sobre ChatCase: [**www.chatcase.com**](https://chatcase.com/)

Comece com uma conta grátis do ChatCase: [**Inscreva-se Aqui**](https://panel.chatcase.com/v3/dashboard/#/signup)
