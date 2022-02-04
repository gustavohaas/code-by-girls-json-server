# &lt;code-by-girls&sol;&gt;  

FAKE API utilizada na aplicação **CodebyGirls**.    

## Endpoints    

Há 11 endpoints:   

1. /register   
2. /signup  
3. /signin  
4. /login  
5. /users  
6. /perfil  
7. /skills  
8. /works  
9. /groups  
10. /comments  
11. /subscribe  

### *CADASTRO*  

Parte da API responsável pelo cadastro do usuário. Dispõe de 3 endpoints:  

1. /users  
2. /signup  
3. /register  

Qualquer 1 dos 3.  
   
**POST /signup - Formato da Requisição**    
```js    
{  
	"name": "Kate Austen",  
	"email": "austenkate@lost.com",  
	"password": "wW*8uuuu"  
}  
```    
Em caso de sucesso, esta será a resposta:  

**POST /signup - Formato da Resposta - Status 201**  
```js    
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1c3RlbmthdGVAbG9zdC5jb20iLCJpYXQiOjE2NDM5MTk3MzQsImV4cCI6MTY0MzkyMzMzNCwic3ViIjoiNCJ9.5foxCJqqu1wYIpfTW6kcoL_kuDTnA8jdyL6LSnMepzM",  
	"user": {  
		"email": "austenkate@lost.com",  
		"name": "Kate Austen",  
		"id": 4  
	}  
}  
```   
Caso o e-mail já esteja cadastrado, a resposta será:  
**Formato da Resposta - Status 400**    
```js    
"Email already exists"  
```  

### *LOGIN*  

Parte da API responsável por efetuar o login. Dispõe de 2 endpoints:  

1. /login  
2. /signin  

Qualquer 1 dos 2.  

**POST /signin - Formato da Requisição**  

```js    
{  
	"email": "austenkate@lost.com",  
	"password": "wW*8uuuu"  
}  
```   
Em caso de sucesso, a resposta será:  
**POST /signin - Formato da Resposta - STATUS 200**  

```js   
{  
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1c3RlbmthdGVAbG9zdC5jb20iLCJpYXQiOjE2NDM5MjA1MjUsImV4cCI6MTY0MzkyNDEyNSwic3ViIjoiNCJ9.e_T_4RT_82GW5xbbQYQD0lZKvmzKg4ADeWe9r90xrZs",  
	"user": {  
		"email": "austenkate@lost.com",  
		"name": "Kate Austen",  
		"id": 4  
	}  
}  
```    

Repare que a resposta retorna **user** e **accessToken**. Posso armazenar ambos no localStorage para fazer a gestão do usuário no front end.  

* Caso a senha estiver errada:   
```js  
"Incorrect password"  
```  
* Caso email estiver errado ou email e password estiverem errados:    

**POST /login - Formato da resposta - STATUS 400**    
```js  
"Cannot find user"    
```  

### *PERFIL*  

Parte da API responsável pelo manejo do perfil do usuário.   

*Com autenticação (token) no cabeçalho da requisição*   
**GET /perfil${userId} - Formato da Requisição**  
```js   
{  
	"userId": "4",  
	"name": "Kate Austen",  
	"age": 32,  
	"country": "New Zealand"  
}  
```  

**POST /perfil - Formato da Resposta - Status 201**  
```js    
{  
	"userId": "4",  
	"name": "Kate Austen",  
	"age": 32,  
	"country": "New Zealand",  
	"id": 2  
}  
```    

### *USERS*  

Parte da API responsável pelo acesso a dados do usuário.  

*Com autenticação (token) no cabeçalho da requisição*    

