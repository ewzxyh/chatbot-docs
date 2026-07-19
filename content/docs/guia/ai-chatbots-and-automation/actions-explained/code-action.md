---
title: "Ação de código"
description: "A Ação de Código fornece um ótimo método para maximizar sua flexibilidade de fluxos usando linguagem Javascript."
---

A Ação de Código fornece um ótimo método para maximizar sua flexibilidade de fluxos usando linguagem Javascript.

A linguagem que você pode usar é Javascript. Planejamos adicionar mais idiomas no futuro, começando com suporte Python.

Você usará principalmente o Code Action para desenvolver a automação “low code” quando você precisar de recursos avançados apenas fornecidos por uma abordagem programática. Tenha em mente que **não são permitidas funcionalidades async**. Você só pode usar codificação síncrona. Se você precisar obter alguns dados de um serviço web remoto, você pode fazê-lo antes de uma ação Pedido Web para a Ação de Código.

Use **context.attributes.KEY** ou **context.attributes\[KEY]** para ler o valor de um atributo de fluxo

Ex.

```
let age = context.attributes.age;
`$([Environment]::NewLine)
Use **context.setAttribute(KEY, VALUE)** para definir o valor de um atributo

Ex.

```
context.setAttribute('age', 35);
`$([Environment]::NewLine)
No exemplo a seguir publicado na Comunidade ChatCase você pode testar como funciona a Ação do Código.

[Exemplo de ação do Código Comunitário](https://chatcase.com/community/search/getchatbotinfo/chatbotId/65d12ff648cc2800132cd27e-Code-Action-basic-example)

<figure><img src="/files/Zsb3kHc4KvYMWrN8fh7I" alt=""><figcaption></figcaption></figure>Neste exemplo executamos algumas tarefas:

1. Modifique o atributo “idade” existente configurado usando a ação Definir atributo (idade = 2)
2. Adicione um atributo totalmente novo (jsondata) ao fluxo

Você pode ver o resultado impresso na resposta:

<figure><img src="/files/OHc1fSXqkMrdPVq07a8j" alt=""><figcaption></figcaption></figure>**Use case: Teste A/B com Ação de Código

Dê uma olhada neste Chatbot comunitário para criar um chatbot teste A/B usando o Code Action.

<https://chatcase.com/community/search/getchatbotinfo/chatbotId/6622718217940b00137de783-Chatbot-A-B-test-with-Code-Action>Se você tiver dúvidas sobre o Code Action ou outros recursos do ChatCase sinta-se livre para enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos [feedback](https://feedback.chatcase.com/feedback).
