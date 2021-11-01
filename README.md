## API Bemol Connection

### Como usar ?

* primeiro faça o clone da aplicação, depois rode yarn para instalar todos os componentes da aplicação.

* depois de instalado todos os componentes rode yarn start ou yarn dev.Pronto o back-end da  aplicação já estará rodado. 

* Em seguida para observar o front-end faça o clone no repositório github do front e novamente rode o comando yarn para instalar as dependencias do sistema na sua maquina. Escolha uma porta diferente da usada no seu back-end para que aplicação possa rodar.
* Depois disso você pode observar um front-end simples de cadastro de cliente contendo algumas informações que pode-se,ser considerada relevante. Todos os campos são obrigatorio, exceto com campo complemento. Os campos devem ser preenchidos corretamente e então submetidos para o banco de dados.

* Apesar de no front existir apenas a página de cadastro, no back-end temos outros end-points, como o de listar os clientes cadastrados, deletar e uma pequena implementação chamada subscriber que permite que dados possam serem gravados se a intervenção do front, ou seja de uma api sobre outra  carregando os dados do cliente e inserindo conforme o cep passado as informações de seu endereço. 


### Abaixo uma deve descrição dos end-points e como usa-los

   principais end-points
   
   api/costumer : metodos get, post e delete

   api/subscriber, metodo post

   Exemplo de resposta rodando na maquina local.

    Criando Costumer
    
    post: api/customer
    resposta
    {"_id":{"$oid":"617f01c90c9185363719de5c"},
    "nome":"Example","email":"example.9@example","endereco":{"$oid":"617f01bd0c9185363719de58"},"__v":{"$numberInt":"0"}}
     
    status : 201 created

    Listado customer
   get : api/customer

        [
         {
            "_id": "617f01c90c9185363719de5c",
            "nome": "Example",
            "email": "example.9@example",
            "endereco": {
            "_id": "617f01bd0c9185363719de58",
            "cep": "69078450",
            "logradouro": "Rua dos Sonhos",
            "numero": 186,
            "bairro": "Imaginação",
            "localidade": "Manaus",
            "uf": "AM",
            "__v": 0
            },
            "__v": 0
            }]

        status : 200 ok


  Deletando usuários

    delete : api/customer/617f01c90c9185363719de5c

    resposta: 204 no content


Rota subscriber

        post : api/subscriber

        {
        "nome":"example",
	    "email":"exempla@gmail.com",
	    "cep":"69078450",
	    "numero":350
        }

        resposta: 
         {
            "nome": "camilo",
            "email": "example@gmail.com",
            "_id": "617f2de1e2a400f2c613e347",
            "endereco": "617f2de1e2a400f2c613e348",
            "__v": 0
        }

        status : 201 created


### Link git Front-end (https://github.com/Dev-Marques/bemolfront)

