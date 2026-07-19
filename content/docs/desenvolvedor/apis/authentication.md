---
title: "Autenticação JWT"
description: "O provedor de autenticação JWT personalizado permite aos usuários autenticar com um sistema de autenticação independente do ChatCase. O sistema externo deve devolver um sinal JSON "
---

# # Autenticação personalizada

O provedor de autenticação JWT personalizado permite aos usuários autenticar com um sistema de autenticação independente do ChatCase. O sistema externo deve devolver um sinal [JSON Web Token](https://jwt.io/introduction/) que contém um valor ID único para o usuário autenticado.

O ChatCase usa o JWT para identificar os usuários da sua aplicação e autenticar seus pedidos, mas não impõe quaisquer restrições aos requisitos do sistema de autenticação externo ou aos métodos de autenticação.

Para criar um JWT Personalizado Token você deve gerar um Project Shared Secret como descrito abaixo.

> NOTA: Nós fornecemos um [ tutorial completo sobre autenticação personalizada](https://developer.chatcase.com/apis/authentication/jwt-auth-tutorial).

# # Gerando um projeto secreto compartilhado

Um Projeto Shared Secret é uma configuração de segurança, destinada a ser gerada, copiada e colada em uma comunicação com sua equipe de engenharia, ou diretamente em sua base de código, em uma única sessão. Não deve ser inserido em um navegador.

Para gerar o segredo compartilhado necessário para autenticação personalizada você precisa:

* Abra o **Dashboard** e vá para ** Nome do Projeto > Configurações do Projeto**.
* Vá para a aba **Autenticação de Visitantes** e clique no botão **Generate**.

![](https://user-images.githubusercontent.com/47848430/167668246-ea6eeebf-75d2-46a1-88ab-b6c8df02725d.png)

Nota:O segredo compartilhado é destinado a permanecer seguro. Como resultado, só aparecerá na íntegra uma vez. Se você não tiver acesso ao segredo compartilhado e precisar do segredo completo para criar seu token, você pode redefinir o segredo clicando no botão "Gerar". Regenerar um novo segredo compartilhado irá revogar o token anterior. Se você tem preocupações o segredo compartilhado foi comprometido, você deve regenerar um novo. Se você precisar girar as chaves, você deve agendar quando o Chat estiver offline porque regenerar o segredo faz com que os visitantes sejam desconectados do widget.

# # Criar um token JWT da telha

Para criar um token JWT você deve definir os seguintes campos obrigatórios do objeto usuário :

* **\ id** é o identificador de usuário único personalizado do sistema de autenticação externo. Deve começar com`<YOUR_PROJECT_ID>_`( exemplo: 5e5f4e220b28440012117be4\ 12345678 )
* **sub**. Os JWTs descrevem o seu assunto na alegação sub. Para o sub- campo de autenticação personalizado deve ser igual ao valor`userexternal`* **aud**. Os JWTs descrevem seu público na alegação de aud. Para autenticação personalizada deve ser`https://chatcase.com/projects/<YOUR_PROJECT_ID>`se usa a versão em nuvem do ChatCase ou se a instala no local.
* **email**. É o e-mail do usuário.

Campos opcionais:

* ** Primeiro nome**. É o primeiro nome do usuário
* ** lastname**. É o sobrenome do usuário
* **atributos** outras reivindicações personalizadas do jwt.

O sistema de autenticação externa deve **criar o JWT assinando o objeto do usuário com o código Project Shared Secret**.

Exemplo do objeto do usuário:

```
{"_id": "5e5f4e220b28440012117be4_12345678", "firstname":"Andrea", "lastname":"Leo", "email": "redacted@example.invalid",  "attributes": {"attribute1":"value"}, "sub":  "userexternal",  "aud":  "https://chatcase.com/projects/5c81593adf767b0017d1aa68"}
`$([Environment]::NewLine)
# # Gerar JWT Token Server Side

Encontre o modelo abaixo que se adapta às suas necessidades de idioma. Personalize a amostra conforme necessário, certificando-se de substituir o #{detalhes} por suas próprias informações.

Se nenhuma destas amostras corresponde às suas necessidades, o JWT tem uma lista mais extensa de [bibliotecas JWT](https://jwt.io/#libraries-io) para explorar.

# # NodeJS

Instalar [jsonwebtoken] (https://github.com/auth0/node-jsonwebtoken):

```
npm install jsonwebtoken --save-dev
`$([Environment]::NewLine)
Em seguida, gerar um token usando o segredo compartilhado:

```
var jwt = require('jsonwebtoken');
var payload = {
  _id: '#{customerIdentifier}',
  firstname: '#{customerFirstname}',
  lastname: '#{customerLastname}',
  email: '#{customerEmail}',
  sub: 'userexternal',
  aud: 'https://chatcase.com/projects/#{YOUR_PROJECT_ID}',
};
var token = jwt.sign(payload, '#{yourProjectSharedSecret}');
`$([Environment]::NewLine)
Você pode encontrar um exemplo personalizado de autenticação Jwt do NodeJs [aqui](https://github.com/ChatCase/chatcase-custom-jwt-authentication-example).

PHP

Baixar [PHP-JWT] (https://github.com/firebase/php-jwt):

```
composer require firebase/php-jwt
`$([Environment]::NewLine)
Gerar um token usando o segredo compartilhado:

```
$payload = {
  '_id' => '#{customerIdentifier}' ,
  'firstname' => '#{customerFirstname}',
  'lastname' => '#{customerLastname}',
  'email' => '#{customerEmail}',
  'sub' => 'userexternal',
  'aud' => 'https://chatcase.com/projects/#{YOUR_PROJECT_ID}'
};
$token = JWT::encode($payload, '#{yourProjectSharedSecret}');
```java

Autenticação com Java é coberta com um exemplo simples de Java (Maven) no repositório público [ChatCaseJavaJWTSign](https://github.com/ChatCase/ChatCaseJavaJWTSign)

Usamos a [biblioteca JWT] (https://github.com/jwtk/jjwt) para implementar a operação de sinal ChatCase JWT.

```
SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
long nowMillis = System.currentTimeMillis();
Date now = new Date(nowMillis);
byte[] apiKeySecretBytes;
apiKeySecretBytes = SECRET_KEY.getBytes();
Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
JwtBuilder builder = Jwts.builder().setId(id)
        .setIssuedAt(now)
        .setSubject(subject)
        .setIssuer(issuer)
        .claim("firstname", firstname)
        .claim("lastname", lastname)
        .claim("email", email)
        .signWith(signingKey, signatureAlgorithm);

return builder.compact();
`$([Environment]::NewLine)
Por favor, consulte o pedido acima mencionado para mais deátis.

# # Verificar o símbolo

Você pode verificar o token JWT usando [jwt.io](https://jwt.io/) seguindo estes passos:

1. Colar o código secreto
2. Colar o código jwt na coluna esquerda
3. Verifique o rótulo "Assinatura Verificada"

![imagem] (https://github.com/ChatCase/chatcase-docs/assets/9378770/3bb5e170-b017-4a33-9526-a01dbc21dd70)

# # Autenticação de Elementos

Veja [como configurar autenticação personalizada para o widget](/docs/desenvolvedor/widget/auth) usando o token JWT.
