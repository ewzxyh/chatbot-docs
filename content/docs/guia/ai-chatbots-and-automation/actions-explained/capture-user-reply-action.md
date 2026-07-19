---
title: "Capturar ação de resposta do usuário"
description: "Para interagir com um chatbot é crucial ter alguma ferramenta para obter a entrada do usuário e processá-lo de alguma forma. A ação Capture User Reply (CUR) foi projetada exatament"
---

Para interagir com um chatbot é crucial ter alguma ferramenta para obter a entrada do usuário e processá-lo de alguma forma. A ação Capture User Reply (CUR) foi projetada exatamente para esse fim.

Você pode usar a ação Capture User Reply em seus blocos existentes, em cadeia com suas ações já existentes.

Para entender como o CUR funciona vamos criar um novo projeto e personalizar sua ação de resposta com um texto para perguntar o nome do usuário:

<figure><img src="/files/aoPpBGCAvd4LvEH88HZb" alt=""><figcaption></figcaption></figure>O que queremos agora é bloquear o fluxo até que o usuário responda com seu próprio nome, e então atribuir o nome capturado a um atributo de fluxo.

Arraste a ação “Capture User Reply” para o bloco “welcome”, logo abaixo da ação acima configurada Responder, como nas seguintes duas imagens:

<figure><img src="/files/2TdGYS5bEwy1uixQHs43" alt=""><figcaption></figcaption></figure>Agora clique na ação Capture User Reply para abrir o editor de ação correspondente. Queremos criar um novo atributo de fluxo que vamos preencher com o nome que o usuário irá fornecer durante o chat. Pressione o botão {} sob o campo “Atribuir resposta ao usuário”. Nos atributos pop-up pressione “Adicionar atributo personalizado”.

<figure><img src="/files/Q0lO3ztfUHNqDsQKaJnd" alt=""><figcaption></figcaption></figure>Escolha o nome do atributo "user\ name". Clique no atributo adicionado para que ele seja selecionado no editor de ação. O nome que o usuário fornecerá será atribuído ao atributo user\ name.

<figure><img src="/files/b6Xfnzq0jOJpZjOwnyIH" alt=""><figcaption></figcaption></figure>Queremos usar o atributo para cumprimentar o usuário logo após ele nos dizer seu nome. Vá no canto inferior direito do bloco perto do Capture User Reply e crie “on the fly” uma nova ação Responder. Assim que o usuário responder, o fluxo de automação passará para o fim do bloco (porque não há outras ações a serem executadas). A etiqueta no canto inferior direito irá ligar o bloco a outro bloco para continuar opcionalmente o fluxo. Neste caso, este é exatamente wath que queremos: após capturar o nome do usuário, o fluxo continuará para o próximo bloco conectado e suas ações serão executadas. Arraste a etiqueta com o conector no palco, um menu aparecerá onde você pode manter a ação Responder. Um bloco fechado será criado na mosca.

<figure><img src="/files/LiaImPlTjVgcd4oJoke9" alt=""><figcaption></figcaption></figure>Temos nossa nova ação Responder dentro de um novo bloco.

<figure><img src="/files/jRzDZlbXBnl1To0taPhI" alt=""><figcaption></figcaption></figure>Clique no detalhe Responder e modifique o texto que enviaremos de volta ao usuário. Clique no botão {} e selecione "usuário\ nome" do pop-up

<figure><img src="/files/jvdUrx6os3jtw7ZDXqRT" alt=""><figcaption></figcaption></figure>Montamos o “Oi ”. O placeholder do usuário\ name será substituído em tempo de execução pelo nome fornecido.

<figure><img src="/files/7uTkiSb0GFbSj5UHvBVo" alt=""><figcaption></figcaption></figure>Uma vez que a conversação começa, pedimos ao usuário o seu nome. O nome do usuário é obtido a partir da entrada do usuário e atribuído ao atributo fluxo *user\ name*, então usado na ação de resposta seguinte para cumprimentar corretamente o usuário com seu nome.

<figure><img src="/files/hyOfQ9xCX494AMfxbvGo" alt=""><figcaption></figcaption></figure>Você pode encontrar o exemplo neste tutorial na [Comunidade Chatbot ChatCase](https://chatcase.com/community/):

[Resposta de usuário de captura básica] (https://chatcase.com/community/search/getchatbotinfo/chatbotId/65a5796c4a04b20013a46e9e-Basic-Capture-User-Reply) &# x20;

### # Capture a cadeia de resposta do usuário[#](https://gethelp.chatcase.com/articles/capture-user-reply-action/#capture-user-reply-chain) <a href="#capture-user-reply-chain" id="capture-user-reply-chain"></a>Às vezes você quer fazer ao usuário várias perguntas antes que ele possa continuar a conversa.

Por exemplo, não é incomum perguntar ao usuário seu e-mail além do nome. Neste caso, você pode “correr” respostas e CURs juntos para obter um simples “formulário”. Vamos ver isto em ação.

Podemos usar o exemplo anterior, pedindo o nome do usuário. Temos de acrescentar uma nova resposta no bloco, após o último CUR. Agirá pedindo ao usuário seu e-mail. Considere que uma sequência de ação de bloco é bloqueada assim que você atinge uma ação de bloqueio. Este é o caso do nosso Capture User Reply, que bloqueia o fluxo esperando que o usuário responda. Assim que ele responder o fluxo irá passar para a próxima ação, neste caso é a próxima resposta que irá enviar “Seu e-mail?” texto para o usuário. Como no exemplo a seguir:

<figure><img src="/files/8g1nSpeNXyIvBecsAUJ4" alt=""><figcaption></figcaption></figure>Mas queremos receber o email de alguma forma, então precisamos adicionar um novo Capture User Reply ao lado da última ação de resposta, como na seguinte imagem:

<figure><img src="/files/zLlmm1AIs6ioVYauY4cZ" alt=""><figcaption></figcaption></figure>Nós adicionamos um novo CUR, bem como um novo atributo: user\ email. Adicionamos o novo atributo exatamente como fizemos com o atributo user\ name anterior.

Agora podemos adicionar um novo bloco Responder para certificar ao usuário que temos todos os dados necessários:

<figure><img src="/files/XEvSvpvfXFLsH1OfM3QV" alt=""><figcaption></figcaption></figure>Vamos executar este fluxo para vê-lo em ação.

<figure><img src="/files/5N69muu1pCuWjYrOHIQw" alt=""><figcaption></figcaption></figure>Como você pode ver todos os atributos são solicitados em sequência, exatamente como esperávamos!

Você pode encontrar o chatbot neste tutorial na comunidade: [Capture Reply Chain](https://chatcase.com/community/search/getchatbotinfo/chatbotId/65a583deba5618001233c885-Capture-Reply-chain)&#x20;

**Feliz Capture User Reply with ChatCase!**

Se você tiver dúvidas sobre o Web Request ou outros recursos ChatCase sinta-se livre para enviar um e-mail para[redacted@example.invalid](mailto:redacted@example.invalid)
