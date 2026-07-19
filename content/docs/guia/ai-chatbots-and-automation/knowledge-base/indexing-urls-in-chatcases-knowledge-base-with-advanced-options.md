---
title: "Indexando URLs na base de conhecimento do ChatCase com Opções Avançadas"
description: "Dentro da Base de Conhecimento, você tem duas opções para enviar URLs:"
---

<figure><img src="/files/dHvgdKvI6guike6UdaZJ" alt=""><figcaption></figcaption></figure>Este guia irá guiá-lo através do processo de indexação de URLs usando as opções avançadas na Base de Conhecimento do ChatCase. Este recurso permite colar uma ou mais URLs do site e ajustar as partes da página web que devem ser indexadas, garantindo que seu agente de IA treine no conteúdo mais relevante, evitando seções que possam causar confusão.

### Passo 1: Aceda ao painel do ChatCase<a href="#step-1-access-the-chatcase-dashboard" id="step-1-access-the-chatcase-dashboard"></a>1. [**Login**](https://panel.chatcase.com/v3/dashboard/#/projects) para a sua conta ChatCase.
2. No menu do lado esquerdo, clique em **Base de Conhecimento**.

<figure><img src="/files/QW4NpHAoV8SgVWd1oxvD" alt=""><figcaption></figcaption></figure>Passo 2: Enviar URLs

Dentro da Base de Conhecimento, você tem duas opções para enviar URLs:

1. ** Indexagem padrão: ** Indexa a página inteira.
2. ** Opções Avançadas:** Dá-lhe controle sobre quais partes da página para indexar.

Selecione **Opções avançadas** para personalizar o processo de indexação.

<figure><img src="/files/jZIFeUZnmiiPp4IqIOOb" alt=""><figcaption></figcaption></figure>### Passo 3: Configurar Opções Avançadas<a href="#step-3-configure-advanced-options" id="step-3-configure-advanced-options"></a>Ao escolher **Avançado**, você verá opções, que eu explicarei abaixo, uma a uma:

** Etiquetas de extração (obrigatório):**\
Indique as marcas HTML que deseja indexar. Por exemplo, você pode incluir tags como \<h1>, \<h2>, \<p>, etc.

*Se sua página tem vários cabeçalhos e parágrafos, listar as tags para garantir que todos eles são capturados.*

** Etiquetas indesejadas:**\
Aqui você pode listar quaisquer tags HTML que não queira indexar.

*Se houver barras laterais ou elementos de navegação com tags que você prefere omitir, adicione essas tags aqui.*

** Nomes de classe indesejados:**\
Defina os nomes de classe que devem ser excluídos da indexação.

*Você pode querer evitar indexar seções como main\ footer ou qualquer outro nome de classe que não seja relevante para seus dados de treinamento.*

<figure><img src="/files/mGVffC8QDbCCy5EM6cYS" alt=""><figcaption></figcaption></figure>Passo 4: Colar URLs do seu site<a href="#step-4-paste-your-website-urls" id="step-4-paste-your-website-urls"></a>1. No campo designado, cole URLs do seu site. Você pode colar uma única URL ou várias URLs ao mesmo tempo.
2. Confirme suas entradas, e ChatCase processará a indexação com base em suas configurações avançadas.

<figure><img src="/files/0Fzz6ZbSaAZoMTM9sZYm" alt=""><figcaption></figcaption></figure>Passo 5: Usando sua base de conhecimento indexadahttps://gethelp.chatcase.com/articles/indexing-urls-in-chatcases-knowledge-base-with-advanced-options-39iqkg/#step-5-using-your-indexed-knowledge-base) <a href="#step-5-using-your-indexed-knowledge-base" id="step-5-using-your-indexed-knowledge-base"></a>Uma vez que seus URLs são indexados:

1. Vá para a seção **Flows** do menu do lado esquerdo.
2. Selecione o AI Agent que você deseja treinar usando os dados indexados.
3. No **Design Studio**, escolha a **"**[**Ask Knowledge Base**](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base)**"** ação. Essa ação recupera os dados relevantes das URLs indexadas usando um dos modelos OpenAI.

<figure><img src="/files/p2cgxLQd6ZO8GKHVzrHg" alt=""><figcaption></figcaption></figure>Se você tiver alguma dúvida ou precisar de mais ajuda, por favor, entre em contato conosco em [**redacted@example.invalid**](mailto:redacted@example.invalid).

Para mais detalhes sobre as capacidades do ChatCase, visite [www.chatcase.com](https://chatcase.com/).

Se você está pronto para pular dentro, você pode [começar com um teste gratuito agora] (https://panel.chatcase.com/v3/dashboard/#/signup).
