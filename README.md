# BootcampDio-TechWoman-ReactNative

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

O Tech Woman Summit Avanade é uma semana imersiva para mulheres profissionais de tecnologia que desesjam evoluir na programação com React-Native. 




### Aula 1 🔧 Instalação do ambiente 

Essa etapa será relacionada aos primeiros passos na organizaçaõ o ambiente:

```

## 📦 Desenvolvimento

1 - nmp install -g react-native-cli
2 - nmp install -g expo cli
3 - npx create-react-app client 
4 - CD client
5 -  apagar app.css e <head > </head > do app.js
6 - npm start para rodar e vosualizar o código 
7 - se estiver ok, dá um CTRL + C e depois S
8 - npm  add bootstrap
9 - vamos utilizar um pacote do dom do node, com  npm add reactstrap react react-dom 
10 -  organizar os arquivos do drive dentro da pasta style. alterar as pizzas... para assento
copiar arquivo style.css da pasta style e colar no style.sass

11 - npm install -g node-sass
12 - npm install --save-dev node-sass

13 - no arquivo package json 
14 - observar no final do arquivo o dado : DevDependecies: { "^7.0.1" }
15 - npm start
```

###API:

6 -  "criar a api "  -  cd .. voltamos na pasta 1
17 -  npx express-generator --no-view api
(express para criar com o node, api )

18 - y ("criou a api")
18a - acessar a pasta api   = cd .\ api\
19 - code . -  abrir  nos code
20 - clicar no www e alterar a porta  de 3000 para 3005. 

21 - excluir a pasta public e  o arquivo user.js
22 - deletar a linha 7 , 15 e linha 13 relacionadas as exclusões anteriores.
23 - adicionar no arquivo package.json: 
depois de "script":

  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "create-data": "node data/generateFakeData.js"
  },

24 - npm install --global yarn
25 - npm install -g nodemon
26 - npm install --save-dev nodemon
27 - yarn dev  (se der erro tente no terminal raiz)
28 -  acesse index.js (api ) --- alterar linha res para :
  res.status(200).send("tudo certo");
29 - no arquivo app.js, vamos addionar o banco de dados, mango db.
const mongose = require("mongoose")
após ás variáveis .

30 - instalar a dependecia do mongo 
npm install cors
31 - yarn add cors   (usar o prompt se der erro)
32 - criar uma variavel var cors =  requeri('cors');
33 - app.use(cors());
34 -  npm add dotenv
35 - criar um novo arquivo na pasta pricipal:
.env
colocar a desquição do banco de dados:

MONGO_URL=mongodb://localhost/VoeDio

36 - //Mongo DB
const mongoose = require("mongoose");
// conectar o banco 
mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlparser: true
})


37 - // conexao com o banco de dados
db.on("error", console.error.bind(console, "connection erro:"));
db.once("open", _ =>{
    console.log("Conectado com o banco");
})

38  -- daqui para cima tem front-en e conexão com banco de
dados.

```
### RabbitMQ

39 -  baixar rabbitmq e earlang
39a  - acessar o prompt do rabbitmq no pc e colocar 
rabbitmq-plugins enable rabbitmq_management
após abrir no navegador:

40 - senha e acesso do rabbit mq  no navegador -  ( guest  )
endereço da porta :  http://localhost:15672/#/

41 - criar uma pasta na pasta principal
rabbitmq , acessar no cd

para aceitar os padrões:
42 -  npm init -y

43 - npm install amqplib -  bliblioteca famosa

44 - criar um arquivo na pasta rabbitqm, sender.js

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.



## 🛠️ Construído com

React Native 
VSCode 
MongoDB  
Bootstrap
SendGrid


## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença


## 🎁 Gratidão

* Obrigada pela excelente aula Isa 📢
* Obrigado Time Dio! 📢



