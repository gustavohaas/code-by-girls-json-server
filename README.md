# API Fake

FAKE API utilizada na aplicação Code by Girls.

## Endpoints

Existem 8 endpoints:

### Cadastro
<br/>
Parte da API responsável pelo cadastro do usuário.<br/>
<br/>
POST /signup <br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "email": "seu email",<br/>
    "password": "sua senha"<br/>
    "name": "seu nome"<br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "accessToken": "Seu Token",<br/>
    "user": {
    "email": "Seu email",
    "id": SeuID
  }<br/>
}<br/>
<br/>

### Login
<br/>
Parte da API responsável por efetuar o login. <br/>
<br/>
POST /login<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "email": "seu email",<br/>
    "password": "sua senha"<br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "accessToken": "Seu Token",<br/>
    "user": { <br/>
    "email": "Seu email", <br/>
    "id": SeuID <br/>
  }<br/>
}<br/>
<br/>

### Perfil
<br/>
Parte da API responsável pelo manejo do perfil do usuário. </br>
<br/>
POST /perfil<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": seuId, <br/>
	  "name": "Seu nome", <br/>
	  "age": SuaIdade, <br/>
	  "country": "Seu país" <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": seuId, <br/>
	  "name": "Seu nome", <br/>
	  "age": SuaIdade, <br/>
	  "country": "Seu país" <br/>
    "id": IdPerfil <br/>
}<br/>
<br />

### User
<br/>
Parte da API responsável pelo acesso à dados do usuário. </br>
<br/>
GET /users/{UserId}?_embed=perfil&_embed=skills&_embed=works<br/>
<br/>
Resposta:<br/>
{<br/>
    "email": "Seu Email", <br/>
    "password": "Sua senha criptografada", <br/>
    "name": "Seu nome", <br/>
    "id": Id do seu perfil, <br/>
    "perfil": [ Dados do perfil ], <br/>
    "skills": [ Dados das skills ], <br/>
    "works": [ Dados dos works ] <br/>
}<br/>
<br/>

### Skills
<br/>
Parte da API responsável pelo cadastro de skills do usuário. </br>
<br/>
POST /skills<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "skill": "Título da skill", <br/> 
	  "level": "Nível/Conhecimento sobre a skill" <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "skill": "Título da skill", <br/> 
	  "level": "Nível/Conhecimento sobre a skill" <br/>
    "id": Id da skill <br/>
}<br/>
<br />

### Works
<br/>
Parte da API responsável pelo cadastro de works do usuário. </br>
<br/>
POST /works<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "title": "Título do work", <br/> 
	  "description": "Descrição do work" <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "title": "Título do work", <br/> 
	  "description": "Descrição do work" <br/>
    "id": Id do work <br/>
}<br/>
<br />

### Groups
<br/>
Parte da API responsável pelo cadastro e manejo de grupos do usuário. </br>
<br/>
POST /groups<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "groupName": "Nome do grupo", <br/> 
	  "description": "Descrição do grupo" <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "groupName": "Nome do grupo", <br/> 
	  "description": "Descrição do grupo" <br/>
    "id": Id do grupo <br/>
}<br/>
<br />
GET /groups/{ GroupId }?_embed=subscribe&_embed=comments<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": ID do usuário,
    "groupName": "Nome do grupo",
    "description": "Descrição do grupo",
    "id": ID do grupo,
    "subscribe": [ ID e nome dos inscritos do grupo ],
    "comments": [ Comentários do grupo ]
}<br/>
<br/>

### Subscribe
<br/>
Parte da API responsável pela inscrição de um usuário em um grupo. </br>
<br/>
POST /subscribe<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "name": "Nome do usuário", <br/> 
	  "groupId": Id do grupo <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "name": "Nome do usuário", <br/> 
	  "groupId": Id do grupo <br/>
    "id": Id da inscrição <br/>
}<br/>
<br />

### Comments
<br/>
Parte da API responsável pela criação de um comentário de um usuário em um grupo. </br>
<br/>
POST /comments<br/>
<br/>
Que deve ser utilizado no formato: <br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "name": "Nome do usuário",
    "comment": "Comentário do usuário" <br/> 
	  "groupId": Id do grupo <br/>
}<br/>
<br/>
Resposta:<br/>
{<br/>
    "userId": Id do usuário, <br/>
	  "name": "Nome do usuário",
    "comment": "Comentário do usuário" <br/> 
	  "groupId": Id do grupo <br/>
    "id": Id do comentário <br/>
}<br/>
<br />
