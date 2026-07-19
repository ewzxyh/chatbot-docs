---
title: "Evite loops mortos"
description: "Às vezes você pode ver a mensagem MAX\\ ACTIONS excedida em seu fluxo de trabalho de IA:"
---

Às vezes você pode ver a mensagem **MAX\ ACTIONS excedida** em seu fluxo de trabalho de IA:

<figure><img src="/doc-images/pIiMP7ktJrAdBq2Y9km7.png" alt=""><figcaption></figcaption></figure>Este erro ocorre quando um loop infinito (sem interação do usuário) é criado acidentalmente entre [Blocks](/docs/guia/ai-chatbots-and-automation/visual-builder-101/how-to-create-a-block):

<figure><img src="/doc-images/QbqvJrnFjuzH7k9buKbN.png" alt=""><figcaption></figcaption></figure>O sistema limita o número de Ações que podem ser executadas sem interação do usuário. Cada vez que o usuário interage, o contador MAX\ ACTIONS é reiniciado.

Em alguns casos, um loop no fundo é útil — por exemplo, quando se pesquisa uma API remota até que os dados necessários estejam disponíveis. Se você espera que o loop execute muitas vezes, você pode evitar que o erro **MAX\ ACTIONs excedida** adicionando um ** Wait Action** com pelo menos 1 segundo de atraso dentro do loop:

<figure><img src="/doc-images/kJVUzuv9k520FSevl346.png" alt=""><figcaption></figcaption></figure>Tenha em mente que qualquer fluxo sem interação do usuário — incluindo loops — pode ser executado por um máximo de 4 horas. Após este tempo, o Flow parará automaticamente em qualquer passo que tenha alcançado.

Se você tiver dúvidas sobre recursos do ChatCase sinta-se livre para enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos um [feedback](https://feedback.chatcase.com/feedback)
