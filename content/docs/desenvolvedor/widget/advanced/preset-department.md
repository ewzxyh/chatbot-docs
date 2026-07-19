---
title: "Predefinição do Widget em um Departamento específico"
description: "Os departamentos são muito úteis para separar as ações de apoio em “domínios” de competências."
---

Os departamentos são muito úteis para separar as ações de apoio em “domínios” de competências.

Este domínio pode ser servido por humanos, chatbots ou pode ser servido de forma híbrida, misturando chatbots com humanos handoff.

ChatCase tem uma maneira muito fácil de lidar com departamentos.

Basta entrar na seção Departamentos, criar seus próprios departamentos, configurar esses departamentos para ser servido por chatbots, humanos ou forma híbrida:

[deps-705x371] (https://user-images.githubusercontent.com/9378770/92229538-f2495f80-eea9-11ea-9331-33dc8a8f6c3d.png)

Agora simplesmente abra o widget na página de teste e os departamentos são mostrados aos convidados do seu site cada vez que eles vão começar uma nova conversa:

[widgt-438x705] (https://user-images.githubusercontent.com/9378770/92229579-ff664e80-eea9-11ea-9c2f-d797cc7d2d7b.png)

# # O problema

Mas, se você incorporar o widget em sua página "pricing", você provavelmente não quer que todas as novas conversas na página para ser restringido escolher um departamento diferente pelo "Pricing" um.

# # Solução

Neste caso, para pular a seleção de departamentos, você pode simplesmente modificar ligeiramente o código do widget na página, definindo o ID do departamento sobre o qual o widget deve iniciar a nova conversa. Basta adicionar esta linha de código:

```
departmentID: 'ID-OF-DEPARTMENT'
`$([Environment]::NewLine)
Na posição mostrada pela seguinte figura:

[Snippet-dep-450x165] (https://user-images.githubusercontent.com/9378770/92229706-2de42980-eeaa-11ea-8166-62a838cd4c5e.png)

Você sempre pode encontrar o id de departamento na url da visão “Modificar Departamento”, como mostrado na seguinte imagem:

[edit-dep-705x304] (https://user-images.githubusercontent.com/9378770/92229729-363c6480-eeaa-11ea-9709-26a6b14a7c51.png)

Se o widget encontrar este conjunto de propriedades, ele sempre irá pular a visão de seleção do Departamento, movendo o usuário diretamente para uma conversa no departamento predefinido.
