---
title: "Condição JSON"
description: "A ação da Condição JSON é o ponto de decisão do seu chatbot. Ele analisa o valor de um ou mais atributos (dados coletados durante a conversação, retornados por uma API, produzidos "
---

# # Ação da Condição JSON

A ação da Condição JSON é o ponto de decisão ** do seu chatbot. Ele analisa o valor de um ou mais atributos (dados coletados durante a conversação, retornados por uma API, produzidos pela IA, etc.) e encaminha o fluxo para baixo de um de dois ramos: **MATCH** quando as condições são cumpridas, ou **Else** quando não são. Pense nisso como o *if / then / else* de sua automação: ele permite que você personalize a experiência, valide a entrada do usuário, branch em uma linguagem, uma pontuação, o comprimento de um array, e muito mais — tudo sem escrever código.

Como todas as ações, o JSON Condition tem duas visualizações:

* **Previsão da ação** — o cartão compacto que você vê na tela, que resume as condições e mostra os dois conectores de saída (o ramo verde **true** e o ramo **Else**).
* ** Editor de ação** — o painel que abre quando você clica na ação, onde você constrói as condições.

<figure><img src="/files/LtrFjFpFcjyPoHAMXcgu" alt=""><figcaption></figcaption></figure>***

Como funciona

1. Adicione a ação **JSON Condition** a um bloco.
2. Construa uma ou mais condições no editor (veja abaixo).
3. Conecte a saída **MATCH** ao bloco que deve ser executado quando as condições são **true**.
4. Conecte a saída **Else** ao bloco que deve ser executado quando eles são **false**.

Em tempo de execução, o chatbot avalia as condições:

* se o resultado for ** verdadeiro** → segue o ramo ** MATCH**;
* se o resultado for **false** → segue o ramo **Else**.

***

Construindo uma condição

Cada condição é feita de três partes, mostradas no editor como **Nome do atributo**, **Condição**, e **Value**.

> *Screenshot: o editor "Atributo Personalizado" com os campos Nome do atributo, Condição e Valor.*

<figure><img src="/files/XO6jC9d4Lx3pmpBWX7JS" alt=""><figcaption></figcaption></figure># # # # 1. Nome do atributo

Este é o ** lado esquerdo** da comparação — o atributo cujo valor você deseja verificar. Você pode:

* ** digite-o** diretamente, ou
* ** escolha-o** da lista de atributos usando o`{ }`botão (ele insere o atributo para você), em seguida, editá-lo livremente.

Clique no ícone **i** ao lado de *Nome do atributo* para um lembrete rápido da sintaxe. Você pode referenciar atributos simples, propriedades aninhadas e elementos de array:

Você escreve Significa
----------------------------------------------------------------------------
□`email`Um atributo simples
□`user.name`Uma propriedade aninhada
□`people[0]`O primeiro elemento** de um array
□`people[0].name`*nome* do primeiro elemento de um array
□`kb_json_sources[2].id`Propriedades aninhadas e índices de array combinados

> **Nota** — escreva o atributo **sem ** o`{{ }}`aparelho aqui: apenas`user.name`, não`{{user.name}}`.

#### 2. Condição

Este é o **operador** — *como * você deseja comparar o atributo. Os operadores são agrupados pelo **tipo de dados** que você está trabalhando com (Existência, Texto, Número, Booleano, Data & Hora, Array), para que você possa escolher a comparação certa para o valor em questão.

Há ** nenhum operador padrão**: quando você abre uma nova condição o campo está vazio e você deve escolher um. Veja a referência completa de Operadores abaixo.

> **Dica** — o mesmo valor pode ser comparado de maneiras diferentes. Para um número de blocos, * “é igual a (número)”* compara-o como um número (`5 == 5`), enquanto *“é igual a (texto)”* compara-o como texto (`"5" == "5"`). Escolha o operador cujo tipo corresponde à sua intenção.

# # # # 3. Valor

Este é o ** lado direito** da comparação. Dependendo do operador você pode:

