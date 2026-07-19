---
title: "Adicionar etiqueta"
description: "Adicionar etiqueta"
---

Adicionar etiqueta

O “Adicionar Tag Action” foi projetado para permitir fluxos usando o recurso “Add tag” já disponível para os operadores humanos.

A marcação é muito útil quando você deseja classificar suas conversas durante o fluxo, estática ou dinamcalmente, por exemplo, auxiliado por uma tarefa de chatGPT ou LLM com um prompt projetado exatamente para esse fim.

Vamos começar com um exemplo sobre a classificação “estática”, aplicando um *tag* para todas as conversas movidas para um agente humano. Basta inserir um botão para pedir para um operador humano e, em seguida, aplicar a tag antes de executar o *Transfer para uma ação humana*:

<figure><img src="/files/4XTe8BKhHdVRqUEZ8N8B" alt=""><figcaption></figcaption></figure>Você pode aplicar muitas tags ao mesmo tempo com uma única ação Adicionar Tag, simplesmente separá-las por uma vírgula como no exemplo anterior, onde aplicamos duas tags: **humana** e **importante**:

<figure><img src="/files/CKz2769p60eNBnS4BjnS" alt=""><figcaption></figcaption></figure>Você também pode adicionar tags usando atributos. Um único atributo também pode conter mais de uma tag separada por vírgulas para que você possa adicionar várias tags usando um único atributo. No exemplo abaixo pediremos ao chatGPT para aplicar um conjunto de tags escolhidas entre um conjunto de tags disponíveis:

<figure><img src="/files/3oum6zqE5hM64gEs9Ifw" alt=""><figcaption></figcaption></figure>No prompt pedimos explicitamente para separar várias tags com vírgulas:

```
reply me with a list of comma separated tags selected among the following that you use to classify the user question.
Tags:
- sales
- support
- positive_sentiment
- negative_sentiment
User question:
I need some help for returning the product, very unhappy because it arrived me broken
`$([Environment]::NewLine)
Aplicaremos a(s) tag(s) usando o atributo de saída ChatGPT Task *AI\ tags*:

<figure><img src="/files/kxMA8QXDboNeB4M2u3DM" alt=""><figcaption></figcaption></figure>Toda vez que invocarmos esta ação, ela aplicará as tags extraídas do texto enviado pelo usuário.

Você pode usar o formulário avançado da seção Histórico do Painel para pesquisar usando as tags aplicadas:

<figure><img src="/files/5VlMKfiyYbJ2HMZp7SHL" alt=""><figcaption></figcaption></figure>Você pode visualizar a análise de tags na Metrics > Secção de etiquetas

<figure><img src="/files/0Zsjl2Nhmd9wVH31t0Mb" alt=""><figcaption></figcaption></figure>Você tem algum feedback sobre este artigo? Por favor, envie-nos em[redacted@example.invalid](mailto:redacted@example.invalid)Aproveitem o ChatCase!
