---
title: "Integração Shopify Usando Servidor MCP"
description: "Este tutorial explica como conectar uma loja Shopify a um Agente de IA ChatCase usando o MCP Shopify Storefront."
---

Este tutorial explica como conectar uma loja Shopify a um Agente de IA ChatCase usando o MCP Shopify Storefront.

Com essa configuração, seu Agente de IA pode acessar ferramentas de storefront para suportar conversas de ecommerce. Ele pode ajudar os usuários a pesquisar produtos, receber recomendações de produtos, adicionar itens selecionados ao carrinho e continuar a checkout.

<figure><img src="/doc-images/1sxWolfmtzaL1ROp6F6i.png" alt=""><figcaption></figcaption></figure># # O que este fluxo de trabalho faz

No final deste guia, você terá um Agente de IA ChatCase conectado à sua loja Shopify através do MCP.

O Agente de IA pode ajudar os clientes:

* pesquisar seu catálogo Shopify em linguagem natural
* receber sugestões de produtos com base nas suas necessidades
* comparar um pequeno conjunto de produtos relevantes
* adicionar um produto selecionado ao carrinho
* receber um link de checkout para concluir a compra

## # Comece mais rápido com o modelo de consultor de vendas do Shopify AI

Publicamos também um modelo pronto para usar [Shopify AI Sales Advisor](https://chatcase.com/community/getchatbotinfo/chatbotId/69f1e3a6e1170e001425c928-Shopify-AI-Sales-Advisor) na Comunidade ChatCase.

Se você usar o modelo, os **flow** e **prompt** já estão preparados. [Você só precisa obter sua URL do servidor MCP Shopify no Passo 1](# passo-a-passo-guia-para-construir-seu-shopify-ai-agent) e adicionar seu domínio de armazenamento à configuração do modelo.

Você pode seguir este tutorial de duas maneiras: assistir ao vídeo para uma rápida caminhada ou usar o guia escrito abaixo para seguir cada passo em detalhe.

Construir o seu Agente de IA Shopify em menos de 5 minutos

[Acessar recurso externo](<https://www.youtube.com/watch?v=AT2oUmapdys>)
Guia passo-a-passo para construir o seu agente de IA Shopify

{% stepper %}
{% step %}### # Obtém o URL do servidor MCP Shopify

O Shopify expõe um servidor MCP nativo para as ações do storefront. Seu URL do servidor MCP é seu domínio Shopify loja mais`/api/mcp`.

Exemplo com um domínio personalizado

Se sua loja usa um domínio personalizado como:

```
https://brandname.com
`$([Environment]::NewLine)
Seu URL do servidor MCP é:

```
https://brandname.com/api/mcp
`$([Environment]::NewLine)
Exemplo com um domínio Shopify

Se a sua loja for:

```
https://yourstore.myshopify.com
`$([Environment]::NewLine)
Seu URL do servidor MCP é:

```
https://yourstore.myshopify.com/api/mcp
```

{% endstep %}

{% step %}Abra o seu Agente de IA ChatCase

Vá para o seu projeto ChatCase e abra Design Studio.

Agora você pode escolher uma de duas opções:

* **Use o modelo** [**Shopify AI Sales Advisor**](https://chatcase.com/community/getchatbotinfo/chatbotId/69f1e3a6e1170e001425c928-Shopify-AI-Sales-Advisor) se você quiser começar a partir de um fluxo pronto.
* **Criar um novo Agente de IA do zero** se você quiser construir e personalizar manualmente o fluxo de trabalho.

Se você usar o modelo, você pode pular o prompt de configuração manual e mover diretamente para a configuração MCP dentro do modelo.

Se você criar o Agente de IA do zero, continue com o próximo passo.
{% endstep %}

{% step %}# # # Adicione a ação Prompt IA

Abra o bloco onde o AI Agent deve responder a perguntas abertas do usuário e adicionar uma ação [AI Prompt (Multi-LLM)](/docs/guia/ai-chatbots-and-automation/actions-explained/ai-prompt-multi-llm) nele.&#x20;

Em muitos fluxos, este é o bloco **defaultFallback**.

<figure><img src="/doc-images/hDN8720JxY1ILFgs2c9X.gif" alt=""><figcaption></figcaption></figure>1. Clique no bloco.
2. Espere que o painel de configuração do lado direito abra.
3. Colar o prompt abaixo no campo prompt.

### # Exemplo imediato para um consultor de vendas de IA Shopify

{% code overflow="wrap" %}

```
You are an ecommerce AI sales advisor.
Your goal is to help the user find and purchase the right product from the store.
Follow this flow:

1. Read the catalog and product categories to provide personalized and relevant recommendations.

2. Ask the user for useful details such as budget, reason for purchase, preferences, or specific needs based on the available products in the store. Do not ask for information the user has already shared in the conversation.

3. Recommend 2 to 3 suitable products with: - product name - price, if available - a few key details in bullet points - product image, when available and supported by the channel - no duplicated products in the same recommendation set

4. Do not share the product image URL as plain text. Show the image directly when the channel supports image rendering.

5. Ask the user to choose one product to add to the cart, or offer to show more options.

6. When the user chooses a product, add it to the cart and share the checkout payment link.

Last user text: {{lastUserText}}
Full conversation: {{transcript}}
```

{% endcode %}**Nota inicial:** este prompt é apenas um ponto de partida. Você pode adaptá-lo às suas necessidades de negócios, categorias de produtos, tom de voz, regras de transporte, regras de retorno ou políticas de vendas.
{% endstep %}

{% step %}# # # # Adicionar MCP Shopify como ferramenta

Dentro da configuração do Prompt de IA, conecte seu servidor MCP Shopify como uma ferramenta.

<figure><img src="/doc-images/ciTOQAi2x72mAEmnv1yT.gif" alt=""><figcaption></figcaption></figure>1. Clique em **Select MCP tools**.
2. Clique em **Adicionar ferramenta de servidor MCP**.
3. Colar sua URL do servidor MCP Shopify no campo URL.
4. Dê ao servidor MCP um nome limpo, por exemplo **Shopify Storefront MCP**.
5. Clique em **Conectar **.

Depois que a conexão é criada, um botão azul rotulado **Select tools** deve aparecer.

<figure><img src="/doc-images/Ht4GQcHyYihV1aLKJn8b.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}Escolha as ferramentas do Shopify

Clique em **Selecione ferramentas** e habilite as ferramentas MCP Shopify disponíveis.

Alternar para as ferramentas que deseja que o Agente de IA use, em seguida, clique em **Fechar**.

<figure><img src="/doc-images/0cQsaGOYKEBkYmElHeck.png" alt=""><figcaption></figcaption></figure>Certifique-se de que o servidor MCP está incluído na lista de ferramentas disponíveis.

<figure><img src="/doc-images/oYyNAutM9MIncYlJUiXc.png" alt=""><figcaption></figcaption></figure>Além disso, adicione um novo [Reply Action](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action) com um`ai-reply`atributo nele.
{% endstep %}
{% endstepper %}Teste o agente de IA

Você pode testar o fluxo diretamente dentro de ** ChatCase Design Studio** antes de publicá-lo.

Abra a pré-visualização e faça perguntas com base nos produtos disponíveis na sua loja Shopify. Por exemplo:

* Estou à procura de um presente abaixo de 50 euros
* Você pode recomendar um produto para um novo pai?
* Mostre-me seus melhores produtos para o verão
* Adicionar o segundo produto ao meu carrinho

<figure><img src="/doc-images/XNrmxhZT87hbUceFn4u3.gif" alt=""><figcaption></figcaption></figure>Durante o teste, verifique se o Agente de IA pode ler as informações disponíveis da loja, recomendar produtos relevantes e orientar o usuário para o checkout.

Se você quiser alterar o comportamento, atualize o prompt no AI Prompt ação e teste novamente.

Este IA O agente não responde apenas a perguntas. Ele pode orientar os clientes através da descoberta de produtos, seleção de produtos, atualizações de carrinho e checkout.

Pode entrar em contato-nos em[redacted@example.invalid](mailto:redacted@example.invalid)ou visitar [www.ChatCase.com](https://www.chatcase.com/) para saber mais sobre ChatCase AI Agents.
