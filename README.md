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

![forgoat (1)](https://github.com/ClecioSousa00/appMova/assets/123471873/d9e40679-5bcc-4f45-864a-5461d646ba9f)

* Home: Aqui fica os filmes que estão marcados como populares e lançamentos no TMDB.

![WhatsApp Image 2023-08-12 at 20 41 1 (1)](https://github.com/ClecioSousa00/appMova/assets/123471873/8715c900-33c2-48f3-8048-35f4eacbb181)

* Listagem de filmes: Ao selecionar ver mais em uma das seções uma lista de filmes com scroll infinito.

![Group 15](https://github.com/ClecioSousa00/appMova/assets/123471873/ac6aa301-4ac1-43a4-9560-bcc295ff1250)

* Fime selecionado: Ao selecionar o filmes dados adicionais e o elenco são fornecidos.

![Group 16](https://github.com/ClecioSousa00/appMova/assets/123471873/c24bf6f2-3f0f-451f-bfcd-d77049489062)

* Busca: O usuário pode fazer a busca de filmes que estão na base de dados do TBMD.
  
![Group 17](https://github.com/ClecioSousa00/appMova/assets/123471873/5ea2f074-c333-4910-ac39-56b29e7b802b)

* Favoritos: Ao selecionar um filme como favorito ele fica armazenado no AsyncStorage, desta forma ficando salvo mesmo que o usuário faça logout do aplicativo.

![Group 18](https://github.com/ClecioSousa00/appMova/assets/123471873/0c3aaf81-1af8-4be3-b564-af92b4d0ec55)

