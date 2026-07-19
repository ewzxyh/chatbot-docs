---
title: "n8n.io"
description: "Com esta ação, você é capaz de invocar n8n.io automações diretamente de ChatCase. Esta ação integra ChatCase com n8n para criar automaticamente uma nova linha do Google Sheet com i"
---

Com esta ação, você é capaz de invocar n8n.io automações diretamente de ChatCase. Esta ação integra ChatCase com n8n para criar automaticamente uma nova linha do Google Sheet com informações de contato do estudante de cursos de formação.

Basta arrastar e soltar a ação n8n.io no palco do menu lateral, como mostra na imagem abaixo:

<figure><img src="/doc-images/n4Zo6jZgYhvQW5II5Rji.png" alt=""><figcaption></figcaption></figure>Depois de arrastar a ação, você pode configurá-la. A parte principal é configurar o n8n.io webhook e preencher todos os campos para enviar para o endpoint n8n webhook usando os atributos de fluxo certos:

<figure><img src="/doc-images/OjIKDZSXHfw4xn0jUzgc.png" alt=""><figcaption></figcaption></figure>No exemplo a seguir, configuramos três campos: o nome e sobrenome, a classe e o endereço de e-mail de um aluno que frequenta um curso específico a ser transmitido para n8n com os valores "custom\ name", "custom\ class" e "custom\ email", respectivamente. A automação criada na plataforma n8n utilizará esses valores de entrada para criar uma nova linha contendo as informações do aluno em uma planilha do Google Sheets previamente configurada.

Na ação n8n, selecione a operação POST do dropdown de operações HTTP. Em seguida, no campo Url, digite o URL da automação criada na plataforma n8n.

<figure><img src="/doc-images/HPkR1b5ojxfVve4ay34D.png" alt=""><figcaption></figcaption></figure>* No campo Header, digite os cabeçalhos HTTP para a requisição. Os valores específicos dependerá do webhook que você está chamando.
* No campo de autorização, digite o tipo de autorização e credenciais para o webhook. Os valores específicos serão gerados em n8n quando você criar o webhook.

<figure><img src="/doc-images/hYgoklGFtvmzGEJnp1GR.png" alt=""><figcaption></figcaption></figure>Em seguida, selecione a guia "corpo" e digite os valores (no formato json) que o bot precisa enviar para a automação criada no n8n para inserir uma nova linha na Folha do Google.

<figure><img src="/doc-images/BIMASqz7dT475Np4zbgN.png" alt=""><figcaption></figcaption></figure>Você pode conectar vários blocos para ampliar as ações da automação criadas no n8n. Especificamente, dois blocos podem ser ligados com o bloco n8n, que irá desencadear o sucesso ou falha da invocação webhook na plataforma n8n. No exemplo representado na imagem abaixo, nós apenas conectamos dois blocos ao bloco n8n: "n8n ok" e "n8n fail", que lidam com as informações enviadas e recebidas do n8n webhook, respectivamente.

<figure><img src="/doc-images/BFvT4jvVPogonIbXJXtU.png" alt=""><figcaption></figcaption></figure>A automação criada na plataforma n8n utiliza esses valores de entrada para criar uma nova entrada no documento do Google Sheets previamente configurado, que contém as informações do aluno.

Como recuperar o resultado da automação invocada<a href="#how-to-retrieve-the-result-of-the-invoked-automation" id="how-to-retrieve-the-result-of-the-invoked-automation"></a>Para ver a resposta a partir da automação invocada, você precisa abrir a seção "Avançado" dentro do bloco "n8n" e atribuir uma nova variável ao campo "Atribuir resultado a", nomeando-o, por exemplo, "n8n\ result". Após a conclusão da execução, a variável criada será preenchida com o resultado formatado de JSON da automação.

<figure><img src="/doc-images/QdFf4LV9xBH17m5a8HWI.png" alt=""><figcaption></figcaption></figure>Como pode ser visto a partir das figuras a seguir esta ação permite que o bot ChatCase invoque uma automação criada no n8n que cria uma nova linha em uma Folha do Google com as informações de contato do aluno que participa de um curso de treinamento comunicado pelo usuário ao bot.

<figure><img src="/doc-images/KJGhWfHo85nIGlHjj6fa.png" alt=""><figcaption></figcaption></figure>A automação no n8n cria uma nova linha na Folha do Google e retorna a informação inserida ao ChatCase na variável "n8n\ result" no formato JSON.

<figure><img src="/doc-images/6WcaOAfSNWYVx8KOkcVU.png" alt=""><figcaption></figcaption></figure>Se você tiver dúvidas sobre a Ação n8n.io ou outros recursos do ChatCase sinta-se livre para enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos um [feedback](https://feedback.chatcase.com/feedback).
