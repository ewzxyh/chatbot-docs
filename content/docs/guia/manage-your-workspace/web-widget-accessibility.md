---
title: "Acessibilidade de Web Widget"
description: "O Web Widget ChatCase é projetado para fornecer uma experiência de conversação inclusiva, garantindo que todos os usuários, incluindo pessoas com deficiência, possam efetivamente i"
---

O Web Widget ** ChatCase** é projetado para fornecer uma experiência de conversação inclusiva, garantindo que todos os usuários, incluindo pessoas com deficiência, possam efetivamente interagir com agentes de IA e operadores humanos.

Este documento descreve como o Web Widget do ChatCase ** cumpriria** com as Diretrizes de Acessibilidade do Conteúdo Web (WCAG) 2.1 – Nível AA**, seguindo as melhores práticas internacionais e os requisitos de acessibilidade do setor público.

***

Padrões e Orientações

O widget foi desenhado para alinhar com:

* **WCAG 2.1 – Nível AA**
* **EN 301 549** (norma do sector público da UE)
* **WAI-ARIA 1.2**
* **Princípios de acessibilidade do Sistema de Design ECT

Acessibilidade é abordada de acordo com os quatro princípios WCAG: **Percebível, Operável, Compreensível, Robust (POUR)**.

* Todos os elementos do widget são expostos com ** HTML semântico** e ** papéis ARIA**
* O nome do remetente de mensagens é sempre anotado

** Exemplo: **

> “Assistente: Como posso ajudá-lo hoje?”

***

Leitura lógica e ordem de foco

* Ordem DOM corresponde ordem visual
* O foco segue um fluxo previsível de cima a baixo:
1. Lançador de elementos
2. História de conversação
3. Campo de entrada
4. Botões de ação

Isso garante a navegação correta para leitores de tela e usuários de teclado.

Cor e contraste

* Taxa de contraste mínima **4.5:1** para texto
* **3:1** para componentes de UI e ícones
* Nenhuma informação é transmitida apenas pela cor
* Os temas de alto contraste são suportados pela configuração

Operável

Navegação completa no teclado

O widget é totalmente utilizável **sem um mouse**:

• ação • Teclado
----------------- -------------------
& Abrir widget`Enter` / `Space`□
Navegar mensagens`Tab` / `Shift+Tab`□
□ Rolar história
Enviar mensagem`Enter`□
Fechar widget`Esc`□

Sem armadilhas de teclado

* Os usuários podem sempre sair do widget
* O foco nunca fica preso dentro das janelas modais

Compreensível

Uma pergunta de cada vez (quando bem desenhado)

O fluxo conversacional segue (quando adequadamente projetado) um paradigma de ** única questão**:

* O assistente faz ** uma pergunta por turno**
* Os usuários não são sobrecarregados com vários pedidos simultâneos
* Cada questão é contextualmente clara e concisa

Revisão e Correcção das Respostas

* Os usuários podem:
* Reveja as respostas anteriores
* Editar ou confirmar a sua entrada (quando o fluxo é projetado corretamente)

Acessibilidade Multilingue

Declaração de linguagem

* Cada mensagem declara seu idioma usando`lang`atributos (trabalho em curso)
* Leitores de tela corretamente alternar regras de pronúncia (trabalho em andamento)

UI e consistência de conteúdo

* Widget UI linguagem e assistente linguagem são sempre sincronizados (quando o fluxo é adequadamente projetado)
* Mudança de idioma:
* Atualiza rótulos de UI e respostas de IA
* Preserva o contexto da conversa

## # Conformidade com o Sistema de Design (ECT)

Consistência Visual

O widget pode ser totalmente adaptado ao **ECT Design System**, incluindo:

* Tipografia
* Espaçamento e layout
* Botões e entradas
* Estilos de foco
* Erro e estados de sucesso

Use APIs para configurar corretamente o Desenho do Widget:<https://developer.chatcase.com/widget/attributes>Robustness e Compatibilidade

* Compatível com os principais leitores de tela:
* NVDA
JAWS
VozOver
* Funciona em navegadores e dispositivos modernos
* Não funcionar sem o Javascript activado

Teste e validação

A acessibilidade será assegurada através de:

* Testes automatizados (eixo, farol, pa11y)
* Teste manual de teclado
* Teste de leitor de tela
* Teste do usuário com tecnologias assistivas
* Declarações de acessibilidade e relatórios de auditoria

Para resumir

> O Web Widget ChatCase foi projetado para se conformar com WCAG 2.1 Nível AA.\
> Melhoramos continuamente a acessibilidade através de testes, monitoramento e feedback do usuário.
