---
title: "# Onde encontrar a ação"
description: "Se as horas de funcionamento"
---

Se as horas de funcionamento

**Se as Horas de Operação** verificarem se o **tempo atual** está incluído em uma slot configurada **hora de funcionamento**. É útil sempre que você quiser conectar uma conversa com um agente ao vivo apenas quando uma equipe está realmente aberta, então os usuários não esperam por um agente que não possa responder.

<figure><img src="/files/G0gHmZ3lcfop8HtfzxFO" alt=""><figcaption></figcaption></figure>Você pode criar ** diferentes horas de trabalho** para diferentes equipes ou departamentos (por exemplo, Vendas e Suporte), e isso também é muito útil para ** equipes internacionais** trabalhando em diferentes fusos horários.

# # Onde encontrar a ação

Em ** ChatCase Design Studio**, você pode encontrá-lo aqui: Ações mais usadas → Se Horas de funcionamento

Como usá-lo no seu fluxo

Local **Se Horário de funcionamento** logo antes **Transferir para um Humano**. Sempre que o chat é suposto ser ligado a um agente ao vivo, o sistema verifica se ele está dentro do horário de funcionamento da equipe.

Ponto de avaliação verde

* Se o tempo atual estiver dentro de horas de operação, o endpoint verde é acionado e o fluxo pode continuar a **Transfer to a Human**.

Endpoint vermelho

* Se o tempo atual estiver fora do horário de operação, o endpoint vermelho é acionado. Você pode encaminhar usuários para um caminho offline (recolher e-mail ou número de telefone, ou pedir-lhes para deixar uma mensagem).

<figure><img src="/files/dA9ZIDAE7y0eoDB8rMZO" alt=""><figcaption></figcaption></figure>Dica: Este padrão mantém a sua experiência limpa. A entrega ao vivo só acontece quando a equipe está disponível e as solicitações offline são coletadas de forma estruturada.

## # Como configurar a ação

{% stepper %}
{% step %}Adicione a ação

Adicione a ação **Se horas de operação** ao seu fluxo.
{% endstep %}

{% step %}Abrir a configuração

Clique na ação para abrir o painel de configuração.
{% endstep %}

{% step %}Escolha que horas de funcionamento verificar

Em ** Verifique o horário de operação**, escolha uma dessas opções:

* Opção A: **Geral** (em todo o projeto)\
Use isto quando o mesmo horário de abertura se aplicar a todo o projeto. O horário de funcionamento **General** refere-se a todo o seu projeto.

Seus clientes não podem pedir um agente durante **horas offline**, e seus pedidos serão automaticamente colocados na fila **Conversas não atribuídas**.
* Opção B: ** slot de tempo selecionado** (específico da equipe)\
Use isso quando diferentes equipes precisam de horários diferentes. Por exemplo, você pode definir um espaço de tempo dedicado para sua equipe **Vendas**, e outro para **Apoio**.
{% endstep %}
  {% endstepper %}

<figure><img src="/files/zSpfU04HMS49Uionrn6L" alt=""><figcaption></figcaption></figure>## # Como criar horas de funcionamento e slots de tempo

Para configurar as horas de abertura gerais ou criar slots de tempo adicionais, siga este guia: [Definir as horas de operação](/docs/guia/manage-your-workspace/define-the-operating-hours)

Uma vez que suas horas de funcionamento e slots de tempo são definidos, volte para o Design Studio e selecione **General** ou um **Selecionado slot de tempo** na configuração da ação.

## # O que fazer no ponto final vermelho (offline)

Quando o endpoint ** vermelho é acionado, significa que o tempo atual é ** fora ** as horas de operação selecionadas.

Caminhos offline comuns incluem:

* Peça por **email** e/ou **número de telefone** para que você possa entrar em contato com o usuário mais tarde
* Peça ao usuário para ** deixar uma mensagem** descrevendo o problema ou solicitação
* Fornecer uma opção alternativa de auto-serviço (FAQ, base de conhecimento) e oferecer acompanhamento

Neste exemplo tutorial, informamos ao usuário que a equipe de **Venda** está atualmente fora do horário de operação, e pedimos a eles para ** deixar uma mensagem**. A mensagem pode então ser tratada pela equipe quando eles estão de volta online.

<figure><img src="/files/dA9ZIDAE7y0eoDB8rMZO" alt=""><figcaption></figcaption></figure>Espero que isto ajude.

Se precisar de mais assistência, não hesite em entrar em contato-nos[redacted@example.invalid](mailto:redacted@example.invalid). Você também pode visitar nosso site para mais casos de uso de AI Agent: [www.chatcase.com](https://www.chatcase.com/).
