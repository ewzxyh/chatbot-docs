---
title: "Qapla’"
description: "Com a integração do Qapla, você pode simplificar seu suporte ao cliente de ecommerce automatizando respostas a perguntas comuns de rastreamento, como “Onde está meu pacote?” e “Qua"
---

Com a integração do Qapla, você pode simplificar seu suporte ao cliente de ecommerce automatizando respostas a perguntas comuns de rastreamento, como “Onde está meu pacote?” e “Quando meu pacote vai chegar?”.

Esta integração permite que seu agente de IA forneça instantaneamente e com precisão o status do pacote do seu cliente usando apenas o número de rastreamento.

Vamos ver como integrar seu agente de IA de ChatCase com Qapla’. A boa notícia é que esta integração nativa pode ser ativada com apenas alguns cliques.

**1- Iniciar no painel da telha:**&#x20;

Em primeiro lugar, dirija-se ao painel [ChatCase] (https://panel.chatcase.com/v3/dashboard/#/signup) e criar um bloco para pedir o número de rastreamento.

<figure><img src="/doc-images/XShgiIvWqV3Jl2Pit7S1.png" alt=""><figcaption></figcaption></figure>**2- Atribua o código de rastreamento a um novo atributo**:&#x20;

Em seguida, atribua o código de rastreamento a um novo atributo, que chamaremos de “TrackingNumber”. Para fazer isso, selecione a ação "Capture User Reply" e defina um novo atributo para ele.

<figure><img src="/doc-images/gx5qFmfwF0yVgFyHgG4i.png" alt=""><figcaption></figcaption></figure>**3- Selecione Qapla’ entre as integrações**:&#x20;

O próximo passo é selecionar Qapla’ na lista de integrações.

<figure><img src="/doc-images/Jr58LEotDyvHMXVYU00Z.png" alt=""><figcaption></figcaption></figure>**4- Configurar a integração de Qapla**:&#x20;

Esta integração requer dois parâmetros. O primeiro é o número de rastreamento do pacote do usuário, que já pedimos. A segunda é a chave de API do Qapla, que você pode adicionar usando a opção "Manage Integration", como mostrado na imagem abaixo.

<figure><img src="/doc-images/7zou8O8kDPDByKhP6KNH.png" alt=""><figcaption></figcaption></figure>Depois de inserir a chave API, basta clicar em Salvar. &#x20;

<figure><img src="/doc-images/wLFp4LGfJITjTiliMivY.png" alt=""><figcaption></figcaption></figure>Se você precisar de ajuda para obter o código de API do Qapla, [este artigo](https://api.qapla.dev/1.2/en/) pode ajudá-lo.

**5- Use uma condição em nosso fluxo**:&#x20;

Agora, é hora de usar uma condição em nosso fluxo para verificar se o código de rastreamento fornecido existe no banco de dados Qapla. Para fazer isso, vamos arrastar a ação chamada “Condição w/else”.

Clique em "Adicionar nova condição" e selecione o atributo predefinido chamado . Em seguida, clique em “=igual como Texto” entre as condições e digite “OK” no valor. Esta condição determina se o TrackingNumber existe ou não no banco de dados Qapla, com “OK” significando que o código existe.

<figure><img src="/doc-images/Wy8eO25Z2ldEDgIDYdSm.png" alt=""><figcaption></figcaption></figure>**6- Configurar caminhos de sucesso e falha**:&#x20;

A partir do endpoint verde (que significa sucesso), continue o fluxo para um novo bloco de resposta onde compartilharemos o status do pacote com outro atributo predefinido chamado.

<figure><img src="/doc-images/lVOy8g14NrmLLgW8wImJ.png" alt=""><figcaption></figcaption></figure>Pode haver casos em que o “RastreamentoNúmero” não pode ser encontrado no banco de dados do Qapla, devido a um erro de digitação ou outras razões. Para este cenário, continuamos a conversação a partir do ponto final vermelho do bloco de condição e pedimos ao usuário para entrar em contato com a equipe de suporte, ou re-entrar no número de rastreamento.

Obrigado por ler! Espero que ache este tutorial útil.

Para iniciar sua jornada, dirija-se ao seu [painel ChatCase] (https://panel.chatcase.com/v3/dashboard/#/signup).&#x20;

Se precisar de apoio para esta integração, não hesite em entrar em contato-nos em[redacted@example.invalid](mailto:redacted@example.invalid).
