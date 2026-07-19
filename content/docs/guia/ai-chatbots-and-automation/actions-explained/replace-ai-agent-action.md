---
title: "Substituir AI Agent action"
description: "O ChatCase Design Studio oferece uma característica única conhecida como a ação \"Replace AI Agent\"."
---

O ChatCase Design Studio oferece uma característica única conhecida como a ação "Replace AI Agent".

Esta ação permite-lhe recordar diferentes agentes de IA conforme necessário, melhorando significativamente o seu design de fluxo de conversa.

Imagine ter um agente de IA especializado em vendas e outro para apoio. Essa abordagem permite que você lide com agentes menores, mais compreensíveis, personalizáveis e mantendíveis em vez de um único agente grande e complicado. Melhorá-los é mais fácil, e seu comportamento é mais previsível.

Implementando a ação Substituir Agente de IA<a href="#implementing-the-replace-bot-feature" id="implementing-the-replace-bot-feature"></a>Para implementar esse recurso, você primeiro precisa criar diferentes agentes para diferentes propósitos. Quando você deseja chamar outro agente, você precisa arrastar a ação "Substituir Agente de IA", que está localizada sob recursos Flow no lado esquerdo.

<figure><img src="/doc-images/h6sbsd2qBLQklOgC8SU0.png" alt=""><figcaption></figcaption></figure>Ao clicar na ação "Substituir Agente de IA", um menu aparecerá do lado direito, permitindo que você escolha o agente correto para assumir a conversa no mesmo widget de chat.

<figure><img src="/doc-images/jNHDW7WnY93QouiNnzRQ.png" alt=""><figcaption></figcaption></figure>Para este exemplo, escolhi o agente de vendas de IA. Também podemos definir qual bloco deve ser acionado quando o novo agente de IA é chamado de volta — neste caso, selecionei o bloco Iniciar.

<figure><img src="/doc-images/DjhZ9fS2BzuoStHebVU4.png" alt=""><figcaption></figcaption></figure>Em seguida, você pode usar uma [AI Condition] (/ai-chatbots-and-automation/actions-explicated/ai-condition) para verificar se a consulta do cliente é orientada para vendas ou orientada para suporte, e ativar o agente de IA apropriado.

Alternativamente, você pode simplesmente usar botões, como mostrado na imagem abaixo:

<figure><img src="/doc-images/N2Wl84WLRGmj1pqP6rNT.png" alt=""><figcaption></figcaption></figure>Isso é tudo. Você criou um agente de IA que pode lembrar o agente apropriado quando necessário, se o inquérito é orientado para o suporte ou vendas, com base no nosso exemplo. Você pode criar quantos agentes precisar para fins diferentes — não há limite.

Substituir o agente de IA usando a bala bot<a href="#replace-bot-using-the-chatbot-slug" id="replace-bot-using-the-chatbot-slug"></a>O uso da lesma garante que um agente de IA se refere a outro agente de forma invariante. Isso permite que você exporte o mesmo grupo de agentes de um projeto para outro, mantendo sua orquestração funcionando sem problemas. Se você não usar o slug, o chatbot ID é usado para referenciar outro chatbot — mas lembre-se que um chatbot ID é globalmente único em ChatCase. A lesma, em vez disso, só é necessária para ser única dentro de um único projeto. Assim, se você escolher cuidadosamente suas lesmas de agente de IA, você pode coordenar seus agentes para trabalhar corretamente em qualquer projeto onde você as importe.

Definir o slug na seção Configurações:

<figure><img src="/doc-images/A52DZqH4llfeA1XfmGIE.png" alt=""><figcaption></figcaption></figure>Em seguida, marque a propriedade “Use slug” da ação quando você decidir se referir a esse agente para a substituição:

<figure><img src="/doc-images/Q86BdJR6FSJEpCNCv3u6.png" alt=""><figcaption></figcaption></figure>Em nossa Comunidade, você pode encontrar [um modelo de agente de IA usando o recurso slug](https://chatcase.com/community/search/getchatbotinfo/chatbotId/6797c042eafa7e0013d42997-Chatbot-using-slug-property)

Esperamos que você ache este tutorial útil.

Se você precisa saber mais sobre o design do chatbot, visite nosso site em [**www.chatcase.com.** ](https://www.chatcase.com/)

Se necessitar de assistência adicional, não hesite em entrar em contato-nos[redacted@example.invalid](mailto:redacted@example.invalid)&#x20;
