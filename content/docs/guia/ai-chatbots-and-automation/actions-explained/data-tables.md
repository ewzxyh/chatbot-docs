---
title: "# Introdução"
description: "Tabelas de dados"
---

Tabelas de dados

# # Introdução

<figure><img src="/doc-images/i3QJ0vlsR3ZLKPXPCfUm.png" alt=""><figcaption></figcaption></figure>Tabelas de dados é um recurso ChatCase (atualmente em BETA) que permite criar tabelas simples e estruturadas de dados diretamente dentro do ChatCase Design Studio e usá-los como um banco de dados leve para seus fluxos de chatbot. Cada tabela é composta de colunas e linhas digitadas, semelhantes a uma planilha, e pode ser lida e escrita para enquanto uma conversa está sendo executada.

Tabelas de dados são projetadas para casos de uso onde um bot precisa persistir ou procurar pequenas quantidades de informações estruturadas sem se conectar a um banco de dados externo — por exemplo, armazenar registros de usuários coletados durante uma conversa, verificar se um e-mail já existe antes de criar um novo registro, manter uma FAQ simples ou catálogo de produtos, ou manter contadores e bandeiras entre sessões.

## # Para que são usadas as tabelas de dados

* Armazenar informações coletadas dos usuários durante um bate-papo (por exemplo, nome, e-mail, preferências) para que possa ser reutilizado em etapas posteriores ou conversas posteriores.
* Procurando registros existentes antes de criar novos, para evitar duplicatas (por exemplo, “este usuário já existe?”).
* Manter dados de referência simples para o bot consultar, como listas de produtos, FAQs ou valores de configuração.
* Alimentação recuperou valores de volta para o fluxo (mensagens, condições, alertas de IA) usando variáveis de fluxo.

# # Criando e gerenciando tabelas de dados do console

As tabelas de dados são criadas e gerenciadas a partir da seção “Tabelas de dados (BETA)” do console ChatCase, acessível a partir do mesmo espaço de trabalho onde vivem seus Flows e agentes de IA.

Criando uma mesa

Para criar uma nova tabela:

1. Abra a seção de Tabelas de Dados (BETA) e clique em Criar tabela no painel esquerdo “Your TABLES”.
2. Na janela Criar tabela, insira um Nome para a tabela (por exemplo, “usuários”).
3. Defina as Colunas da tabela. Para cada coluna, defina um Nome e um Tipo. Os tipos de coluna suportados são: string, number, boolean e datetime.
4. Use Adicionar coluna para adicionar colunas adicionais, ou o ícone × para remover uma.
5. Clique no botão de confirmação para salvar e criar a tabela.

<figure><img src="/doc-images/AYajsEyKr3kEUrCgS8ju.png" alt=""><figcaption></figcaption></figure>**Nota**: Os tipos de colunas são forçados quando os dados são inseridos ou atualizados, então escolha o tipo que corresponde aos dados que você planeja armazenar (por exemplo, número para contadores, booleano para bandeiras, data para datas).

## # Navegação e edição de dados da tabela

Uma vez criada, uma tabela aparece na lista “Your TABLES” à esquerda. Selecionando-o abre uma área de grade semelhante a planilha mostrando todas as linhas e colunas, com os seguintes controles disponíveis:

* Adicionar linha — insere manualmente uma nova linha vazia que você pode preencher diretamente na grade.
* Adicionar coluna — adiciona uma nova coluna à tabela, com seu próprio nome e tipo.
* Pesquisa — uma caixa de pesquisa na parte superior direita filtra linhas correspondentes ao texto inserido.
* Exclusão de linha - cada linha tem um ícone de lata de lixo para excluí-lo individualmente.
* Atualizar e contador de linhas — um ícone de atualização e um contador “número total de linhas: X / 200” são mostrados acima da grade.

<figure><img src="/doc-images/QslWTwRNrqAAVzyMCFZx.png" alt=""><figcaption></figcaption></figure>Limite de armazenamento

Existe uma tampa de armazenamento global de uma única Tabela de dados. Seu tamanho não pode exceder 30 MB. Este limite aplica-se ao tamanho combinado de todas as linhas e colunas na tabela, por isso vale a pena manter o conteúdo da coluna (especialmente strings longas) razoavelmente compacto, particularmente para tabelas que se espera que cresçam em direção à contagem máxima de linhas.

# # Usando tabelas de dados em um fluxo

Dentro do editor de fluxo Design Studio, as Tabelas de Dados são acessadas através do bloco Tabela de Dados (BETA), encontrado sob o painel de categoria “Mais usado” / bloco (o ícone da grade). Arrastar esse bloco para um fluxo permite que você execute operações ao estilo CRUD contra uma de suas tabelas como parte da lógica de conversação.

