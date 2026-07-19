---
title: "Declaração de acessibilidade doc"
description: " Tipo de documento: Declaração consolidada de alinhamento e inventário de implementação\\ Língua: Inglês\\ Última atualização: 2026-05-12"
---

** Tipo de documento:** Declaração consolidada de alinhamento e inventário de implementação\
** Língua:** Inglês\
** Última atualização:** 2026-05-12

Este documento descreve **capacidades e padrões que estão presentes ** na engenharia de produtos. É **not** um certificado legal, VPAT, ou relatório de auditoria de terceiros.

***

1. Objetivo e escopo

Esta declaração descreve como a linha de produtos widget de chat ChatCase posiciona sua engenharia de interface de usuário em relação às normas de acessibilidade internacionalmente reconhecidas. Aplica-se ao widget baseado em Angular fornecido através de bootstrap dinâmico e um contexto de navegação incorporado, como usado em sites de clientes.

O escopo é a experiência interativa widget (launcher, conversas, formulários, mídia e sobreposições relacionadas) como implementado nesta base de código.

Esta declaração pode ser compartilhada com clientes, integradores ou especialistas em acessibilidade como **contexto** para como o widget é construído e mantido. Não substitui as avaliações de acessibilidade específicas de um determinado sítio web, a política de conteúdos ou a transposição nacional da legislação em matéria de acessibilidade.

***

2. Frameworks de referência (informativo)

O trabalho de acessibilidade sobre este produto é informado pelos seguintes níveis de referência técnicos e regulamentares, que as organizações utilizam habitualmente quando especificam a acessibilidade digital para os contratos públicos e a gestão do risco empresarial:

O papel na engenharia do produto
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
• **W3C Web Content Accessibility Guidelines (WCAG) 2.2** (Nível AA como alvo de design)
□ ** W3C Aplicações de Internet Acessíveis Ricos (WAI-ARIA) 1.2** Padrões para componentes personalizados, regiões, diálogos, regiões vivas e relacionamentos onde HTML nativo sozinho é insuficiente. □
**ETSI EN 301 549** (norma europeia de acessibilidade para produtos e serviços TIC, incluindo os requisitos 2.x-aligned WCAG)

Os pedidos formais de conformidade para uma implantação específica continuam a ser da responsabilidade da organização de implantação e são normalmente apoiados por uma avaliação independente contra a versão aplicável da WCAG e qualquer transposição regional da EN 301 549.

***

3. A postura da engenharia (estado da arte)

O widget é implementado como uma aplicação de página única focada dentro de um iframe, com um script bootstrap pai-página responsável por incorporar. A atenção da engenharia é direcionada para:

* ** Controles e nomenclaturas semânticas:** As ações primárias de navegação e cromo usam nativo`button`elementos onde o modelo de interação é ativacional; controles somente de ícones são pareados com translatable`aria-label`(ou equivalente) texto dos mapas de tradução do produto.
* ** Regiões estruturadas e bypass: ** As visões de conversação usam regiões de estilo de referência (por exemplo`role="region"`) e skip affordances para que os usuários de teclado possam mover-se eficientemente para o compositor de mensagens.
* **Modal e sobreposição semântica:** Fluxos chave, como classificação de satisfação do cliente, seleção de departamento e entrada pré-chat usam semântica de diálogo (`role="dialog"`, `aria-modal`, rotulagem) consistente com a orientação de diálogo WAI-ARIA, com suporte de gerenciamento de foco via CDK Angular onde aplicado.
* ** Formas e erros:** Campos de formulário dinâmico suportam associação programática de rótulos, estado requerido, estado inválido e descrições de erros através de relações ARIA; conteúdo de erro usa semântica ao vivo, quando apropriado para feedback sensível ao tempo.
* **Conteúdo rico:** Componentes para reprodução de áudio, carrossels e visualização de imagens seguem padrões que expõem o estado de controle e marcam gráficos decorativos adequadamente para tecnologias assistivas.
* ** Moção e percepção: ** As folhas de estilo incluem o manuseio de movimento reduzido para que os usuários que preferem menos animação recebam uma experiência visual mais calma.
* **Contexto de Embedding:** O iframe host é dado um título descritivo na camada bootstrap para que a aplicação incorporada seja identificável em contextos de navegação que títulos de frame superfície.

