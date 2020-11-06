# teste-produtos-login-rd

Frontend em Angular 10 com login, produtos e carrinho.


# Testando o Build

O projeto já acompanha um build, que se encontra na pasta frontend/dist.

É necessário rodar a aplicação em um servidor. Recomenda-se o uso do http-server (é necessário ter o NodeJS instalado):

'npm install http-server -g'

Uma vez instalado entre com um terminal na pasta frontend e insira o seguinte comando:

'http-server dist/loja-virtual'

Em seguida acesse a aplicação através do navegado pelo endereço:

'http://127.0.0.1:8080'

Se optar compilar a aplicação siga as instruções adiante.

## Rodando o servidor de desenvolvimento.

Digite o seguinte comando para instalar as dependências (é necessário ter o NodeJS instalado na máquina):

'npm i --save'

Em seguida execute o servidor através do seguinte comando (é necessário ter o Angular CLI instalado na máquina):

'ng serve --open'

## Para fazer o build da aplicação.

Digite o seguinte comando para instalar as dependências (é necessário ter o NodeJS instalado na máquina):

'npm i --save'

Em seguida execute o servidor através do seguinte comando (é necessário ter o Angular CLI instalado na máquina):

'ng build --prod'

## Login de usuário

A aplicação conta com um simulação de um sistema de login. Para efetuar o login use as credenciais 'user@email.com' e 'password'.