* digite um valor fixo** (uma constante) — por exemplo.`Roma`, `18`, `2026-01-01`; ou
* clique no`{ }`botão para comparar com ** outro atributo** (uma variável), por exemplo, comparar`user.city`com`user.preferredCity`.

Alguns operadores são **unário** — eles não precisam de um valor (por exemplo * está vazio*, * existe*, * é verdadeiro*). Para aqueles o campo **Value** é escondido automaticamente.

Quando a condição estiver completa, pressione **Aplicar Condição**. O botão permanece desativado até que você tenha escolhido um atributo, um operador e (quando necessário) um valor.

***

Condições de combinação

Uma única condição JSON pode avaliar **muitas condições juntas.

E/ou dentro de um grupo

Adicione mais linhas para combinar as condições com o conector **AND** / **OR** que aparece entre elas:

* ** AND** → * todas* as condições associadas devem ser verdadeiras.
* **OR** → * pelo menos um* deve ser verdade.

Precedência padrão aplica-se: **AND liga-se mais apertado do que OR**, então`A AND B OR C`é lido como`(A AND B) OR C`.

Grupos de condições

Use ** Adicionar o grupo de condições** para criar grupos separados. Cada grupo é avaliado como uma unidade e os grupos são combinados com seu próprio conector AND / OR — isso permite que você expresse lógica como:

```
(country == "IT" AND age >= 18)  OR  (vip == true)
`$([Environment]::NewLine)
***

## # Referência dos operadores

Abaixo estão todos os operadores disponíveis, agrupados por tipo de dados, com um exemplo concreto.`x`é o atributo (lado esquerdo), os valores nas citações são texto, números nus são números.

Existência (sem valor necessário)

O operador significa que o exemplo
- O quê? ------------------------------------------------------------------- -----------------------
Existe o atributo (mesmo que vazio/null)`email`existe
O atributo não existe`coupon`não existe
□ é uma string vazia, um array/object vazio ou null/undefined`cart`está vazio □
Não está vazio , tem algum conteúdo ,`cart`não está vazio
O valor é exatamente`null`                         | `middleName`é nulo □
O valor é exatamente`undefined`                    | `nickname`não está definido

### # Texto (comparado como texto, sensível a maiúsculas)

□ Operador
---------------------- -------------------- ------------------------------------------------------
* é igual a (texto) *`user.city == "Roma"`□
Não é igual a (texto)`user.city != "Roma"`□
* contém *`message`contém`"invoice"`□
Não contém`message`não contém`"invoice"`□
Começar com`lang`começa com`"it"`□
Não começa com ,`lang`não inicia com`"it"`□
Termina com`file`termina com`".pdf"`□
Não termina com`file`não termina com`".pdf"`□
* corresponde ao regex *`email`corresponde`"^.+@.+$"`□
Não corresponde ao regex`email`não corresponde`"^.+@.+$"`□

Número (comparado como números)

□ Operador
-------------------------------------------------------------
* é igual a (número) *`kb_chunks == 5`□
* não é igual a (número) *`count != 0`□
É maior que`age > 18`□
* é maior ou igual a *`age >= 18`□
* é menor que *`score < 100`□
* é menor ou igual a *`score <= 100`□

Booleano (sem valor necessário)

□ Operador
---------- -------------------
É verdade.`consent`é verdade
É falso`consent`é falso

Data e hora (valor = data, por exemplo.`2026-01-01`)

□ Operador
------------------------ -------------------------------------------------
* é igual a (data) *`createdAt`é igual a`2026-06-15`□
Não é igual a (data)`createdAt`não é igual a`2026-06-15`□
É depois`createdAt`é após`2026-01-01`□
É antes`createdAt`é anterior`2026-01-01`□
□ é depois ou igual a`createdAt`é depois ou igual a`2026-01-01`□
* é antes ou igual a *`createdAt`é anterior ou igual a`2026-01-01`□

Array

