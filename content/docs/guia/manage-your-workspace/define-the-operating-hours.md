---
title: "Definir as Horas de Operação"
description: "Defina as horas de funcionamento"
---

Defina as horas de funcionamento

No ChatCase, você pode definir suas horas de operação. Se um cliente entrar em contato com você fora dessas horas, o bot irá informar os visitantes que você irá contatá-los mais tarde. Esta é uma ação importante e útil para evitar que seus clientes esperem muito tempo em uma conversa.

Defina as suas horas de funcionamento<a href="#set-your-operating-hours" id="set-your-operating-hours"></a>As configurações do horário de operação determinam quando o serviço está aberto. Quando o horário de funcionamento é ativado, os agentes não podem receber mensagens de usuários finais fora do horário de trabalho programado, independentemente da disponibilidade dos agentes.

Se o horário de funcionamento estiver ativado e um cliente entrar em contato fora do seu horário de escritório, uma nova conversa não atribuída é criada.

Como definir as horas de funcionamento<a href="#how-to-define-operating-hours" id="how-to-define-operating-hours"></a>Dirige-se para o painel [** ChatCase](https://panel.chatcase.com/v3/dashboard/#/signup). Clique em "Configurações" e, em seguida, "Horas de funcionamento".

Primeiro, você precisa ativar "Ativar Horários Gerais de Abertura", definir o "Home Zone", e definir o horário de funcionamento na parte inferior da página.

Carregue em "Salvar".

<figure><img src="/files/Z0PEAfENG4bkeyAogGEO" alt=""><figcaption></figcaption></figure>**Criar diferentes Fendas de Horas de Operação**

Outra característica legal nesta seção é a capacidade de definir diferentes slots. Por exemplo, se sua equipe de suporte ao cliente trabalha em um fuso horário diferente, este recurso será muito útil. Com ele, você pode ter um espaço de tempo para sua equipe de suporte e outro para sua equipe de vendas.

Vamos criar um novo slot, e mais tarde vou mostrar-lhe como usá-lo no Design Studio.

Para adicionar o novo slot de tempo, clique na "cabeça de seta dupla" ao lado do título Geral, como você pode ver na imagem abaixo, e clique em "Nova Fenda". Escolha um nome para o novo slot e clique em "Criar".

<figure><img src="/files/lmLNuQTEawkMNf5PrlMp" alt=""><figcaption></figcaption></figure>Como você pode ver, uma nova página de horas operacionais aparecerá onde você pode clicar em "Ativar Fenda de Tempo", e então selecione o fuso horário e dias e horas de trabalho específicos com base em suas necessidades.

Não se esqueça de salvar mudanças.

<figure><img src="/files/Mz7q1bUFAlOlrFAvZpLU" alt=""><figcaption></figcaption></figure>Em seguida, volte para o Design Studio e use a ação “Se Hora de Operação” antes da ação [Transferência para um Humano](/docs/guia/ai-chatbots-and-automation/actions-explained/transfer-to-a-human)

<figure><img src="/files/7EJ0YCMAkd4p6xwpA1Bt" alt=""><figcaption></figcaption></figure>Em seguida, clique no novo [Block](/docs/guia/ai-chatbots-and-automation/visual-builder-101/how-to-create-a-block), e no menu superior direito, você tem a opção de clicar em "Selected Time Slot" para selecionar o "Support team slot" que acabamos de criar. Alternativamente, você pode simplesmente deixá-lo como padrão (Geral) se você não precisar de diferentes slots de tempo.

<figure><img src="/files/Ny4j73ETWsRvOEIamosQ" alt=""><figcaption></figcaption></figure>A partir do endpoint verde, continue o fluxo para “Agent Handoff” e do endpoint vermelho para a mensagem offline, como você pode ver na imagem abaixo.

<figure><img src="/files/s0q6SSzE4tGy5uWbUxsP" alt=""><figcaption></figcaption></figure>Espero que isto ajude.

Não hesite em entrar em contato-nos caso precise de assistência adicional em [**redacted@example.invalid**](mailto:redacted@example.invalid).

Para mais informações, visite [**www.ChatCase.com**](https://chatcase.com/).

Queres começar a sua viagem? [** Crie uma conta gratuita agora**](https://panel.chatcase.com/v3/dashboard/#/signup).
