<h1>Mova</>
<br />
<br />
<div align="center">
  <img width="100" src="https://github.com/ClecioSousa00/appMova/assets/123471873/2fa5ce7b-581f-424b-8930-952bd4583914"/>
</div>


## Projeto
Este Projeto é um aplicativo de filmes que ultiliza a base de dados da api do [TMDB](https://developer.themoviedb.org/reference/intro/getting-started) para obter os dados dos filmes mais atualizados. O layout do app se encontra na comunidade do figma, ele foi feito por [Sobakhul Munir Siroj](https://www.figma.com/community/file/1216311757237992126). Foi desenvolvido somente algumas telas que seriam relavantes para o propósito do app que era apenas para estudos em react native..

## Tecnologias
* React Native
* Expo
* Typescript
* React Navigation
* Styled-Components
* Axios
* React Hook Form
* Zod
* Firebase
* Async Storage
* React Native Reanimated
* Moti
* Lottie


### Funcionalidades

* Temas: O tema da aplicação se adapta ao tema atual do dispositivo do usuário.

* Autenticação: Para usar o app o usuário deve criar uma conta com email e senha ou fazer login caso já tenha criado sua conta. Se o usuário estiver autenticado ele pode entrar no app sem fazer login, caso o usuário faça logout ele deve informar o email e senha para entrar no app.

![Group 14](https://github.com/ClecioSousa00/appMova/assets/123471873/ba749a44-a322-4e2a-b313-983dcb934d94)

* Recuperar Senha: Caso o usuário perca a sua senha ele pode informar o seu email que foi cadastrado no aplicativo assim ele receberá um email para criar uma nova senha. Este serviço é oferecido pelo firebase.

![Group 20](https://github.com/ClecioSousa00/appMova/assets/123471873/c2ea209a-fe96-4547-b89f-c84c345efff1)


* Home: Aqui fica os filmes que estão marcados como populares e lançamentos no TMDB.

![Group 22](https://github.com/ClecioSousa00/appMova/assets/123471873/05569380-0b96-43d0-8f64-76f5ff115d64)


* Listagem de filmes: Ao selecionar ver mais em uma das seções uma lista de filmes com scroll infinito.

![Group 15](https://github.com/ClecioSousa00/appMova/assets/123471873/ac6aa301-4ac1-43a4-9560-bcc295ff1250)

* Fime selecionado: Ao selecionar o filmes dados adicionais e o elenco são fornecidos.

![Group 16](https://github.com/ClecioSousa00/appMova/assets/123471873/c24bf6f2-3f0f-451f-bfcd-d77049489062)

* Busca: O usuário pode fazer a busca de filmes que estão na base de dados do TBMD.
  
![Group 17](https://github.com/ClecioSousa00/appMova/assets/123471873/5ea2f074-c333-4910-ac39-56b29e7b802b)

* Favoritos: Ao selecionar um filme como favorito ele fica armazenado no AsyncStorage, desta forma ficando salvo mesmo que o usuário faça logout do aplicativo.

![Group 21](https://github.com/ClecioSousa00/appMova/assets/123471873/5b94f953-60db-43a2-bafe-09098f6fbef2)

## Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Você também deve ter suas Api Keys. Vá ao arquivo .env.example e obtenha as keys

```bash
# Clone este repositório
$ git clone https://github.com/ClecioSousa00/appMova.git

# Acesse a pasta do projeto no terminal/cmd
$ cd appMova

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npx expo start



