# My Project

# Contexto
Estudo inicial de Typescript, uma loja de itens medievais no formato de uma API, utilizando Typescript e Sequelize .

## Técnologias usadas

Back-end:
> Desenvolvido usando: Sequelize, Typescript, Joi, Chai, Sinon, SQL

## Instalando Dependências
 
```bash
npm install
``` 
## Executando aplicação

* Para rodar o docker, criando os conteiners back-end e da database:

  ```
    docker-compose up -d
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```

## Estruturas dos endpoint de cadastro de produto e login

* O endpoint de cadastro deve receber a seguinte estrutura:

```json
{
  "name": "string",
  "price": "string",
  "userId": "number"
}
```

* O endpoint de login deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "password": "string"
}
```