**GET /users${userId} - Formato da Resposta - Status 200**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "$2a$10$A8yKyQldkug.PaXiqWCupefox8GY1R/LheJSfnwsUE0RV4Wc8SvWa",  
	"name": "Kate Austen",  
	"id": 4  
}  
```  

### *SKILLS*  

Parte da API responsável pelo cadastro de skills (habilidades ou tecnologias) do usuário.   

*Com autenticação (token) no cabeçalho da requisição*    
**POST /skills - Formato da Requisição**  
```js   
{  
	"userId": "4",  
	"skill": "React",  
	"level": "Iniciante"  
}    
```   

Caso não insira o userId no corpo da requisição, a resposta será:  
```js   
"Private resource creation: request body must have a reference to the owner id"  
```   

Em caso de sucesso:  

**POST /skills - Formato da Resposta - Status 201**  
```js  
{  
	"userId": "4",  
	"skill": "React",  
	"level": "Iniciante",  
	"id": 4  
}  
```  

### *WORKS*  

Parte da API responsável pelo cadastro de works do usuário.   

*Com autenticação (token) no cabeçalho da requisição*    
**POST /works - Formato da Requisição**  

Que deve ser utilizado no formato:  
```js     
{  
	"userId": "4",  
	"title": "Capstone - Code by Girls",  
	"description": "Trabalho de encerramento do Q2"  
}  
```    

**POST /works - Formato da Resposta - Status 201**  
```js   
{  
	"userId": "4",  
	"title": "Capstone - Code by Girls",  
	"description": "Trabalho de encerramento do Q2",  
	"id": 2  
}  
```   

### *GROUPS*  

Parte da API responsável pelo cadastro e manejo de grupos do usuário.   

*Com autenticação (token) no cabeçalho da requisição*   
**POST /groups - Formato da Requisição**  
```js    
{  
	"groupName": "Garbage",  
	"description": "Grupo estadunidense formado na cidade de Madison, em 1994"  
}  
```  
**POST /groups - Formato da Resposta - Status 201**  
```js  
{  
	"groupName": "Garbage",  
	"description": "Grupo estadunidense formado na cidade de Madison, em 1994",  
	"id": 2  
}  
```  

Outros dois parâmetros que podemos utilizar e que são muito interessantes são o _embed e o _expand, esses dois parâmetros são utilizados para trazer as informações das outras tabelas relacionadas a elas. O _embed traz as informações das tabelas "filhas" da qual você está buscando informação. Sem o _embed, a requisição em /groups retorna a resposta acima.   

Com o _embed para 1 tabela filha (subscribe, no exmplo abaixo), retorna isto:  

*Com autenticação (token) no cabeçalho da requisição*    
**GET /groups?_embed=subscribe - Formato da Requisição**  

**GET /groups?_embed=subscribe - Formato da Resposta - Status 200**  
```js    
[  
	{  
		"userId": 2,  
		"groupName": "teste",  
		"description": "Teste teste",  
		"id": 1,  
		"subscribe": [  
			{  
				"userId": 1,  
				"groupId": 1,  
				"id": 1  
			},  
			{  
				"userId": 2,  
				"groupId": 1,  
				"id": 2  
			}  
		]  
	},  
	{
		"groupName": "Garbage",  
		"description": "Grupo estadunidense formado na cidade de Madison, em 1994",  
		"id": 2,  
		"subscribe": []  
	}  
]  
```  

Com o _embed para mais de 1 tabela filha, retorna isto:  
*Com autenticação (token) no cabeçalho da requisição*    
**GET /groups?_embed=subscribe&_embed=skills - Formato da Requisição**  

**GET /groups?_embed=subscribe&_embed=skills - Formato da Resposta - Status 200**  
```js  
[  
	{  
		"userId": 2,  
		"groupName": "teste",  
		"description": "Teste teste",  
		"id": 1,  
		"subscribe": [  
			{    
				"userId": 1,    
				"groupId": 1,  
				"id": 1  
			},  
			{  
				"userId": 2,  
				"groupId": 1,  
				"id": 2  
			}  
		],  
		"skills": []  
	},  
	{
		"groupName": "Garbage",  
		"description": "Grupo estadunidense formado na cidade de Madison, em 1994",  
		"id": 2,  
		"subscribe": [],  
		"skills": []  
	}  
]    
```  

O _expand, ao contrário do _embed, traz as informações da tabela "pai" que está relacionada com o recurso que está sendo requisitado.   


### *SUBSCRIBE*  

Parte da API responsável pela inscrição de um usuário em um grupo.   

*Com autenticação (token) no cabeçalho da requisição*   
**POST /subscribe - Formato da Requisição**  
```js  
{  
	"name": "Everything But The Girl",  
	"groupId": "1"  
}  
```    

**POST /subscribe - Formato da Resposta - Status 201**  
```js  
{  
	"name": "Everything But The Girl",  
	"groupId": "1",  
	"id": 3  
}  
```  

 
### *COMMENTS*  

Parte da API responsável pela criação de um comentário de um usuário em um grupo.   

**POST /comments - Formato da Requisição**  
```js  
{  
	"comments": "I took a walk with my fame Down memory lane I never did find my way back",
	"groupId": "1"  
}    
```  

**POST /comments - Formato da Resposta - Status 201**  
```js   
{  
	"comments": "I took a walk with my fame Down memory lane I never did find my way back",  
	"groupId": "1",  
	"id": 3  
}  
```  

Caso queira visualizar todos os endpoints filhos que um usuário logado dispõe:  

*Com autenticação (token) no cabeçalho da requisição*    
**GET /users/4?_embed=comments&_embed=skills&_embed=perfil&_embed=groups&_embed=works&_embed=subscribe - Formato da Requisição**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "wW*8uuuu",  
	"userId": "4"  
}  
```  

