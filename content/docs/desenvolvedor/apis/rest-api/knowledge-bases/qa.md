---
title: "Pergunta & Resposta"
description: "Permite consultar a base de conhecimento usando um modelo específico de IA."
---

Permite consultar a base de conhecimento usando um modelo específico de IA.

O modelo da Base de Conhecimento

Descrição
----------------- --------------------------------------------------------------------------------------------------------------------------------------------------------
O identificador único para a base de conhecimento que é dada pela ChatCase.
O nome da base do conhecimento.
projeto O identificador único do projeto
Preview\ settings As configurações para a pré-visualização da base de conhecimento
Default □ Boolean □ Especifica se a base de conhecimento é a base padrão
Hybrid . Boolean . Especifica se a base de conhecimento é híbrida. O padrão é falso (tipo padrão)
O motor do vetor é usado pela base de conhecimento. Um motor padrão é fornecido. □
Embutindo .Object . Indica quais embutimentos são usados para a pesquisa baseada em vectores. Está presente uma incorporação por omissão.

# # Pergunte à Base de Conhecimento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/qa`Permite consultar a base de conhecimento usando um modelo específico de IA.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

Pedir corpo

Nome , Tipo , Descrição
----------------- ----------------------------------------------------------------------------------------------------------------------------------------------------
Pergunta A questão apresentada é a seguinte :
□ espaço de nomes O id da Base de Conhecimento em que procurar a resposta
O LLM a usar para gerar a resposta (Por omissão: "openai")
O modelo a usar para gerar a resposta (por exemplo, gpt-4o)
Número O número máximo de fichas que podem ser consumidas para gerar a resposta
Temperatura .. Número ..Define criatividade na geração de respostas (baixos valores determinam respostas mais específicas e previsíveis) ..
Número O número de blocos próximos a usar para gerar a resposta
O motor é um objeto (Opcional) O objeto de configuração do motor a usar para o sistema de armazenamento vetorial se diferente do motor padrão .
Embutindo o objeto (Opcional) O objeto de incorporação a usar para a geração de incorporação, se diferente do motor padrão
.; sistema\ contexto; cadeia; (Opcional) O contexto a dar à IA para moldar seu comportamento na geração da resposta. □
(Optio)nal) Define o equilíbrio da pesquisa híbrida (0 = full-text focused, 1 = semântica/vector focused).
Os blocos\ somente o Booleano (Opcional) devolve apenas os blocos de texto recuperados sem gerar uma resposta final.
Fluxo de resposta (Opcional) Permite a transmissão em tempo real da resposta à medida que ela é gerada. □
Citações de texto (Opcional) Inclui referências de origem para o conteúdo recuperado ou gerado. □
Marcas de etiquetas Array (Opcional) Filtros ou categoriza os resultados com base em etiquetas associadas.
Rereinando o Booleano (Opcional) Aplica uma etapa de classificação secundária para melhorar a relevância dos resultados recuperados. □

{% tabs %}
{% tab title="200 " %}

```
{
    "answer": "To create an AI assistant using OpenAI, you can follow these steps:\n\n1. **Visit OpenAI**: Navigate to the OpenAI website.\n2. **Access the API Section**:\n   - Go to ‘Products’, then select ‘API’.\n   - Log in and select ‘API’.\n3. **Navigate to Assistant Creation**:\n   - Ensure you are on the Dashboard.\n   - Click on ‘Assistant’ from the left sidebar menu.\n4. **Create the Assistant**:\n   - Click the green ‘Create’ button in the top right corner.\n   - Name your assistant and provide context in the ‘Instructions’ section to fine-tune its responses.\n5. **Select the Model**:\n   - For this example, you can use GPT-4o.\n6. **Handle File Formats**:\n   - If uploading a CSV file, use a Code interpreter.\n   - For PDF or text files, use the File Search feature.\n7. **Integrate with ChatCase**:\n   - Copy the assistant ID.\n   - Go to the ChatCase dashboard, click on the block where the ChatGPT Assistant is placed.\n   - In the right-side menu, paste the assistant ID into the “Assign GPT Assistant” field.\n\nIf you need",
    "success": true,
    "namespace": "66a897133eaa7f0013632c5b",
    "id": "66b6268722af86ab6a739cb6",
    "ids": [
        "66b6268722af86ab6a739cb6"
    ],
    "source": "https://gethelp.chatcase.com/articles/create-an-ai-assistant-in-openai/",
    "sources": [
        "https://gethelp.chatcase.com/articles/create-an-ai-assistant-in-openai/"
    ],
    "content_chunks": null,
    "prompt_token_size": 1185,
    "error_message": null,
    "chat_history_dict": {
        "0": {
            "question": "how can i create an AI assistant?",
            "answer": "To create an AI assistant using OpenAI, you can follow these steps:\n\n1. **Visit OpenAI**: Navigate to the OpenAI website.\n2. **Access the API Section**:\n   - Go to ‘Products’, then select ‘API’.\n   - Log in and select ‘API’.\n3. **Navigate to Assistant Creation**:\n   - Ensure you are on the Dashboard.\n   - Click on ‘Assistant’ from the left sidebar menu.\n4. **Create the Assistant**:\n   - Click the green ‘Create’ button in the top right corner.\n   - Name your assistant and provide context in the ‘Instructions’ section to fine-tune its responses.\n5. **Select the Model**:\n   - For this example, you can use GPT-4o.\n6. **Handle File Formats**:\n   - If uploading a CSV file, use a Code interpreter.\n   - For PDF or text files, use the File Search feature.\n7. **Integrate with ChatCase**:\n   - Copy the assistant ID.\n   - Go to the ChatCase dashboard, click on the block where the ChatGPT Assistant is placed.\n   - In the right-side menu, paste the assistant ID into the “Assign GPT Assistant” field.\n\nIf you need"
        }
    }
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password -d {"question":"how can i create an AI assistant?","namespace":"66a897133eaa7f0013632c5b","model":"gpt-4o","temperature":0.7,"max_tokens":256,"top_k":4,"system_context":null} https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/qa
```

***
