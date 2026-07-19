---
title: "Prechat Form JSON especificações"
description: " Introdução(introdução) Forma prechat padrão (forma prechat padrão) Forma de prechat personalizada ( forma de prechat personalizada) Inspecionar dados do usuário preenchidos (inspe"
---

# # Prechat Form JSON specs

![imagem] (https://user-images.githubusercontent.com/32564846/140908272-673f6e7b-2395-4b5f-a850-7ec233b7be7e.png)

# # Índice

* [Introdução](#introdução)
* [Forma prechat padrão] (#forma prechat padrão)
* [Forma de prechat personalizada] (# forma de prechat personalizada)
* [Inspecionar dados do usuário preenchidos] (#inspecionar-in-usuário-dados)
* [Exemplos] (#exemplos)
* [Exemplo 1: pergunte o número de telefone] (#exemplo-1-ask-the-telephone-number)
* [Exemplo 2: aceitando Privacidade e ToS] (#exemplo-2-aceitando-privacy-and-tos)
* [Exemplo 3: pergunte a primeira mensagem](#exemplo-3-ask-the-first-message)
* [Tipos de controle](#Tipos de controle)
* [Texto](#texto)
* [Textarea](#textarea)
* [Checkbox] (#checkbox)
* [Estática] (# estática)
* [Especificação do formato] (#especificação do formato)
* [atributo nome](#name-attribute)
* [Nomes reservados](#nomes reservados)
* [atributo tipo] (#atributo tipo tipo)
* [atributo obrigatório](#atributo obrigatório)
* [atributo de valor](#atributo de valor)
* [atributoregex](#atributoregex)
* [atributo do rótulo](#atributo do rótulo)
* [atributo errorLabel](#atributo errorLabel)
* [atributo linhas](#atributo linhas)

Introdução

![imagem] (https://user-images.githubusercontent.com/32564846/140908024-29213c65-3af3-406b-b521-7a695abc01ec.png)

O *Prechat Form* é usado para coletar alguns dados do usuário final antes de iniciar uma conversa. Geralmente estas informações são solicitadas aos usuários, por causa de usuários autenticados já fornecendo algumas informações "certificadas" em um JWT personalizado. As informações coletadas pelo Formulário Prechat serão usadas pelos Agentes, pela plataforma ChatCase em si ou pelos desenvolvedores através de APIs.

O formulário prechat é perguntado apenas uma vez ao usuário, na primeira conversa. Uma vez preenchidos e enviados, os dados do formulário são salvos no banco de dados de armazenamento local do navegador. Se o usuário quiser preencher o formulário prechat novamente após a primeira submissão ele deve "logout" do widget. Isso também mudará seu ID de usuário anônimo.

Para encerrar e reiniciar o status do widget, pressione o menu de opção (iconômetro de engrenagem) no canto inferior esquerdo da tela inicial do widget e clique em "logout".

Formulário Prechat padrão

Para ativar o formulário prechat, chegou ao Painel ChatCase, então Configurações > Widget > Formulário prechat (seção). Abra esta seção e ative o formulário através do interruptor fornecido:

![imagem] (https://user-images.githubusercontent.com/32564846/140116717-e34fa56b-90ff-4171-a332-b8ac63ee9f78.png)

Se você ativar o formulário Prechat e nenhum formato personalizado for especificado, o formulário padrão é mostrado antes de iniciar qualquer conversa. O formulário padrão pede as informações básicas necessárias para interagir com um usuário convidado: *email* e um *nome completo*.

Para o formulário prechat padrão, *useremail* e *fullname* são campos obrigatórios.

Formulário de Prechat Personalizado

O formulário prechat fornece personalização, então se o e-mail não for suficiente você pode pedir um número de telefone ou você pode fazer o usuário concordar com seus termos e condições antes de prosseguir com uma conversa. Formulários personalizados usam uma sintaxe JSON especial (e fácil) para personalizar os campos de formulário. Você pode especificar os campos que escolhem o tipo de controle certo (ou seja, texto/área de texto, caixa de seleção, texto estático etc.). Você também pode fornecer algumas opções, úteis para validar o campo, mostrar um erro de validação personalizado ou tornar o campo obrigatório ou não. Multilinguagem para etiquetas também é suportada.

Inspecionar dados de usuário preenchidos

Depois de preencher o formulário de prechat personalizado, o operador pode encontrar os dados de usuário preenchidos na seção dedicada do detalhe da conversa. Suponha que o usuário preencha o formulário personalizado de [Exemplo 2](#exemplo-2-aceitando-privacy-and-tos) como na seguinte imagem:

![imagem] (https://user-images.githubusercontent.com/32564846/140916378-cae22b99-3aa0-403a-94fb-c9ab61e94226.png)

O operador pode ver os dados do formulário preenchido olhando para a seção "Prechat form" do detalhe da conversa, como na seguinte imagem:

![imagem] (https://user-images.githubusercontent.com/32564846/140917336-413a6158-13ad-428e-a994-98b919ea4c11.png)

Exemplos

Para entender como a forma prechat funciona, podemos começar com alguns exemplos.

Estes exemplos mostrarão como realizar algumas tarefas comuns com o formulário prechat. Vamos começar a perguntar o número de telefone do usuário. No segundo exemplo, vamos propor ler e aceitar uma Política de Privacidade e, finalmente, no terceiro exemplo, um formulário pedirá ao usuário para preencher a primeira pergunta para prosseguir para uma nova conversa.

Exemplo 1: pergunte o número de telefone

Neste primeiro exemplo, mostraremos como perguntar ao número de telefone do usuário, além de e-mail e nome completo. Para personalizar o formulário prechat, primeiro assine no painel ChatCase usando suas credenciais, em seguida, escolha um projeto (se você tiver mais de um). Mova-se para a seção de widget, desloque-se para a seção de formulário prechat e habilite o formulário prechat usando o interruptor.

![imagem] (https://user-images.githubusercontent.com/32564846/135799563-92771635-3f48-49a3-9aee-901b5ea9db38.png)

Agora ative o editor de formulários personalizado usando o switch, como na figura seguinte:

![imagem] (https://user-images.githubusercontent.com/32564846/135799722-be9f5d06-1370-43cd-9053-e546926a6df3.png)

Você verá a fonte JSON para um exemplo já fornecido.

Substitua o JSON fornecido pelo seguinte código:

```
[
    {
        "name": "userFullname",
        "type": "text",
        "mandatory": true,
        "label": {
            "en": "Your name",
            "it": "Il tuo nome"
        }
    },
    {
        "name": "userEmail",
        "type": "text",
        "mandatory": true,
        "regex": "/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/",
        "label": {
            "en": "Your email",
            "it": "La sua email"
        },
        "errorLabel": {
            "en": "Invalid email address",
            "it": "Indirizzo email non valido"
        }
    },
    {
        "name": "tel",
        "mandatory": true,
        "label": {
            "en": "Your phone number",
            "it": "Il tuo numero di telefono"
        }
    }
]
```Agora salve a fonte colada pressionando o`UPDATE WIDGET`Botão.

Na barra superior, pressione o botão verde para abrir o widget. Agora começa uma conversa.

![imagem] (https://user-images.githubusercontent.com/32564846/135870494-0a129267-f4e0-431d-9275-e6433452f7e4.png)

> **NOTA**: Se você não ver o formulário prechat depois de começar uma conversa, não entre em pânico. Você provavelmente já enviou o formulário de prechat. Abra o menu de opções (ícone de gear) no canto inferior esquerdo da tela inicial do widget e selecione "logout". Na próxima conversa iniciar o formulário aparecerá novamente.

Nós apenas adicionamos um campo de texto de número de telefone ao formulário básico. Como você pode adivinhar, a forma JSON é uma matriz de "controles". Cada controle tem alguns atributos que permitem ajustar o próprio controle. Neste caso, os dois primeiros elementos (controles) do array são um campo de texto "nome" e um campo de texto "email". Só nos concentramos no número de telefone. O número de telefone é *mandatório* (atributos obrigatórios definidos como true) e nós definimos um par de etiquetas multilingue, para mostrar como multi-linguagem é suportada usando as línguas iso códigos (en, it) das línguas desejadas (inglês e italiano neste exemplo, respectivamente).

> **Nomes de campos reservados**: Ao escolher o atributo "nome" de controles, tenha em mente que existem alguns nomes reservados de ChatCase: userEmail, userFullname e firstMessage. Discutimos sobre esses campos [aqui](#name)

Exemplo 2: aceitar Privacidade e TOS

Neste exemplo, adicionaremos uma opção para o usuário prosseguir na conversa somente se "Você aceitar nossos Termos e Condições e Política de Privacidade". Vamos adicionar um par de controles: 1. Texto estático para mostrar o aviso, 2. Caixa de seleção para declarar aceitação. Podemos modificar o JSON para o *Exemplo 1*, adicionando os novos controles:

Substitua o JSON fornecido pelo seguinte código:

```
[
    {
        "name": "userFullname",
        "type": "text",
        "mandatory": true,
        "label": {
            "en": "Your name",
            "it": "Il tuo nome"
        }
    },
    {
        "name": "userEmail",
        "type": "text",
        "mandatory": true,
        "regex": "/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/",
        "label": {
            "en": "Your email",
            "it": "La sua email"
        },
        "errorLabel": {
            "en": "Invalid email address",
            "it": "Indirizzo email non valido"
        }
    },
    {
        "name": "tel",
        "mandatory": true,
        "label": {
            "en": "Your phone number",
            "it": "Il tuo numero di telefono"
        }
    },
    {
        "type": "static",
        "label": "Before proceeding in the conversation please agree to our <a href='https://chatcase.com/termsofservice/' target='_blank'>Terms</a> and <a href='https://chatcase.com/privacy.html' target='_blank'>Privacy Policy</a>"
    },
    {
        "type": "checkbox",
        "name": "acceptedTermsPrivacy",
        "label": {
            "en": "I agree",
            "it": "Accetto"
        },
        "mandatory": "true"
    }
]
```Agora salve a fonte colada pressionando o`UPDATE WIDGET`Botão.

Na barra superior, pressione o botão verde para abrir o widget. Agora começa uma conversa.

![imagem] (https://user-images.githubusercontent.com/32564846/140267086-2745f13f-9b0a-4a67-8712-7d99a4aab43a.png)

Como você pode ver os novos controles são mostrados no rodapé. Se você tentar prosseguir sem aceitar, o formulário irá bloqueá-lo.

![imagem] (https://user-images.githubusercontent.com/32564846/140267290-2a6b7b23-82b0-492a-a83c-b3c18daafaa4.png)

Agora, verifique a opção de aceitar os Termos de uso e prosseguir com a conversação

Exemplo 3: pergunte a primeira mensagem

Neste exemplo, adicionaremos uma opção para o usuário escrever a primeira mensagem antes de iniciar uma conversa. Esta opção é extremamente útil quando você não tem um chatbot e você quer que seus agentes entrem em contato com uma ótima primeira mensagem do usuário final, que descreve exatamente o problema. Note que com este campo especial (que usa para a propriedade "nome" o valor reservado "primeira mensagem") o widget envia instantaneamente a mensagem para ChatCase. Vamos adicionar um novo controle de área de texto com *firstMessage* como o valor da propriedade *name*. Isto irá dizer ao ChatCase para usar este valor como a primeira mensagem da conversa. Podemos modificar o JSON para o *Exemplo 1*, adicionando o novo controle de área de texto:

```
[
    {
        "name": "userFullname",
        "type": "text",
        "mandatory": true,
        "label": {
            "en": "Your name",
            "it": "Il tuo nome"
        }
    },
    {
        "name": "userEmail",
        "type": "text",
        "mandatory": true,
        "regex": "/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/",
        "label": {
            "en": "Your email",
            "it": "La sua email"
        },
        "errorLabel": {
            "en": "Invalid email address",
            "it": "Indirizzo email non valido"
        }
    },
    {
        "name": "firstMessage",
        "rows": 5,
        "type": "textarea",
        "mandatory": true,
        "label": {
            "default": "Your message for the support team"
        }
    }
]
```Agora salve a fonte colada pressionando o`UPDATE WIDGET`Botão.

Na barra superior, pressione o botão verde para abrir o widget. Agora começa uma conversa.

![imagem] (https://user-images.githubusercontent.com/32564846/140522941-3138cfe1-03d8-4f9e-b65f-93b64e44932c.png)

Você pode ver o novo controle, "Sua mensagem para a equipe de suporte", mostrado como o último. É um campo obrigatório, você deve preenchê-lo ou o formulário irá bloqueá-lo.

Assim que você preencher o formulário, a nova conversa começa, com a primeira mensagem aparecendo como a primeira da conversa. O agente (ou o chatbot) vai recebê-lo e felizmente responder

![imagem] (https://user-images.githubusercontent.com/32564846/140512666-328e7214-32a9-458a-813b-465acbf506e3.png)

Tipos de controlo

Aqui segue uma lista e uma descrição para todos os tipos de controle suportados pelo formulário prechat do ChatCase.

Texto

Este é o controle padrão, é um campo de texto simples. Quando *type* é omitido, um controle de campo de texto é renderizado. Você pode fornecer um regex para validar o campo.

![imagem] (https://user-images.githubusercontent.com/32564846/140146075-79b748e5-fe09-490a-96e5-9935cf73c977.png)

Exemplo:

```
[
  {
    "name": "userFullname",
    "type": "text",
    "mandatory": true,
    "label": {
        "default": "Your name",
        "en": "Your name",
        "it": "Il tuo nome"
    },
    "regex": "/^[a-zA-Z\\s]*$/",
    "errorLabel": {
        "default": "Incorrect name, only letters and spaces are allowed",
        "en": "Incorrect name, only letters and spaces are allowed",
        "it": "Nome errato, sono permesse solo lettere e spazi"
    }
  }
]
`$([Environment]::NewLine)
## # Texto - Especificação do formato

atributo # # # * nome *

*Mandatório *

Exemplo:

```
name: “phone”
`$([Environment]::NewLine)
** Nomes reservados**

Ao escolher o atributo "nome" de controles, tenha em mente que existem três nomes reservados do ChatCase:

1. *UserEmail * É o e-mail usado pelo ChatCase para enviar mensagens automatizadas.
2. *UserFullname* Quando disponível, é usado para identificar o usuário pelo seu nome completo em torno de ChatCase.
3. *Primeira Mensagem * Quando fornecido, este valor é usado como a primeira mensagem enviada pelo Widget assim que a conversa começa.

atributo ## # * tipo *

* opcional*, *caso insensível *

Para *Textfield* use **text** value.

atributo ### #obrigatório#

* Opcional *, * booleano *

Esta propriedade denota se é obrigatória para ter um valor para este controle.

“obrigatório”: true

O padrão é * falso *

Se verdadeiro preenchimento de algum texto é obrigatório.

atributo ### *valor *

* Opcional *

O valor predefinido para o campo.

atributo ## # *regex *

* Opcional *

Se definido, o valor do campo será validado com este regex.

Exemplo:

```
"regex" : "/^[a-zA-Z\\s]*$/"
`$([Environment]::NewLine)
atributo # # # * label *

* Opcional *

Esta é a etiqueta do controlo. Multilinguagem é suportado. Basta adicionar o código ISO do idioma como no exemplo seguinte para adicionar idiomas. Se nenhuma linguagem suportada for encontrada, o valor da etiqueta "default" será usado.

```
"label": {
  "default": "Your name",
  "en": "Your name",
  "it": "Il tuo nome"
}
`$([Environment]::NewLine)
Se o atributo *label* não estiver configurado, o atributo “name” é usado como rótulo do controle. Se o valor da propriedade *label* é um *string* (não um objeto JSON com valor de idioma ISO) a tradução é pesquisada em traduções do ChatCase usando a propriedade string do label como a chave para a tradução.

Ex. label como string "email" usará a chave de tradução de ChatCase "email".

```
"label": "email"
`$([Environment]::NewLine)
atributo de errorLabel

* Opcional *

Se disponível, o erroLabel será exibido se o regex não corresponder. Se não definir a mensagem padrão é exibida.

```
errorLabel: {
  "en": "Pattern not valid. Insert only 10-digits number",
  "it": "Campo non valido. Insersci solo un numero di dieci cifre"
}
`$([Environment]::NewLine)
Área de texto

Textarea é uma entrada de texto multi-linha. Use o valor da "área de texto" para a propriedade "tipo" para renderizar uma área de texto. Você pode fornecer um regex para validar o texto de entrada da área de texto. Use a propriedade opcional "linhas" para renderizar um número específico de linhas iniciais.

![imagem] (https://user-images.githubusercontent.com/32564846/140148740-d1ab3cdb-173a-4727-9470-df1b89f71be4.png)

Exemplo:

```
[
  {
    "name": "firstMessage",
    "type": "textarea",
    "label": {
      "default": "Your message"
    },
    "mandatory": true,
    "rows": 5
  }
]
`$([Environment]::NewLine)
## # Textarea - Especificação do formato

atributo # # # * nome *

*Mandatório *

Exemplo:

```
name: “description”
`$([Environment]::NewLine)
** Nomes reservados**

Ao escolher o atributo "nome" de controles, tenha em mente que existem três nomes reservados do ChatCase:

1. *UserEmail * É o e-mail usado pelo ChatCase para enviar mensagens automatizadas.
2. *UserFullname* Quando disponível, é usado para identificar o usuário pelo seu nome completo em torno de ChatCase.
3. *Primeira Mensagem * Quando fornecido, este valor é usado como a primeira mensagem enviada pelo Widget assim que a conversa começa.

atributo ## # * tipo *

* opcional*, *caso insensível *

Para * Textarea* use **textarea** value.

atributo ### #obrigatório#

* Opcional *, * booleano *

Esta propriedade denota se é obrigatória para ter um valor para este controle.

“obrigatório”: true

O padrão é * falso *

Se verdadeiro preenchimento de algum texto é obrigatório.

atributo ### *valor *

* Opcional *

O valor predefinido para o campo.

atributo ## # *regex *

* Opcional *

Se definido, o valor do campo será validado com este regex.

Exemplo:

```
"regex" : "/^[a-zA-Z\\s]*$/"
`$([Environment]::NewLine)
atributo # # # * label *

* Opcional *

Esta é a etiqueta do controlo. Multilinguagem é suportado. Basta adicionar o código ISO do idioma como no exemplo seguinte para adicionar idiomas. Se nenhuma linguagem suportada for encontrada, o valor da etiqueta "default" será usado.

```
"label": {
  "default": "Your name",
  "en": "Your name",
  "it": "Il tuo nome"
}
`$([Environment]::NewLine)
Se o atributo *label* não estiver configurado, o atributo “name” é usado como rótulo do controle. Se o valor da propriedade *label* é um *string* (não um objeto JSON com valor de idioma ISO) a tradução é pesquisada em traduções do ChatCase usando a propriedade string do label como a chave para a tradução.

Ex. label como string "email" usará a chave de tradução de ChatCase "email".

```
"label": "description"
`$([Environment]::NewLine)
atributo de errorLabel

* Opcional *

Se disponível, o erroLabel será exibido se o regex não corresponder. Se não definir a mensagem padrão é exibida.

```
errorLabel: {
  "en": "Pattern not valid. Insert only 10-digits number",
  "it": "Campo non valido. Insersci solo un numero di dieci cifre"
}
`$([Environment]::NewLine)
####*linhas*atributo

* Opcional *

A propriedade 'linhas' especifica o número inicial de linhas do controle da área de texto.

```
{
    "name": "firstMessage",
    "type": "textarea",
    "rows": 5
}
`$([Environment]::NewLine)
Caixa de seleção

A caixa de seleção representa uma caixa de seleção HTML. Use o valor "checkbox" para a propriedade "type" para renderizar uma caixa de seleção. Ele só pode assumir dois valores, 'checked' e 'deschecked'. Use o valor "checkbox" para a propriedade "type" para renderizar uma caixa de seleção.

![imagem] (https://user-images.githubusercontent.com/32564846/140150681-4a5b349a-1638-4340-9c32-f3270797aea6.png)

Exemplo:

```
[
  {
    "name": "acceptPrivacy",
    "type": "checkbox",
    "label": {
      "default": "Accept our privacy policy before contacting support"
    },
    "mandatory": true
  }
]
`$([Environment]::NewLine)
## # Checkbox - Especificação do formato

atributo # # # * nome *

*Mandatório *

Exemplo:

```
name: “accept”
`$([Environment]::NewLine)
** Nomes reservados**

Ao escolher o atributo "nome" de controles, tenha em mente que existem três nomes reservados do ChatCase:

1. *UserEmail * É o e-mail usado pelo ChatCase para enviar mensagens automatizadas.
2. *UserFullname* Quando disponível, é usado para identificar o usuário pelo seu nome completo em torno de ChatCase.
3. *Primeira Mensagem * Quando fornecido, este valor é usado como a primeira mensagem enviada pelo Widget assim que a conversa começa.

atributo ## # * tipo *

* opcional*, *caso insensível *

Para * Checkbox* use ** checkbox** value.

atributo ### #obrigatório#

* Opcional *, * booleano *

Esta propriedade denota se é obrigatória para ter um valor para este controle.

“obrigatório”: true

O padrão é * falso *

No caso de *checkbox* isso significa que a marcação da caixa é obrigatória.

atributo ### *valor *

* Opcional *

O valor predefinido para o campo.

atributo # # # * label *

* Opcional *

Esta é a etiqueta do controlo. Multilinguagem é suportado. Basta adicionar o código ISO do idioma como no exemplo seguinte para adicionar idiomas. Se nenhuma linguagem suportada for encontrada, o valor da etiqueta "default" será usado.

```
"label": {
  "default": "Your name",
  "en": "Your name",
  "it": "Il tuo nome"
}
`$([Environment]::NewLine)
Se o atributo *label* não estiver configurado, o atributo “name” é usado como rótulo do controle. Se o valor da propriedade *label* é um *string* (não um objeto JSON com valor de idioma ISO) a tradução é pesquisada em traduções do ChatCase usando a propriedade string do label como a chave para a tradução.

Ex. label como string "email" usará a chave de tradução de ChatCase "email".

```
"label": "accept"
`$([Environment]::NewLine)
Estático

O tipo estático é um texto simples. Use o valor "estático" para a propriedade "tipo" para renderizar um bloco estático de texto. Você pode usar texto simples ou HTML para renderizar textos mais complexos.

![imagem] (https://user-images.githubusercontent.com/32564846/140153649-cb801282-dde3-422d-8b40-0fd1ad826135.png)

Exemplo:

```
[
  {
    "type": "static",
    "label": {
      "default": "Accept the <a href='https://site.com/terms/' target='_blank'>Terms</a> before contacting support",
      "en": "Accept the <a href='https://site.com/en/terms/' target='_blank'>Terms</a> before contacting support",
      "it": "Accetta i <a href='https://site.com/it/terms/' target='_blank'>Termini</a> prima di contattare il supporto"
    }
  }
]
`$([Environment]::NewLine)
## # Estático - Especificação do formato

atributo ## # * tipo *

* opcional*, *caso insensível *

Para *Static* use **static** value.

atributo # # # * label *

* Opcional *

Esta é a etiqueta do controlo. Multilinguagem é suportado. Basta adicionar o código ISO do idioma como no exemplo seguinte para adicionar idiomas. Se nenhuma linguagem suportada for encontrada, o valor da etiqueta "default" será usado.

```
"label": {
  "default": "Your name",
  "en": "Your name",
  "it": "Il tuo nome"
}
`$([Environment]::NewLine)
Se o atributo *label* não estiver configurado, o atributo “name” é usado como rótulo do controle. Se o valor da propriedade *label* é um *string* (não um objeto JSON com valor de idioma ISO) a tradução é pesquisada em traduções do ChatCase usando a propriedade string do label como a chave para a tradução.

Ex. label como string "email" usará a chave de tradução de ChatCase "email".

```
"label": "terms"
```
