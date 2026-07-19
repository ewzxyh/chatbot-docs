---
title: "Visão geral da característica da voz"
description: "Os fluxos de trabalho de voz do ChatCase podem ser configurados usando diferentes blocos dentro do Design Studio ou um fluxo de conversa habilitado para voz. Aqui está o que está d"
---

## ChatCase Voice Features Integração via Twilio[#](https://gethelp.chatcase.com/articles/voice-feature-overview/#chatcase-voice-features-integration-via-twilio) <a href="#chatcase-voice-features-integration-via-twilio" id="chatcase-voice-features-integration-via-twilio"></a>ChatCase estende suas capacidades de IA conversacional para o canal **voice** através da integração com **Twilio**, permitindo experiências orientadas por voz, como fluxos de IVR, mensagens de boas-vindas e transferências de chamadas inteligentes. Este tutorial fornece uma visão geral dos recursos de voz atuais, integração com bots do WhatsApp e opções de personalização.

Os fluxos de trabalho de voz do ChatCase podem ser configurados usando diferentes blocos dentro do Design Studio ou um fluxo de conversa habilitado para voz. Aqui está o que está disponível atualmente:

# # # # 1. Mensagem de boas-vindas # #https://gethelp.chatcase.com/articles/voice-feature-overview/#1-welcome-message) <a href="#id-1-welcome-message" id="id-1-welcome-message"></a>Você pode cumprimentar os usuários com uma mensagem de boas-vindas**estática** ou **dinâmica**:

** Opções Estáticas**

**Play Prompt**: Toca uma mensagem fixa usando TTS (Text-to-Speech).

**Speech Form** (com **No Input** support): Faz uma pergunta e escuta uma entrada de voz. Se nenhuma resposta for dada, pode desencadear um recuo ou transferência.

** Opção dinâmica **

** Tarefa GPT**: Gera uma mensagem de boas-vindas personalizada usando uma interação rápida com um modelo GPT.

> Exemplo: “Olá! Sou seu assistente. Diga alguma coisa ou pressione um número para continuar.”

Você pode criar um menu ** interativo** onde os usuários pressionem dígitos para navegar nas opções. Isso é conseguido usando o bloco **DTMF Menu**.

Menu de exemplo:

```
Press 1 → Get chatbot information
Press 2 → Leave your number
Press 3 → Provide more details
`$([Environment]::NewLine)
Cada opção pode redirecionar o chamador para:

Um agente ChatCase

Um fluxo de chatbot

Um formulário para recolher a entrada numérica (como números de telefone)

#### 3. Recolhendo Entrada do Usuário (Forma DTMF)[#](https://gethelp.chatcase.com/articles/voice-feature-overview/#3-collecting-user-input-dtmf-form) <a href="#id-3-collecting-user-input-dtmf-form" id="id-3-collecting-user-input-dtmf-form"></a>Use o bloco **DTMF Form** quando você quiser coletar informações numéricas como números de telefone ou códigos de identificação.

Você pode definir:

**Digitos mínimos/máximos

** Tempo limite**

** Regras de validação**

> Exemplo: "Por favor, insira seu ID do cliente, seguido pela chave libra."

# # # 4. Chamar transferência # #https://gethelp.chatcase.com/articles/voice-feature-overview/#4-call-transfer) <a href="#id-4-call-transfer" id="id-4-call-transfer"></a>As chamadas podem ser encaminhadas para um operador ao vivo ou outro número usando:

** Transferência cega

Transfere instantaneamente a chamada para um número especificado.

Pode ser usado como recurso em caso de **No Input** do usuário.

Voz Integrante e WhatsApphttps://gethelp.chatcase.com/articles/voice-feature-overview/#integrating-voice-and-whatsapp) <a href="#integrating-voice-and-whatsapp" id="integrating-voice-and-whatsapp"></a>Posso usar o mesmo bot para voz e WhatsApp?https://gethelp.chatcase.com/articles/voice-feature-overview/#can-i-use-the-same-bot-for-both-voice-and-whatsapp) <a href="#can-i-use-the-same-bot-for-both-voice-and-whatsapp" id="can-i-use-the-same-bot-for-both-voice-and-whatsapp"></a>Sim, a lógica **subjacente e o motor chatbot** são compartilhados, mas **voz requer ajustes específicos**:

Para **Voz**: Use blocos como Play Prompt, Speech Form e DTMF Menu em vez de Responder.

Para **WhatsApp**: Respostas de texto regulares e botões são suportados.

** Um número para ambos os canais?**

Tecnicamente possível com Twilio, mas precisa de uma configuração cuidadosa para encaminhar as mensagens corretamente com base no canal (voz vs. WhatsApp).

Você precisará de fluxos separados ou lógica de manuseio específica do canal.

### Opções de personalização de voz[#] (https://gethelp.chatcase.com/articles/voice-feature-overview/#voice-customization-options) <a href="#voice-customization-options" id="voice-customization-options"></a>Atualmente, a **voz usada para mensagens TTS** é pré-definida e não personalizável.

Ainda não há apoio para:

Alteração dos fornecedores de TTS

Escolher diferentes vozes ou línguas

Seleção de tom de voz/estilo

> Características sendo desenvolvidas ativamente no momento.

### Resumo[#](https://gethelp.chatcase.com/articles/voice-feature-overview/#summary) <a href="#summary" id="summary"></a>Característica Descrição
--------------------------- ------------------------------------------------------------------------------------------
Mensagem de boas-vindas** Estática (Play Prompt / Speech Form) ou dinâmica (GPT Task)
• Menu IVR** Navegação baseada em DTMF usando teclado
Coleção de Entradas** DTMF Formulário para entrada numérica estruturada
Transferência de chamadas** Transferência cega para retorno ou roteamento de agentes vivos
Suporte de canais cruzados** Mesma lógica bot, adaptada por canal (WhatsApp vs. Voz)
Personalização de Vozes** Não disponível no momento
