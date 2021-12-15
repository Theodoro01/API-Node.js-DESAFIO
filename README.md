
##  Olá, seja bem vindo(a).
          
<p>
   Sou Desenvolvedor De Sistemas e atualmente desenvolvo <br> 
   projetos em <strong> Javascript e Nodejs. </strong> 
   <br>
   <br>
   Nesse projeto desenvolvi uma API Rest, com o intuito de<br>
   aplicar algumas ferramentas que ainda não tinha ultilizado <br>
   nos meus projetos.
   <br>
   <br>
   Utilizei: <strong> MongoDB Atlas, NodeJS e JavaScript. </strong> 
   <br>
   <br>
   <strong> O banco de dados esta hospedado em MongoDB Atlas e a aplicação back-end esta no Heroku.</strong> 
   <br>
   <br>
   Frameworks: <strong> bcryptjs, uuid, dotenv, express, jsonwebtoken e mongodb. </strong>
</p>

## Tecnologias & Ferramentas

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="25">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="25">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="25">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="25">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="25">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="25">
  <br>
  Para acessar a API, deve ser chamada a rota: https://node-api-desafio-dado.herokuapp.com/auth/register, <br>
  para realizar o cadastro do usuário, usando o verbo POST, passando como parâmetro:
         
  {
          
     "nome": "xxxx",   
     "email": "xxxx@xxxx",    
     "senha": "xxxx",   
   
  }
  
  Serão retornados os dados do usuário cadastro e o Token gerado com validade de 24 horas.
          
          {
          
	"user": {
          
		"name": "Theodoro",
		"email": "theodoro123@gmail.com",
		"_id": "61b9fcfa3a8727bfe309a2f5",
		"createAt": "2021-12-15T14:34:34.749Z",
		"__v": 0
          
	},
          
	 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjlmY2ZhM2E4NzI3YmZlMzA5YTJmNSIsImlhdCI6MTYzOTU3ODg3NCwiZXhwIjoxNjM5NjY1Mjc0fQ.g98H7ZN728_L0FEKKzDzsZIOsVDD4RyMr6WUcwfr5lg"
          
}
          
          
Atráves da rota POST https://node-api-desafio-dado.herokuapp.com/auth/authenticate, <br>
passamos como parâmetros o email e a senha outrora cadastrados e teremos o seguinte retorno:
          
          
           {  
              
	  "user": {
          
                    "_id": "61b9fcfa3a8727bfe309a2f5",
                    "name": "Theodoro",
                    "email": "theodoro123@gmail.con",
                    "createAt": "2021-12-15T14:34:34.749Z",
                    "__v": 0
          
	},
          
	 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjlmY2ZhM2E4NzI3YmZlMzA5YTJmNSIsImlhdCI6MTYzOTU3OTQ4OCwiZXhwIjoxNjM5NjY1ODg4fQ.IefzrprBMpS7hGBdkZm9Kmz_ppVM8gKXxh-E9Ty0vYw"
          
}
</p>
          
