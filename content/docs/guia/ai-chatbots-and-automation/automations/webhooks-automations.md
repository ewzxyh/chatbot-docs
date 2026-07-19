---
title: "Webhooks Automaçãos"
description: "Uma automação webhook atua como um ponto de entrada em um fluxo ChatCase, recebendo uma solicitação HTTP, processando-a através da lógica de fluxo, e opcionalmente retornando uma r"
---

<figure><img src="/files/IXXVKuILM70RdpP3NL9P" alt=""><figcaption></figcaption></figure>**Webhooks Automations** em ChatCase permitem expor um fluxo de automação como um endpoint HTTP que pode ser invocado por sistemas externos.\
Eles funcionam de uma forma muito semelhante a **Make.com webhooks**, permitindo integrações orientadas para eventos, comunicação backend-to-backend e gatilhos de automação personalizados.

Uma automação webhook atua como um ponto de entrada** em um fluxo ChatCase, recebendo uma solicitação HTTP, processando-a através da lógica de fluxo, e opcionalmente retornando uma resposta HTTP estruturada.

# # Crie seu webhook

Ir em Fluxos > Automations anche escolha "Webhook"

<figure><img src="/files/Vgqu6EwMdOKTMuDTSLzB" alt=""><figcaption></figcaption></figure>Escolha um nome para o seu Webhook

<figure><img src="/files/z8IZUqxa0fT5pNtJb31x" alt=""><figcaption></figcaption></figure>Você é transferido para o Webbook Design Studio

<figure><img src="/files/VPaex0JvaUiwJAeIvjtI" alt=""><figcaption></figcaption></figure>Quando você cria uma Webhook Automation, ChatCase gera automaticamente **dois URLs webhook distintos**:

* **Desenvolvimento Webhook URL**
* **Produção Webhook URL**

Cada URL está ligada ao mesmo fluxo de automação, mas serve um propósito diferente.

<figure><img src="/files/0eglwK624d3HhQouxYiB" alt=""><figcaption></figcaption></figure>Webhook de desenvolvimento

O webhook de desenvolvimento** foi projetado para testes e depuração.

Principais características:

* Invocar este endpoint permite que você **observe a execução do fluxo em tempo real**
* Um painel de depuração live** aparece na parte inferior do editor de fluxo

<figure><img src="/files/6rijc0JswBveuZjbpWt2" alt=""><figcaption></figcaption></figure>* Você pode inspecionar:
* Carga útil recebida
* Ordem de execução do nó
* Variáveis e dados intermediários
* Erros e exceções

Isso o torna ideal para:

* Projeto de fluxo e testes
* Inspeção de carga útil
* Lógica de integração de depuração

# # # # Produção Webhook

O webhook de produção** é destinado a ambientes vivos.

Características:

* Sem painel de depuração em tempo real
* Otimizado para desempenho e estabilidade
* Deve ser usado por sistemas de produção e clientes externos

Uma vez que sua automação é testada através do webhook de desenvolvimento, você pode mudar com segurança os clientes para a URL de produção.

# # # Manuseio de carga

Todos os dados enviados para o pedido webhook é automaticamente disponibilizado dentro do fluxo através do **`payload`** objeto.

Exemplo

Se um sistema externo enviar o seguinte corpo JSON:

```json
{
  "name": "Andrea",
  "email": "redacted@example.invalid"
}
`$([Environment]::NewLine)
Você pode acessar esses valores em qualquer lugar do fluxo usando:

*`payload.name`
* `payload.email`No exemplo a seguir estamos ecoando o nome fornecido na carga útil pós na chamada

<figure><img src="/files/ZCkOFuZ7Gcri61BcvJ70" alt=""><figcaption></figcaption></figure># # Retornando uma resposta

Para retornar uma resposta ao cliente chamado, você deve usar explicitamente a ação **Response** dentro do fluxo.

ação de Resposta

A ação **Response** permite definir:

* Código de estado HTTP (por exemplo.`200`, `201`, `400`, `500`)
* Corpo de resposta JSON

# # Fogo-e-Esquecer Webhooks

Se ** nenhuma ação de resposta** estiver presente no fluxo:

* O webhook comporta-se como ** fogo-e-esquecer
* ChatCase retorna imediatamente uma resposta padrão ao chamador
* A automação continua executando assíncrona em segundo plano

Este modo é útil quando:

* O chamador não precisa de uma resposta
* Você está disparando processos de longo prazo ou de fundo
* Você quer responsividade máxima no lado do cliente

## # Webhook Logs & Administração

ChatCase fornece uma seção dedicada **Webhook Administration** no painel.

<figure><img src="/files/gYIfZnOcIgdv2QqunPHv" alt=""><figcaption></figcaption></figure>A partir deste painel você pode:

* Monitor **runtime webhook logs**
* Inspecione cargas úteis de solicitação e resultados de execução
* Temporariamente **desativar um webhook** se necessário (por exemplo, por razões de manutenção ou segurança)

<figure><img src="/files/Aa53B8iBaeOH7MOCkMHx" alt=""><figcaption></figcaption></figure>Este componente é especialmente útil em ambientes de produção para garantir a observação e o controle operacional.

Casos de uso típicos

Automaçãos Webhook são ideais para:

* Integrando sistemas externos (CRM, ERP, serviços de infraestrutura)
* Acionando fluxos de trabalho de plataformas de terceiros
* Recebendo eventos de aplicativos personalizados
* Construindo automações de servidor para servidor
* Implementação de processamento de fundo assíncrono

Resumo do Webhook ChatCase

* Automaçãos Webhooks expõem fluxos de ChatCase como endpoints HTTP
* Duas URLs estão disponíveis: **Desenvolvimento** (com depuração em tempo real) e **Produção**
* Os dados da solicitação de entrada são acessíveis através do`payload`objeto
* Use a ação **Response** para retornar respostas HTTP personalizadas
* Sem uma ação de resposta, o webhook é executado no modo **fire-and-forget**
* O painel fornece monitoramento completo e controle administrativo

Isso faz do ChatCase Webhooks uma base poderosa e flexível para automação orientada a eventos e integração do sistema.