Testes e garantia de qualidade combinam revisão de modelo estático, verificação de construção, diagnósticos, verificação manual de teclado, testes de fumaça de leitor de tela e verificação de movimento reduzido, de acordo com a prática da indústria comum para widgets complexos.

***

# # 4. Document metadados

- Campo - Valor
□ --------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Produto □ Web Widget ChatCase
Pacote`@chat21/chat21-web-widget`□
Version (Versão) 5.1.33
□ Stack □ Angular 18.2.x (NgModule bootstrap), Angular CDK 17 (`A11yModule`), hospedado em iframe (`launch.js`) ;
□ Orientação das normas (WAI-ARIA 1.2)
□ Linguagem de documentos

***

5. Cobertura de engenharia de acessibilidade (síntese)

A tabela abaixo é o resumo de auto-avaliação ** usado internamente para acompanhar a amplitude do trabalho de acessibilidade em áreas de produtos. As pontuações numéricas refletem a amplitude da revisão interna e são **não** uma certificação de terceiros. Só são listadas as áreas onde as práticas de engenharia são ativamente aplicadas.

Área □ Pontuação (0–5)
----------------------------------------------------------------- ---------------- ------------------------------------------------------------
HTML semântico 4.5 WCAG 2.2 AA
Acessibilidade do teclado 4.5 WCAG 2.2 AA
Compliance ARIA 4.5 WAI-ARIA 1.2
Formas de acessibilidade
Dialogo / Acessibilidade modal > 4.5 O WAI-ARIA 1.2 (armadilha de foco via CDK Angular)
Regiões vivas / Anúncios SR
* Movimento reduzido / animações * 5,0 * WCAG 2.3.3 / 2.2.2 *
• Internacionalização • 4.5 • WCAG 3.1.1 / 3.1.2
Integração de Iframes 4.5 WCAG 2.4.1 / 4.1.2
* Auto-avaliação geral** * 4.5 / 5**** **WCAG 2.2 AA — implementação orientada para a engenharia**

***

# # 6. Visão geral do projeto

Tópico
□ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Modo Bootstrap** NgModule (`AppModule`) via`platformBrowserDynamic().bootstrapModule(AppModule)` (`src/main.ts`). O pacote compilado é injetado em um iframe de mesma origem por`src/launch.js`, que constrói e estilos`#chatcase-container`na página host.
Os componentes estandardizados** Não utilizados; os componentes são declarados em`AppModule` (`src/app/app.module.ts`).
Não utilizado em tempo de execução: navegação entre`home`, `list-conversations`, `conversation`, `selection-department`, `prechat-form`, `star-rating-widget`, `error-alert`é conduzido por sinalizadores de modelo dentro`AppComponent`.                            |
| **i18n**                         | `@ngx-translate/core`16 com dicionários JSON em`src/assets/i18n/{en,it,es,fr}.json`mais um dicionário remoto opcional. A língua ativa é propagada para`<html lang>`no documento do widget.
* Bibliotecas de acessibilidade utilizadas**`@angular/cdk/a11y` (`A11yModule`) — apoio à armadilha de foco para modais onde integrados. □

***

## 7. Inventário de componentes e destaques de acessibilidade

O widget expõe mais de 30 componentes. As tabelas abaixo cobrem componentes interativos que fazem parte da superfície de execução; serviços de dados puros e ajudantes de apresentação são omitidos.

## # 7.1 Componentes de shell

Componentes Selector Papel / ponto de referência
----------------------------------------------------------
□`AppComponent`               | `chat-root`□ Raiz da aplicação`:focus-visible`Anel abrangido para`chat-root`; `prefers-reduced-motion`honrado
□`LauncherButtonComponent`    | `chat-launcher-button`     | `<button>`       | `type="button"`, `aria-label`de`BUTTON_OPEN_CHAT`, foco visível
□`EyeeyeCatcherCardComponent` | `chat-eyeeye-catcher-card`Botões Todas as áreas clicáveis são reais`<button type="button">`com`aria-label`       |
| `LastMessageComponent`       | `chat-last-message`□ Botões`<button>`com`aria-label`; close é um botão real

