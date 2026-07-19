---
title: "Atribuição de grupo e balanceamento de carga"
description: " Como funciona"
---

** Como funciona**

* Cada departamento pode ter um ou mais grupos atribuídos.
* Quando um usuário seleciona um departamento no widget de chat ao vivo (por exemplo, *Vendas* ou *Suporte*), conversas serão encaminhadas para os grupos associados com esse departamento.
* Dentro de cada grupo, as conversas são distribuídas aos membros usando o método **Round Robin**.
* Além de Round Robin, você também pode definir uma **porcentagem de distribuição de carga** para cada grupo.

** Distribuição de carga **

* O percentual de distribuição de carga determina quantas conversas cada grupo receberá em relação aos outros no mesmo departamento.
* Exemplo: Se * Grupo A* é atribuído 40% e * Grupo B* é atribuído 60%, conversas serão distribuídas em ordem Round Robin, mas respeitando a relação configurada.

**Configuração**\
Como primeiro passo, deve atribuir percentagens de distribuição de carga aos grupos através da API ou através da UI&#x20;

** API **`curl`:&#x20;

```
curl -L -X PUT 'https://example.com/api/{project_id}/departments/{department_id}' \
-H 'Authorization: {JWT_token}' \
-H 'Content-Type: application/json' \
-d '{
    "groups": [
        {
            "group_id": "{id_group}",
            "percentage": 20
        },
        {
            "group_id": "{id_group}",
            "percentage": 80
        }
    ]
}'
`$([Environment]::NewLine)
**UI** Atribuir percentagens de distribuição de carga aos grupos através da IU

* Navegar para a página **Departamentos** (**Configurações > Roteamento & Departamentos**);
* Selecione um Departamento
* Atribuir grupos ao departamento
* Clique no botão **Editar distribuição de carga** para definir a porcentagem de carga para cada grupo.
* ** atualizar o departamento** para tornar as alterações eficazes

<figure><img src="/files/gZWv2XsWeqXVNZwvu7gS" alt=""><figcaption></figcaption></figure>Após a configuração inicial, as percentagens do grupo poderão ser modificadas a qualquer momento &# x20;

1. Navegue para a página **Departamentos** (**Configurações > Roteamento & Departamentos**);
2. Selecione o Departamento que você configurou para balanceamento de carga;
3. Clique no botão **Editar distribuição de carga**.<br>

<figure><img src="/files/nHbXblWqamEOcCLpKwTz" alt=""><figcaption></figcaption></figure>na janela **Editar distribuição de carga** alterar os valores percentuais e Salvar.

<figure><img src="/files/nD5wX0ld5WTAiBxMX99o" alt=""><figcaption></figcaption></figure>Na lista de grupos você verá os valores percentuais atualizados. Como último passo, lembre-se de atualizar o Departamento

<figure><img src="/files/bSACtZeP08LyrThxGrLa" alt=""><figcaption></figcaption></figure>
