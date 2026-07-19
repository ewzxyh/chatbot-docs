---
title: "Visão geral da arquitetura"
description: "! Arquitectura de ChatCase Visão Geral (https://chatcase.com/wp-content/uploads/2024/10/Screenshot-2024-10-26-at-20.55.59.png)"
---

! [Arquitectura de ChatCase Visão Geral] (https://chatcase.com/wp-content/uploads/2024/10/Screenshot-2024-10-26-at-20.55.59.png)

* Visão geral da arquitetura do sistema de ChatCase

ChatCase é um framework sem código/low-code que capacita as organizações a construir e implantar agentes conversacionais de IA, integrando perfeitamente o suporte humano em vários canais de comunicação. A arquitetura da plataforma é projetada para tornar a construção de agentes de IA sofisticados acessíveis a todos, desde usuários de negócios até desenvolvedores, mantendo a flexibilidade para personalização avançada.

# # Componentes do sistema

## # Ferramentas de construção visual

O frontend fornece interfaces intuitivas sem código construídas com Angular:

* **Automation Designer**: Um construtor de fluxo visual para projetar comportamentos de agentes de IA, fluxos de conversa e regras de handoff humanos sem codificação
* **Dashboard**: Interface abrangente para gerenciar agentes, conversas e análises
* **Widget**: Componente de chat facilmente incorporado para sites
* ** Aplicações de Chat**: Aplicativos nativos para iOS e Android permitindo que agentes humanos assumam conversas

Infraestrutura de infra- estrutura

1. IA e Núcleo de Automação

* Motor de automação visual para execução de fluxos de conversa
* Classificação de intenção usando modelos LSTM/BERT para compreensão de linguagem natural
* Sistema de atribuição inteligente para rotear conversas entre IA e agentes humanos
* Built-in recursos de centro de ajuda

####2. Comunicação multicanal

* Pronto para usar WhatsApp Business, Facebook Messenger, Telegram e integrações SMS
* Arquitetura de canal extensível suportando plataformas de mensagens adicionais
* MQTT e RabbitMQ garantindo entrega confiável de mensagens através dos canais

3. Gestão de Dados e Estado

* MongoDB armazenando histórias de conversa e configurações
* Redis lidando com estados em tempo real e cache
* Servidor SMTP para notificações de email

# # Características da plataforma chave

* **No-Code First**: Construir agentes de IA complexos através de interfaces visuais sem codificação
* **Human-in-the-Loop**: Transição sem costura entre IA e agentes humanos
* ** Flexibilidade do Canal**: Implantar seus agentes em vários canais de comunicação
* **Desenvolvedor Extensível**: Acesso completo à API e recursos de personalização para desenvolvedores
* ** Arquitetura em tempo real**: Construído para conversas em tempo real e transferências instantâneas
* ** Plataforma aberta**: Estenda a funcionalidade através de APIs e integrações personalizadas

# # Começar

Se você é um usuário de negócios que procura criar seu primeiro agente de IA ou um desenvolvedor que planeja estender a plataforma, o ChatCase fornece vários pontos de entrada:

# # Para usuários de negócios

* Use o Visual Automation Designer para criar fluxos de conversa
* Implantar para seus canais escolhidos através do painel
* Integrar o widget de chat em seu site

## Para os desenvolvedores

* Acesse nossa documentação abrangente da API
* Ampliar a funcionalidade da plataforma usando nossas ferramentas de desenvolvimento
* Criar integrações de canais personalizadas

# # Pilha Técnica

* **Frontend**: Angular
* **Backend**: NodeJS
* **AI/ML**: Python (LSTM/BERT)
* **Bases de dados**:
* MongoDB (base de dados principal)
* Redis (caching/tempo real)
* ** Manipuladores de Mensagens**:
* CoelhoMQ
* MQTT
* ** Comunicação**:
* Servidor SMTP
* WebSocketts