### 7.2 Principal / lista / vistas do departamento

Componente □ Papel / ponto de referência
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
□`HomeComponent`                 | `role="region"` + `aria-label`                     | `<h1>`bem-vindos,`<p>`intro; close/maximize/minimize/center são botões; canais sociais rotulados de
□`HomeConversationsComponent`    | `role="list"` + `role="listitem"`"Mostre todas as conversas" e "Comece uma nova conversa" são botões com`aria-label`; usos de crachá arquivados`role="img"` |
| `ListAllConversationsComponent` | `role="region"`                                    | `<h2>`título; volta é um botão; morto`altIconTitle`Marcação SVG removida
□`ListConversationsComponent`□ Listar itens □ Cada item ativa um botão; contadores/falhas marcadas`aria-hidden="true"`                                             |
| `SelectionDepartmentComponent`  | `role="dialog"` `aria-modal="true"` `cdkTrapFocus` | `<h2>`título, Escape fecha, as opções são botões reais

## #7.3 Superfície de conversação

Componente □ Papel / ponto de referência
1-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□`ConversationComponent`              | `role="region"`• Visível- em- foco ignorar link → compositor (WCAG 2.4.1); rolagem- para- fundo é um botão com`aria-label`                                                                                                                |
| `ConversationHeaderComponent`        | `<button>`barra de ferramentas □ Cada controle é`<button type="button">`com`aria-label`; opções popover usa`aria-expanded`/`aria-haspopup="true"`/`aria-controls`; itens popover são botões reais agrupados sob`role="group"`(Esc fecha)
□`ConversationContentComponent`       | `role="log"` `aria-live="polite"`Cada mensagem envolto em`role="article"`; slides de carrossel expor`role="group"` + `aria-roledescription="slide"`                                                                                                  |
| `ConversationFooterComponent`□ Região semelhante ao formulário □ Anexo/emoji/enviar/registro são botões; painel emoji é`role="dialog"`; área de alerta é`role="alert"` `aria-live="assertive"`                                                                                    |
| `ConversationAudioRecorderComponent`□ Botões`aria-pressed`; play/pause/delete/enviar todas as etiquetas
□`ConversationPreviewComponent`       | `role="dialog"` `aria-modal="true"` `cdkTrapFocus` | `aria-labelledby`via`LABEL_PREVIEW`; Esc fecha; fechar/enviar são botões
□`ConversationInternalFrameComponent`O painel tem o Iframe`title`, `sandbox`, `referrerpolicy`, `loading="lazy"`; spinner`aria-hidden`                                                                                                                          |
| `MenuOptionsComponent`               | `role="group"`popover □ A opção de som usa`aria-pressed`; Esc fecha; botão alternar anuncia`aria-expanded`/`aria-haspopup="true"`□

## # 7.4 Componentes do formulário

Componentes
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□`PrechatFormComponent`     | `role="dialog"` `aria-modal="true"` `cdkTrapFocus`; `<h2>`título; Escape fecha
□`FormBuilderComponent`O botão Enviar é`type="button"`; semântica de forma nativa
□`FormTextComponent`        | `<label for>` ↔ `<input id>`; `aria-required`, `aria-invalid`, `aria-describedby`ao erro`role="alert"`; `:focus-visible`anel
□`FormTextareaComponent`O mesmo padrão que`FormText`, mais`aria-multiline`                                                                                |
| `FormCheckboxComponent`Nativo`<input type="checkbox">`ligado a`<label>`; Estados de validação ARIA
□`FormRadioButtonComponent`Nativo`<input type="radio">`                                                                                                    |
| `FormSelectComponent`Nativo`<select>`                                                                                                                |
| `FormLabelComponent`□ Ranhura do rótulo pura

## # 7.5 Componentes de bolha de mensagem

