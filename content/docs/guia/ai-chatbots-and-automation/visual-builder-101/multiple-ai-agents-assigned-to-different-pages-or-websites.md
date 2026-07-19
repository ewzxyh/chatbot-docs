---
title: "Vários agentes de IA atribuídos a diferentes páginas ou sites"
description: "Forçar o widget ChatCase a iniciar a partir de um Agente de IA específico usando um ID de Departamento."
---

Forçar o widget ChatCase a iniciar a partir de um Agente de IA específico usando um ID de Departamento.

Por padrão, o widget carrega usando apenas o`projectid`. Se o seu projeto contém vários agentes de IA, você pode forçar o widget a começar a partir de um específico, definindo o`departmentID`do Departamento ligado ao agente da IA.

<figure><img src="/doc-images/rHyYtcy3d0wSYcskNL1Q.png" alt=""><figcaption></figcaption></figure>* Mesmo site: use diferentes agentes de IA em diferentes landing pages (mesmo ID do projeto, diferentes IDs do departamento).
* Sites diferentes: usar diferentes agentes de IA e projetos diferentes (diferentes IDs de projeto e IDs de departamento).

# # Passos

{% stepper %}
{% step %}Criar um Departamento para o Agente de IA

* Ir para **Configurações → Roteamento e Departamentos**.
* Criar um novo Departamento e conectá-lo ao Agente de IA que você quer como a experiência padrão.
* Copie o ID do Departamento ** gerado pelo ChatCase.

<figure><img src="/doc-images/aHV7udLgOta4QhDmjYZC.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}## # Esconder o Departamento (opcional)

Se você quiser que o AI Agent comece em segundo plano sem mostrar esse Departamento no seletor de widgets:

* Na lista de Departamentos, clique no botão azul ** Tornar invisível**.
* O Departamento será escondido do menu widget, mas ainda funcionará quando usado no trecho de instalação.
{% endstep %}

{% step %}### Instale o widget com projetid e departmentID

Adicione este trecho nas páginas onde você deseja que um Agente de IA específico seja o padrão. Substituir`YOUR_PROJECT_ID`e`YOUR_DEPARTMENT_ID`com os seus valores.

{% code title="widget snippet" %}

```html
<script type="application/javascript">
  window.chatcaseSettings = {
    projectid: "YOUR_PROJECT_ID",
    departmentID: "YOUR_DEPARTMENT_ID"
  };
  (function(d, s, id) {
    var w = window;
    var d = document;
    var i = function() { i.c(arguments); };
    i.q = [];
    i.c = function(args) { i.q.push(args); };
    w.ChatCase = i;
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = "https://widget.chatcase.com/v6/launch.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, "script", "chatcase-jssdk"));
</script>
```

{% endcode %}Importante: Em uma única página, carregue apenas um trecho do widget ChatCase para evitar conflitos.
{% endstep %}
{% endstepper %}# # Cenários comuns

Cenário A: Agentes de IA diferentes em diferentes landing pages (mesmo site)

* Mantenha o mesmo`YOUR_PROJECT_ID`.
* Use um diferente`YOUR_DEPARTMENT_ID`em cada landing page.
* Resultado: cada página abre uma jornada AI Agent diferente.

Cenário B: Agentes de IA diferentes em sites diferentes

* Use o correto`YOUR_PROJECT_ID`para cada site (cada site pode ter seu próprio Projeto).
* Definir os relacionados`YOUR_DEPARTMENT_ID`para o Agente de IA que você quer como padrão nesse site.
* Resultado: cada site pode ter seu próprio agente de IA padrão e configuração.

# # Abordagens alternativas

Opção 1: Activar os Departamentos Desactivados

Se os Departamentos ligados aos seus Agentes de IA estiverem desactivados, o elemento poderá não ser capaz de iniciar a conversa a partir de uma`departmentID`. Neste caso, habilitar os departamentos que você deseja usar e, em seguida, continuar usando o`departmentID`no trecho.

Nota: Se você habilitar mais de um Departamento, em páginas onde você não especifica`departmentID`o widget pode mostrar uma etapa de seleção do Departamento, porque vários Departamentos ativos estão disponíveis.

Opção 2: Usar`participants`em vez de`departmentID`Se preferir não utilizar`departmentID`, você pode iniciar o chat com um bot específico usando o`participants`parâmetro. Define- o em`bot_<BOT_ID>`.

{% code title="participants example" %}

```javascript
window.chatcaseSettings = {
  projectid: "YOUR_PROJECT_ID",
  participants: "bot_YOUR_BOT_ID"
};
```

{% endcode %}Nota crucial para a Opção 2: Com`participants`, a conversa ainda é atribuída ao Departamento padrão, mas é gerenciada diretamente pelo bot selecionado.

# # Notas e limitações

* Design de widget (cor, logotipo, estilo lançador) é compartilhado dentro do mesmo Projeto. Se você precisar de desenhos de widget diferentes, use Projetos diferentes.
* Se você esconder um Departamento usando ** Tornar invisível**, os usuários não vão vê-lo no menu widget, mas o widget ainda pode começar a partir dele via`departmentID`.

você precisa de ajuda? [Contact the ChatCase team] (mailto:redacted@example.invalid).