O bloco da tabela de dados

Cada Dados O bloco de tabela está configurado com os seguintes campos:

* Tabela de dados — uma lista para selecionar qual tabela o bloco deve operar (por exemplo, “usuários”).
* Operação — a ação a executar na mesa. Operações disponíveis são: Obter, Inserir, Atualizar, Upsert e Excluir.
* Condições de correspondência (Get, Upsert, Delete) — uma ou mais condições usadas para filtrar/encontrar linhas, cada uma definida por uma Coluna, um Operador (por exemplo, igual), e um Valor. Várias condições podem ser combinadas com toda (AND) ou qualquer (OR) lógica, e outras condições podem ser adicionadas com a condição Adicionar.
* Atribuir resultado a — o nome da variável de fluxo que receberá o resultado da operação (por exemplo, dados\ table\ result).
* Atribuir erro a — o nome da variável fluxo que receberá detalhes de erro se a operação falhar (por exemplo, erro).

<figure><img src="/doc-images/YgPgJ5xMLSraY0VDmR9G.png" alt=""><figcaption></figcaption></figure>Cada bloco expõe dois caminhos de saída, mostrados na borda direita do bloco:

* Sucesso — seguido quando a operação terminar com sucesso.
* caso contrário — seguido quando a operação falhar ou nenhuma linha correspondente for encontrada.

## # Operações disponíveis

<figure><img src="/doc-images/h7qrHtlkNso81AJ56blt.png" alt="" width="375"><figcaption></figcaption></figure>

<table data-header-hidden><thead><tr><th valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><strong>Operação</strong></td><td valign="top"><strong>Objecto</strong></td></tr><tr><td valign="top">Vai-te embora.</td><td valign="top">Obtém uma ou mais linhas da tabela que correspondem às condições de Match especificadas. Uso típico: verifique se já existe um registro (por exemplo, um usuário por nome ou e-mail).</td></tr><tr><td valign="top">Inserir</td><td valign="top">Adiciona uma nova linha à tabela com os valores da coluna indicados, sem verificar as correspondências existentes.</td></tr><tr><td valign="top">atualizar</td><td valign="top">Modifica os valores das colunas das linhas existentes que correspondem às condições de Corresponder.</td></tr><tr><td valign="top">Sobremesa</td><td valign="top">Atualiza a linha correspondente se existir, ou insere uma nova linha se nenhuma correspondência for encontrada — útil para “criar ou atualizar” a lógica em um único passo.</td></tr><tr><td valign="top">Apagar</td><td valign="top">Remove as linhas que correspondem às condições de correspondência indicadas.</td></tr></tbody></table>## # Exemplo: procurar e inserir usuários

Um padrão comum combina um bloco Get com um bloco Inserir para evitar a criação de registros duplicados. Por exemplo, um fluxo pode:

<figure><img src="/doc-images/CWK4UkCMVU52k96sHfWd.png" alt=""><figcaption></figcaption></figure>1. Use um bloco de tabela de dados com Operação = Obter na tabela Usuários, combinando a coluna Nome (Equal) com um valor como o nome do visitante, e armazenar o resultado em dados\ table\ result.
2. No caminho do sucesso, envie uma mensagem de confirmação como “O usuário encontrou!” (opcionalmente oferecendo ações de acompanhamento).
3. Em paralelo ou como um backback, use um segundo bloco de Tabela de dados com Operação = Inserir na mesma tabela para adicionar uma nova linha (por exemplo, através de um botão "Adicionar usuário" no chat), armazenando o resultado na mesma ou uma variável de resultado diferente.
4. No caminho de sucesso do bloco Inserir, envie uma mensagem de confirmação como “User add!” para que o visitante saiba que o registro foi criado.

Em ambos os casos, o outro caminho pode ser conectado a uma mensagem de manipulação de erro, deixando o bot graciosamente informar o usuário (ou um agente) que a pesquisa ou inserção não teve sucesso.

Usando os resultados no fluxo

O(s) valor(s) atribuído(s) através de “Atribuir resultado a” torna-se uma variável de fluxo que pode ser reutilizada em qualquer lugar mais tarde no fluxo — por exemplo, inserida em uma mensagem com sintaxe curly-brace, usada dentro de um bloco de condição, ou passada para um bloco IA/agente como contexto. Da mesma forma, a variável “Atribuir erro” pode ser inspecionada no outro caminho para ramificar a conversa com base na falha específica.