Componentes
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□`BubbleMessageComponent`□ Selector de classe que substitui o anterior duplicado`id="bubble-message"`; carrega mapa de tradução para baixo
□`TextComponent`A raiz é`<div>`; markdown renderizado através de`marked`pipe; CSS visa o`.message_innerhtml`embrulho .
□`HtmlComponent`Embrulhador de classe; desinfetante
□`ImageComponent`□ Embrulhado`<button>`com`aria-label`; lightbox é um`role="dialog"`iframe com botão de fechamento, suporte Escape e restauração de foco
□`FrameComponent`Iframe endurecido: dinâmico`title`, `sandbox`, `referrerpolicy`, `loading="lazy"`                                                                                                                     |
| `AudioComponent`Reproduzir/pausar botões rotulados através`BUTTON_PLAY_AUDIO` / `BUTTON_PAUSE_AUDIO`                                                                                                                          |
| `CarouselComponent`O wrapper expõe`role="region"` `aria-roledescription="carousel"` `aria-label`; cada carta é`role="group"` `aria-roledescription="slide"` `aria-label="Slide N of M"`; setas e CTAs são botões
□`ActionButtonComponent`, `LinkButtonComponent`, `TextButtonComponent`Real`<button>` / `<a>`com`aria-label`                                                                                                                                                           |
| `ReturnReceiptComponent`, `LikeUnlikeComponent`, `AvatarComponent`, `InfoMessageComponent`Iconografia decorativa sinalizada`aria-hidden="true"`; conteúdo semântico carrega alternativas de texto

## #7.6 Modals

Componentes
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□`ConfirmCloseComponent`     | `role="dialog"` `aria-modal="true"` `cdkTrapFocus` `aria-labelledby="confirm-close-title"`; `<h2>`cabeçalho; Escape fecha; cancel/confirmar são botões reais
□`ErrorAlertComponent`Fornece mensagens de erro translatáveis
□`StarRatingWidgetComponent`□ Estrelas expostas como botões; a área de comentários é uma área de texto rotulada

***

# # 8. WCAG 2.2 verificação de conformidade (padrões implementados)

A tabela a seguir lista ** critérios de sucesso para os quais o widget implementa padrões de suporte** que foram revistos na instrução de engenharia. Cada linha documenta o que **está presente** na linha de produtos.