O operador significa que o exemplo
----------------------------------------------------------------- --------------
o array contém o elemento`tags`contém`"vip"`□
o array não contém o elemento`tags`não contém`"vip"`□
Comprimento igual a número de elementos`people`comprimento igual a`0`□
O comprimento não é igual ao número de elementos!= valor .`people`comprimento não igual a`0`□
comprimento maior do que mais do que elementos N`people`comprimento superior a`0`□
comprimento menor do que`people`comprimento inferior a`3`□
O comprimento é maior ou igual a pelo menos N elementos`people`comprimento maior ou igual a`1`□
Comprimento inferior ou igual a , no máximo, N elementos ,`people`comprimento inferior ou igual a`5`□

***

## # Exemplos concretos

Exemplo 1 — Rota por idioma

Envie usuários italianos para um fluxo dedicado.

1. **Nome do atributo**:`lang`2. **Condição**: *começa com *
3. **Valor**:`it`4. Conecte **MATCH** → Bloco de boas-vindas italiano, ** Else** → Bloco de boas-vindas padrão.

Exemplo 2 — Verifique os resultados da base de conhecimentos

Branch dependendo se o IA recuperou algum pedaço.

1. **Nome do atributo**:`kb_chunks`2. **Condição**: * é maior que * (número)
3. **Valor**:`0`4. **MATCH** → resposta de KB, ** Else** → retorno “Eu não consegui encontrar nada” mensagem.

Exemplo 3 — Validar entrada é um adulto

1. **Nome do atributo**:`user.age`2. **Condição**: * é maior ou igual a * (número)
3. **Valor**:`18`4. **MATCH** → continue, **Else** → “Desculpe, você deve ter 18 anos ou mais”.

Exemplo 4 — O array tem pelo menos um elemento

Útil logo após uma chamada API que retorna uma lista.

1. **Nome do atributo**:`results`2. **Condição**: *comprimento maior que *
3. **Valor**:`0`4. **MATCH** → mostrar resultados, **Else** → “Nenhum resultado encontrado”.

Exemplo 5 — Campo obrigatório preenchido

1. **Nome do atributo**:`user.email`2. **Condição**: * não está vazio* (sem valor necessário)
3. ** MATCH** → continue, ** Else** → peça o email novamente.

Exemplo 6 — Condições múltiplas com grupos

Cumprimente VIPs, ou adultos da Itália:

* ** Grupo 1**:`country`* é igual a (texto)*`IT`** AND**`age`* é maior ou igual a (número)*`18`* **OR**
* **Grupo 2**:`vip`* É verdade *

```
(country == "IT" AND age >= 18) OR (vip == true)
`$([Environment]::NewLine)
Exemplo 7 — Compare dois atributos

Verifique se a cidade confirmada corresponde à escolhida (o lado direito é uma variável, não um texto fixo).

1. **Nome do atributo**:`user.city`2. **Condição**: * é igual a (texto)*
3. **Valor**: clique`{ }`e escolher`user.preferredCity`4. **MATCH** → prossiga, **Else** → peça ao usuário para confirmar.

***

## # Como as condições são avaliadas

Algumas regras valem a pena saber, para que as suas condições se comportem como esperado:

* ** Questões de tipo. O operador decide como os dois lados são comparados. * "é igual a (número)" * compara números (`"11"`e`11`são iguais), enquanto * “é igual a (texto)”* compara texto (`"11"`e`11`são iguais ao texto`"11"`). Escolha o operador que corresponde ao tipo de dados que deseja.
* ** Comparações de texto são sensíveis a casos.**`"Roma"`é diferente de`"roma"`. (Older *ignore-case* operadores foram removidos; chatbots legados que os usaram agora comportam-se como o equivalente sensível a casos.)
* **Uma comparação falhada nunca é um erro.** Se um atributo está faltando ou um valor não pode ser convertido para o tipo esperado, essa condição única é simplesmente tratada como **false** — o chatbot não vai falhar e seguirá o branch **Else**.

***

Notas

* O campo **Condição** não tem valor predefinido: você sempre escolhe o operador explicitamente.
* Escreva nomes de atributos **sem**`{{ }}`chaves no campo *Atribute name*.
* O lado direito **Value** pode ser um valor fixo ou outro atributo`{ }`botão).
* Precisa de ajuda com a sintaxe? Use o ícone **i** ao lado de *Nome do atributo*.

***
