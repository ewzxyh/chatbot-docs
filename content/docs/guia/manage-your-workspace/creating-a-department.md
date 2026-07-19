---
title: "Criar um departamento"
description: "Criando um departamento"
---

Criando um departamento

Departamento: Definição

Os departamentos permitem-lhe encaminhar eficazmente os pedidos de visitantes para grupos designados. Isto garante que as mensagens dos seus visitantes sejam sempre dirigidas aos agentes certos.

Quais são os benefícios?

Uma das principais métricas de suporte ao cliente eficiente é a Resolução de Primeiro Contato (FCR). É a percentagem de inquéritos de apoio que os agentes resolvem na primeira tentativa. Isto só pode ser conseguido com os departamentos. Você pode criar um departamento para vendas e outro para suporte. Isso garante que sua equipe de vendas não receberá perguntas de suporte e vice-versa. Ele vai aumentar a produtividade do agente, e seus clientes podem receber resoluções mais rápido.

**Os departamentos ajudam o seu negócio a: **

** salvar o tempo dos operadores:** Responda mais rapidamente aos seus clientes focando-se apenas nos chats relevantes. Acabaram-se os chats.

** Apenas Conversas relevantes: Experimente menos interrupções durante o seu trabalho. Deixe seus visitantes encontrar o operador certo e desfrutar de menos notificações e chats.

** Mantenha sua caixa de entrada organizada:** Veja apenas as conversas no âmbito da sua experiência. Deixe que outros departamentos cuidem do resto. &#x20;

Como criar um Departamento

1. Vá para [** Painel de ChatCase**](https://panel.chatcase.com/v3/dashboard/#/signup) e selecione **Configurações > Rotes & Depts**.
2. Clique em ** Adicionar Departamento**.
3. Insira os detalhes relevantes, como mostrado na imagem abaixo.
4. Clique na opção **Todos os companheiros de equipe** ou selecione um [**Grupo**](/docs/guia/manage-your-workspace/creating-groups) para adicioná-los ao departamento.
5. Clique em **Criar Departamento**.

<figure><img src="/doc-images/6fW1gxQrwS3PJ4ZKZcBf.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/doc-images/ZDwU1cuAWDAKQ47qBN3e.png" alt=""><figcaption></figcaption></figure>Como incorporar departamentos no fluxo de conversação

Para recordar os departamentos no fluxo de conversa, dirija-se ao [Design Studio](https://panel.chatcase.com/v3/dashboard/#/signup).&#x20;

Como mostrado na imagem abaixo, eu uso “[ChatGPT task](/docs/guia/ai-chatbots-and-automation/actions-explained/chatgpt-task)” para entender as perguntas do usuário e categorizá-las.

No prompt, peço ao ChatGPT para categorizar as perguntas recebidas em “**sales**” ou “**support**”.

<figure><img src="/doc-images/WNeLVLctoiC1cwDRNpKk.png" alt=""><figcaption></figcaption></figure>Então, precisamos usar outra ação chamada “Condição w/else”.&#x20;

<figure><img src="/doc-images/ZlNnjerlqWzd50kp9vFX.png" alt=""><figcaption></figcaption></figure>Carregue nele e, a partir da configuração de contexto correcta, carregue em "Adicionar nova condição".

<figure><img src="/doc-images/eTb9QkFUzbsRZZzlmeuz.png" alt=""><figcaption></figcaption></figure>Entre os Atributos, selecione “gpt\ reply”.

Escolha "Iniciar com Ignorar Caso" entre as Condições, e colocar "vendas" como o valor.

<figure><img src="/doc-images/jcajcKLwsD3pGEHe0bdL.png" alt=""><figcaption></figcaption></figure>Agora, precisamos conectar a ação “Mudar Departamento” ao ponto final verde do bloco Condição, como você pode ver na imagem abaixo.

<figure><img src="/doc-images/XTGPU35MQr9SWf3hGEO1.png" alt=""><figcaption></figcaption></figure>Clique no novo bloco e escolha o departamento relevante.

<figure><img src="/doc-images/F0pxfRTyCSKSxLqLtyY6.png" alt=""><figcaption></figcaption></figure>Isso é tudo. Todas as perguntas sobre vendas serão transferidas para o departamento de vendas.

Para perguntas orientadas ao suporte, você precisa seguir exatamente o mesmo processo e selecionar o departamento de suporte. &#x20;

<figure><img src="/doc-images/YTlEjGpfQJAwsa9GScWx.png" alt=""><figcaption></figcaption></figure>Espero que isto ajude. Caso precise de mais suporte, não hesite em entrar em contato-nos em [**redacted@example.invalid**](mailto:redacted@example.invalid).

Para mais informações, visite: [**www.ChatCase.com**](https://chatcase.com/)\
&#x20;