□ Critério de sucesso .
----------------------------------------------------------------------------------------------------------------------------------------------------
1.1.1 Conteúdo não-texto Todos os ícones informativos carregam`aria-label`/`alt`; SVGs decorativos usar`aria-hidden="true"`e`focusable="false"`□
Informações e Relacionamentos`<h1>`/`<h2>`posições,`role="log"`, `role="article"`, `role="list"`, programático`<label for>` ↔ `<input id>`□
1.3.2 Sequência Significativa A ordem do passe do Tab segue ordem de leitura; alta`tabindex`valores removidos
Contraste (Mínimo) (AA) (Passo) (Passo) (Passo) (Passo) (Passo) (Passo) (Passo) (Paletas personalizadas)
□ 1.4.4 Redimensionar o texto O layout é baseado em; honra a escala de fonte do usuário □
□ 1.4.10 Refluxo □ AA □ Pass □ Disposição responsiva; sem rolagem horizontal a 320 pixels CSS
1.41 Contraste não-text`2px solid #1a73e8`, ≥ 3:1 contra fundos de widgets
Espaçamento de Texto Nenhuma linha fixa crítica-altura/carta-espaçamento substitui
Conteúdo em Hover ou Foco ..Passo ..`:hover`/`:focus`, descartável, persistente; nenhuma demissão baseada no tempo
2.1.1 Teclado Um passe Todos os elementos acionáveis são alcançáveis e operáveis a partir do teclado (botões reais, controles de forma nativa)
Não há armadilha de teclado`cdkTrapFocus`captura somente dentro de diálogos; Esc e foco de retorno de diálogo-fechar
2.1.4 Atalhos de Chave de Caracteres O widget não vincula atalhos de caracteres únicos globalmente .
2.2.2 Pause, Stop, Ocultar Um Passo As animações são decorativas e curtas; a consulta de mídia de movimento reduzido as desativa inteiramente
• 2.3.3 Animação a partir de Interações`prefers-reduced-motion: reduce`neutraliza animações e transições dentro`chat-root`□
2.4.1 Blocos de bypass A Pass Pular link na superfície da conversa salta foco para o compositor de mensagens
□ 2.4.3 Focus Order (Ordem de Foco) A Pass (Ordem lógica): header → log → compositor → rodapé; alto`tabindex`removido
□ 2.4.7 Foco Visível`outline: none`Removido;`:focus-visible`regra abrangida`chat-root`□
2.4.11 Focus Not Obscured (Min) (AA) AA Pass O cabeçalho/pé pegajoso deixam o controle ativo visível; verificado com o botão do lançador
2.5.7 Movimentos de Arrastamento AA Pass.O carrossel pode ser operado por botões de seta próximos / anteriores, além de arrastar
Tamanho do alvo (Mínimo)
3.1.1 Linguagem da Página`<html lang>`sincronizado com a língua i18n ativa por`TranslatorService.syncDocumentLang`□
3.2.1 Em Foco Nenhuma mudança de contexto no foco .
3.2.2 Na entrada .. Nenhuma alteração de contexto na entrada; o usuário sempre confirma □
Ajuda Consistente A Passar`menu-options`) são consistentes em todas as visões ;
Identificação de Erros ..A ..Pass ..Os erros do formulário são anunciados com`role="alert"`e`aria-invalid`□
3.3.2 Etiquetas ou Instruções Todos os campos de formulário têm etiquetas programáticas e placeholder não é o único rótulo .
Sugestão de Erros ..3.3.3`LABEL_ERROR_FIELD_NAME`, `LABEL_ERROR_FIELD_EMAIL`, `LABEL_ERROR_FIELD_REQUIRED`) explicar a questão
□ 3.3.7 Entrada redundante A Pass □ Os dados do formulário pré-chat são persistidos e re-aplicados através da reabertura
4.1.2 Nome, Papel, Valor Todos os controles personalizados convertidos para HTML nativo ou carregam ARIA válido
4.1.3 Mensagens de Status`role="log"`/`aria-live="polite"`; usa alerta bloqueado emoji`role="alert"`□

***

9. Práticas de acessibilidade aplicadas (inventário)

Esta seção inventários ** práticas de engenharia de concreto** presentes na base de código.

## # 9.1 Janelas modais

*`@angular/cdk/a11y` (`A11yModule`) importados em`AppModule`.
* `cdkTrapFocus` + `cdkTrapFocusAutoCapture="true"`em superfícies de diálogo incluindo`ConversationPreviewComponent`, `ConfirmCloseComponent`, `SelectionDepartmentComponent`, `PrechatFormComponent`.
* `@HostListener('keydown.escape')`em componentes de diálogo para fechar em Escape e emitir o evento fechado.
*`<h2>`cabeçalho na janela confirmar- fechar ligado`aria-labelledby="confirm-close-title"`.
Nativo`<dialog>`com`showModal()`quando utilizado para confirmar-fechar para que o navegador aplique o comportamento de foco, além do CDK.

## # 9.2 Caixa de imagens

* Imagem gatilho como`<button type="button">`com`aria-label`.
* Conteúdo iframe Lightbox com`role="dialog"`, `aria-modal="true"`e explícita`aria-label`.
* Fechar o controle como`<button>`com`aria-label`e contorno visível-foco.
* Foco automático no botão fechar quando aberto; foco restaurado em fechar; Escapar e fundo fechar.
* Documento`lang`herdado; transições desactivadas em`prefers-reduced-motion`.

## # 9.3 Skip link and marcos

* Link de skip visível em foco`ConversationComponent` (`.c21-skip-link`) que saltam para`#chat21-main-message-context`via`skipToCompose()`.
* `role="region"` + `aria-label` on `HomeComponent`, `ListAllConversationsComponent`, `ConversationComponent`.
* `<h1>`para o título de boas-vindas;`<p>`Introdução;`<h2>`para o título lista-to-conversas.

### 9.4 Internacionalização e linguagem documental

`TranslatorService`atualizações`document.documentElement.lang`quando um pacote de tradução carrega (somente documento widget iframe).

