---
title: "Ação de Pedido Web"
description: "A ação Web Request é um componente fundamental para se conectar com suas próprias APIs e aplicativos de terceiros."
---

A ação Web Request é um componente fundamental para se conectar com suas próprias APIs e aplicativos de terceiros.

A ação Web Request suporta muitos métodos HTTP e permite que você invoque APIs REST, enviando e recebendo dados em formatos de texto e JSON. Você pode usar os atributos do fluxo como dados, colocá-los na carga útil do JSON ou em cabeçalhos. Você também pode atribuir dados vindos de suas solicitações de API de volta aos seus atributos, em formatos de texto e JSON.

Vamos ver a anatomia da Web Request.

<figure><img src="/files/9y0Oozjyvf6ZqnvTIeaU" alt=""><figcaption></figcaption></figure>O Pedido Web, quando invocado, executa automaticamente o pedido HTTP usando as configurações que você vê na imagem acima. O resultado é automaticamente atribuído ao atributo “resultado”. Você pode opcionalmente remover todos os atributos de resposta padrão - *result*, *status* e *error* - e renomeá-los como preferir.

Configuração do URL da Solicitação<a href="#setup-the-requests-url" id="setup-the-requests-url"></a>A seção superior do Web Request é o lugar onde você configura seu método HTTP + endereço de endpoint URL de sua invocação API. Você pode selecionar seu método HTTP preferido escolhendo um no menu suspenso de métodos.

Você também pode configurar seu URL. Este pode ser um texto totalmente estático ou incluir algumas partes dinâmicas. Cuide de url-escapar seus atributos para ser adequado para uma composição de URL. Você deve usar os parâmetros url para mantê-los consistentes com a especificação de solicitação de URL HTTP, como no exemplo a seguir:

<figure><img src="/files/DCSzBHUhkr4PJkfeTK5P" alt=""><figcaption></figcaption></figure>Configuração do Pedido<a href="#setup-the-request" id="setup-the-request"></a>A outra parte importante do Web Request é a seção **Body. Aqui você configura seu JSON para enviar para o seu endpoint API. Se você definir a carga útil JSON tome cuidado para verificar que o cabeçalho correspondente "tipo de conteúdo" será automaticamente definido como "aplicação/json".

Trabalhando com o seu corpo JSON

Você pode configurar seu corpo JSON na aba “Corpo” da sua Ação de Pedido da Web, como na seguinte figura:

<figure><img src="/files/M0UQEr1y7bYkmi4NarvV" alt=""><figcaption></figcaption></figure>Raramente o corpo JSON para o seu endpoint API é um documento estático simples com dados fixos. Você muitas vezes quer que esta estrutura seja dinâmica usando os atributos que você coletou durante seu fluxo (i.e. atributos provenientes de interações do usuário como Set Attribute ou [Capture User reply](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action) ou de outras chamadas da API usando a ação Web Request em si).

Em seu JSON você pode definir atributos de vários tipos:

1. String ou atributos numéricos
2. Atributos de formato JSON
3. Subpropriedades dos atributos JSON

Como você pode ver na imagem abaixo, sinta-se livre para usar seus atributos de fluxo em sua carga útil JSON, mas sempre use a sintaxe (nós usamos [LiquidJS](https://liquidjs.com/filters/json.html) para renderização de atributos) , para renderizar corretamente o atributo no documento JSON baseado em seu tipo nativo. Com esta sintaxe, o motor de renderização irá tratar o atributo da forma correta, adicionando aspas para strings e removendo-as para JSON ou Numbers, como no exemplo a seguir:

<figure><img src="/files/FV2lvnFjA7mO9ntblSou" alt=""><figcaption></figcaption></figure>> Tome nota que é desnecessário embrulhar Atributos fo tipo "string" nas cotações, uma vez que o filtro LiquidJS *json* que usamos antes irá adicioná-los para você, se necessário. Este filtro também **escape aspas conforme necessário** dentro dessas saídas.

Você também pode usar sub-propriedades de seus atributos json. Como no caso a seguir, usamos *user.name* e *user.city* do atributo "user" JSON.

<figure><img src="/files/G7yNEqwSRSZJrqIkhS8m" alt=""><figcaption></figcaption></figure>Trabalhando com arquivos

Você pode enviar arquivos para seus endpoints de API. Basta mover para a aba *form-data*. Use a seção multi-campo para carregar seus arquivos. Você pode enviar texto ou um arquivo gor de um URL acessível publicamente.

<figure><img src="/files/upuLFA5HTXTnfEUZqTMd" alt=""><figcaption></figcaption></figure># # # ** Obter o resultado do pedido da Web #

Você pode recuperar seus dados da invocação de serviços remotos no formato *text* ou *JSON*. Estes dois são realmente os únicos formatos suportados disponíveis.

O tipo de dados é automaticamente decodificado pelo tipo de conteúdo de resposta.

No caso do JSON, você pode obter sub campos da sua estrutura do JSON usando a notação ".", como destacado em [Atributos](/docs/guia/ai-chatbots-and-automation/visual-builder-101/flows-attributes).&#x20;

Por razões práticas, preparamos um tutorial em nossa comunidade, que você pode importar com um simples clique.

Tutoriais<a href="#tutorials" id="tutorials"></a>Você pode encontrar algum tutorial interessante (que você pode importar com apenas um clique) em nossa comunidade. Existem muitos tutoriais usando o Web Request, mas os dois seguintes são projetados para um fácil início rápido.

Tutorial de Pedido de Web para método POST (em nossa comunidade): [Conectar ao Hubspot usando um Pedido de Web](https://chatcase.com/community/getchatbotinfo/chatbotId/659854dc1164bb0013a0bd4e-Collect-Data-and-send-to-HubSpot-through-a-Web-Request-Action).

Tutorial de solicitação da Web para o método GET (em nossa comunidade): [Weather.com chamada API para obter informações sobre as condições da cidade](https://chatcase.com/community/search/getchatbotinfo/chatbotId/65a0298effd9e300139ec847-Weather-com-API-call-to-get-city-conditions-info--Demo-for-Web-Request-Action-GET).

Se você tiver dúvidas sobre o Web Request ou outros recursos ChatCase sinta-se livre para enviar um e-mail para[redacted@example.invalid](mailto:redacted@example.invalid)