**GET /users/4?_embed=comments&_embed=skills&_embed=perfil&_embed=groups&_embed=works&_embed=subscribe - Formato da Resposta**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "$2a$10$A8yKyQldkug.PaXiqWCupefox8GY1R/LheJSfnwsUE0RV4Wc8SvWa",  
	"name": "Kate Austen",  
	"id": 4,  
	"comments": [],  
	"skills": [],  
	"perfil": [],  
	"groups": [],  
	"works": [],  
	"subscribe": []  
}  
```  

# Deletando Dados da API - DELETE    

*Não exige corpo da requisição*        
*Com autenticação (token) no cabeçalho da requisição*          
**DELETE /users/:id - Formato da Resposta - STATUS 200**     
```js   
{}     
```   
Lembrando que /users é uma rota que só pode ser lida ou escrita pelo seu proprietário/dono. Ou seja, o usuário só conseguiria deletar a própria conta.  


Se seu desejo for alterar dados registrados na API, há 2 opções de verbos HTTP (*Hypertext Transfer Protocol*):    

1. PATCH   
2. PUT  

Considere o usuário:  
```js  
{  
	"name": "Kate Austen",  
	"email": "austenkate@lost.com",  
	"password": "wW*8uuuu"  
}    
```  

# Atualizando dados da API - PATCH e PUT   

Caso deseje alterar somente um dos campos ou mais, mas não todos, use PATCH:  

*Com autenticação (token) no cabeçalho da requisição*   
**PATCH /users Formato da Requisição**  
```js  
{  
	"name": "Kate Beverly Austen"  
}   
```  

**PATCH /users/:id - Formato da Resposta - Status 200**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "$2a$10$fLh0OXVQfSvnP19DOFWg8e1RHVu7hpz/hAsiZiA4yZlI.KIeTGj0i",  
	"name": "Kate Beverly Austen",  
	"id": 3    
}    
```  

Já com o PUT é possível alterar dados completos de um recurso. O uso do verbo HTTP PUT exige que os campos email e password estejam no corpo da requisição. Ou seja, adicione esses 2 campos mais o campo que deseja alterar.   
Do contrário, a resposta retornada será:  

**PUT /users/:id - Formato da Resposta - Status 400**    
```js   
"Email and password are required"  
```  
Caso forneça somente os campos email e password no corpo da requisição, o campo excedente nome será deletado/sobrescrito, retornando apenas email, password e id:  

*Com autenticação (token) no cabeçalho da requisição*   
**PUT /users/:id - Formato da Requisição**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "wW*8uuuu"  
}    
```  
**PUT /users/:id - Formato da Resposta - Status 200**  
```js  
{  
	"email": "austenkate@lost.com",  
	"password": "$2a$10$64up/J22qc2AGFQDtZN7PeRKZ9OnBMIuYMjTLXgUsJm3nTWWif3Sa",  
	"id": 3  
}  
```  

*9:41 pm, February 03, 2022* 🌅    
*Brazil*     

*Jonatas Heiderich - Scrum Master*  
*Gustavo Bertolini Haas - Tech Leader*  
*Débora Gama - Quality Assurance*  
*Matheus Serafim - Quality Assurance*   
*Miguel Leite - Quality Assurance*   
*Leandro Medvedev - Product Owner*   