□ Chave
----------------------------------------------------------------------------------------------------------------------
□`CAROUSEL_LABEL`       | `aria-label`do recipiente de carrossel .
□`CAROUSEL_SLIDE_LABEL`□ Modelo para`aria-label="Slide {current} of {total}"`por slide
□`SKIP_TO_COMPOSER`Texto do link de skip

### 9.5 Movimento reduzido

Um bloco de pesquisa de mídia`src/app/sass/animations.scss`neutraliza duração da animação, atraso da animação, duração da transição e`scroll-behavior`para descendentes de`chat-root`quando`prefers-reduced-motion: reduce`está ativo.

9,6 Menu padrão

Menus de contexto`conversation-header`e`chat-menu-options`são modelados como`role="group"`de nativo`<button>`elementos: gatilho expõe`aria-expanded`, `aria-haspopup="true"`, `aria-controls`; popover tem`aria-label`; usos de alternância de som`aria-pressed`; Escape fecha o grupo.

9.7 Carrossel

* Wrapper:`role="region"`, `aria-roledescription="carousel"`, localizado`aria-label`.
* Cada carta:`role="group"`, `aria-roledescription="slide"`, `aria-label="Slide N of M"`(localizável).
* Controles de seta:`<button type="button">`com`aria-label`de`CAROUSEL_PREVIOUS` / `CAROUSEL_NEXT`.
* Cartão CTAs:`<button>`com`aria-label`.
* As imagens carregam significativo`alt`; Usos de substituição`alt=""`.

9.8 Formulários

`form-text`, `form-textarea`, `form-checkbox`expor o pareamento entre rótulos, entradas e regiões de erro (`aria-describedby`, `aria-invalid`, `role="alert"`sobre os erros).

9.9 Iframes

`FrameComponent`e`ConversationInternalFrameComponent`declarar`title`, `sandbox`, `referrerpolicy`, e`loading="lazy"`em quadros embutidos.

## 9.10 Visibilidade de foco

`app.component.scss`define`:focus-visible`linhas de ação`chat-root`Então o foco do teclado é visível sem os anéis de foco do mouse em cada clique.

***

10. Metodologia de teste

Atividade
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
• Revisão estática`*.component.html`), estilos (`*.component.scss`), e classes de componentes revisadas contra WCAG 2.2, WAI-ARIA 1.2 e EN 301 549 como referência informativa.
□ Verificação da compilação`ng build`e verificação de tipo de modelo angular.
Diagnósticos do tipo e diagnósticos do modelo angular em arquivos modificados.
• Teclado manual passe-through • Tab / Shift+Tab / Enter / Space / Esc através do lançador → home → conversa → compositor (link skip), menu popovers, confirmar-fechar, prechat, seleção de departamento, caixa de luz de imagem, setas de carrossel. □
□ Leitor de tela smoke test □ NVDA, VoiceOver — cabeçalhos, anúncios de log, rótulos de diálogo, etiquetas de botões na língua ativa. □
* Teste de fumaça de movimento reduzido`prefers-reduced-motion: reduce`, animações e transições dentro`chat-root`são neutralizados.

***

11. Locais de origem primários (referência)

Os seguintes caminhos são locais primários para verificar as práticas acima:

