---
title: "Como recuperar dados de Make.com para ChatCase"
description: "Se você está familiarizado com Make, você sabe como esta plataforma permite que você crie várias automaçãos. A boa notícia é que você pode facilmente conectar seu agente de IA para"
---

Se você está familiarizado com Make, você sabe como esta plataforma permite que você crie várias automaçãos. A boa notícia é que você pode facilmente conectar seu agente de IA para fazer e enviar e receber dados dele.

No tutorial de hoje, passaremos pelo processo de recebimento de dados de Make para o nosso Agente de IA em ChatCase.

Para isso, precisamos criar uma conta gratuita no Make e conectá-la ao nosso projeto ChatCase.

Vamos mergulhar!

Fazer a Configuração<a href="#make-configuration" id="make-configuration"></a>1. Cabeça para o [Fazer painel] (https://www.make.com/en/login) e vá para a seção ** Cenário** para criar nosso fluxo. Para esta automação, precisamos de dois módulos: **Custom Webhook** e **Webhook Response**.
2. Como você pode ver na imagem abaixo, eu adicionei o primeiro módulo e copiei o endereço webhook, que usaremos mais tarde no estúdio de design ChatCase.

<figure><img src="/files/71JQBBvjXlSDO5Kx2RWl" alt=""><figcaption></figcaption></figure>1. Em seguida, adicione o outro módulo - **Webhook Response**. Na seção Corpo, eu inseri uma mensagem curta, mas poderia ser em um formato diferente como um pedaço de código ou qualquer outra coisa.

<figure><img src="/files/38iAxo4oLL405MmXXMEs" alt=""><figcaption></figcaption></figure>1. Salve o cenário e ative-o.

Isso é tudo para fazer. Agora temos de voltar para o painel do ChatCase.

Configuração da telha<a href="#chatcase-configuration" id="chatcase-configuration"></a>1. Cabeça para o painel [ChatCase] (https://panel.chatcase.com/v3/dashboard/#/projects) e depois da seção **Flow**, escolha o correto Agente de IA e entre no **Design Studio**.
2. Para este exemplo, usei um botão e conectei-o a [**Web Request**](/docs/guia/ai-chatbots-and-automation/actions-explained/web-request-action), que você pode encontrar entre as ações de integração.
3. Clique no bloco Web Request e cole o URL webhook que copiamos do painel Make.

<figure><img src="/files/x1QWyUincSX7n0qCgR2Q" alt=""><figcaption></figcaption></figure>1. Na seção Atribuída, você pode ver três atributos: **Result**, **Status** e **Erro**.
2. Vou criar dois caminhos, um para **Results** e outro para **Erro**, como você vê na imagem abaixo.

<figure><img src="/files/RohIr4e5YlX05vUyQHRJ" alt=""><figcaption></figcaption></figure>Agora é hora de verificar nossa integração. Como você pode ver na imagem abaixo, os dados do Make foram transferidos com sucesso para o ChatCase.

<figure><img src="/files/NA4C8lFMmtbnyidmPqpU" alt=""><figcaption></figcaption></figure>Esta integração pode ajudá-lo a recuperar informações de diferentes fontes para o seu Agente de IA do ChatCase. Esta informação pode ser o nome do usuário, código de rastreamento, ID do produto ou qualquer outra coisa.

Espero que o aches útil! &#x20;

Caso precise de apoio na implementação desta integração, entre em contato conosco via[redacted@example.invalid](mailto:redacted@example.invalid).

Para ler mais sobre os recursos do ChatCase, você pode visitar nosso site: [www.chatcase.com](https://chatcase.com/).

Para começar gratuitamente com o ChatCase, [clique aqui](https://panel.chatcase.com/v3/dashboard/#/signup).