```
src/app/app.module.ts
src/app/app.component.html
src/app/app.component.scss
src/app/sass/animations.scss
src/app/providers/translator.service.ts
src/app/providers/brand.service.ts
src/app/utils/utils-resources.ts
src/app/utils/globals.ts
src/app/component/home/home.component.html
src/app/component/home/home.component.scss
src/app/component/home-conversations/home-conversations.component.html
src/app/component/list-all-conversations/list-all-conversations.component.html
src/app/component/list-all-conversations/list-all-conversations.component.scss
src/app/component/selection-department/selection-department.component.html
src/app/component/selection-department/selection-department.component.ts
src/app/component/conversation-detail/conversation/conversation.component.html
src/app/component/conversation-detail/conversation/conversation.component.scss
src/app/component/conversation-detail/conversation/conversation.component.ts
src/app/component/conversation-detail/conversation-header/conversation-header.component.html
src/app/component/conversation-detail/conversation-content/conversation-content.component.html
src/app/component/conversation-detail/conversation-footer/conversation-footer.component.html
src/app/component/conversation-detail/conversation-footer/conversation-footer.component.ts
src/app/component/conversation-detail/conversation-preview/conversation-preview.component.html
src/app/component/conversation-detail/conversation-preview/conversation-preview.component.ts
src/app/component/conversation-detail/conversation-internal-frame/conversation-internal-frame.component.html
src/app/component/conversation-detail/conversation-audio-recorder/conversation-audio-recorder.component.html
src/app/component/conversation-detail/conversation-audio-recorder/conversation-audio-recorder.component.ts
src/app/component/menu-options/menu-options.component.html
src/app/component/eyeeye-catcher-card/eyeeye-catcher-card.component.html
src/app/component/eyeeye-catcher-card/eyeeye-catcher-card.component.scss
src/app/component/last-message/last-message.component.html
src/app/component/last-message/last-message.component.scss
src/app/component/launcher-button/launcher-button.component.html
src/app/component/send-button/send-button.component.html
src/app/component/star-rating-widget/star-rating-widget.component.html
src/app/component/form/prechat-form/prechat-form.component.html
src/app/component/form/prechat-form/prechat-form.component.ts
src/app/component/form/form-builder/form-builder.component.html
src/app/component/form/inputs/form-text/*
src/app/component/form/inputs/form-textarea/*
src/app/component/form/inputs/form-checkbox/*
src/app/component/message/bubble-message/bubble-message.component.html
src/app/component/message/text/text.component.html
src/app/component/message/text/text.component.scss
src/app/component/message/html/html.component.html
src/app/component/message/html/html.component.scss
src/app/component/message/image/image.component.html
src/app/component/message/image/image.component.scss
src/app/component/message/image/image.component.ts
src/app/component/message/audio/audio.component.html
src/app/component/message/audio/audio.component.ts
src/app/component/message/frame/frame.component.html
src/app/component/message/frame/frame.component.ts
src/app/component/message/buttons/action-button/action-button.component.html
src/app/component/message/carousel/carousel.component.html
src/app/component/message/carousel/carousel.component.scss
src/app/component/message/carousel/carousel.component.ts
src/app/modals/confirm-close/confirm-close.component.html
src/app/modals/confirm-close/confirm-close.component.scss
src/app/modals/confirm-close/confirm-close.component.ts
src/assets/i18n/en.json
src/assets/i18n/it.json
src/assets/i18n/es.json
src/assets/i18n/fr.json
`$([Environment]::NewLine)
***

12. Referências

O recurso O URL
-------------------------------------------------------------------------------------------------------------------------------
• WCAG 2.2<https://www.w3.org/TR/WCAG22/>□
Práticas de Criação da WAI-ARIA<https://www.w3.org/WAI/ARIA/apg/>□
• EN 301 549 v3.2.1 • Publicação ETSI — Requisitos de acessibilidade para produtos e serviços TIC
Acessibilidade Angular do CDK<https://material.angular.dev/cdk/a11y/overview>□
Acessibilidade MDN<https://developer.mozilla.org/en-US/docs/Web/Accessibility>□

***

13. Alinhamento contínuo

A ChatCase continua, dia após dia, a acompanhar os padrões de acessibilidade e o comportamento da plataforma em todos os navegadores e tecnologias assistivas. O objetivo é ampliar a cobertura de critérios de sucesso orientados para WCAG, práticas de autoria WAI-ARIA e expectativas alinhadas com a EN 301 549, onde quer que se apliquem a esta categoria de produtos, e refletir essas expectativas em projetos, implementação e testes de liberação. Os padrões e implementações do usuário-agente evoluem; a postura de acessibilidade é mantida como parte do ciclo de vida normal da engenharia.

***

14. Contacto e feedback

Para perguntas de acessibilidade ou atualizações para uma implantação personalizada, contate os mantenedores deste repositório:<https://github.com/ChatCase/chat21-web-widget>As questões que mencionam **acessibilidade** no título são encaminhadas para a equipe responsável por esta declaração.
