# Handshake 2.0

**Número da Lista**: 18<br>
**Conteúdo da Disciplina**: Grafos 2<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0041592  |  Denys Rógeres |
| 19/0109963  |  João Victor Batista |


## Sobre 
Ao longo de suas vidas, é comum que pessoas cumprimentem umas as outras e uma das formas mais comuns é através de um aperto de mão ou *handshake*. Consideremos então 3 indivíduos:

- João
- Miguel
- Pedro

Se João apertou mão de Miguel e Miguel apertou a mão de Pedro, podemos considerar que agora existe uma conexão indireta entre João e Pedro.

Dessa forma, o objetivo do projeto é implementar a ideia do kevin bacon number verficando se existe alguma conexão, direta ou indireta, entre 2 indivíduos selecionados e encontrar o caminho dessas conexões.

## Screenshots
![Etapa1](./src/assets/RegisterStepScreenshot.png)

*Etapa 1: Cadastro de indivíduos*

<br/>

![Etapa2](./src/assets/LinkStepScreenshot.png)

*Etapa 2: Conectar indivíduos*

<br/>

![Etapa1](./src/assets/SearchStepScreenshot.png)

*Etapa 3: Busca entre indivíduos*

<br/>

## Instalação 
**Linguagem**: Javascript<br>
**Framework**: React<br>

<!-- Descreva os pré-requisitos para rodar o seu projeto e os comandos necessários. -->
### Requisitos 
- *npm* ou *yarn*
- node v16

<br/>

### Instalação
Para instalar o projeto, bastar seguir os seguintes comandos:
```
$ git clone https://github.com/projeto-de-algoritmos/Grafos2_Farfetcher/tree/handshake-2.0
```
Em seguida é preciso entrar no projeto e digitar o comando:
```
$ npm install
```

Para inicializar o projeto digite o comando:
```
$ npm run dev
```

ou 

```
$ yarn dev
```

## Uso 
O sistema é composto de 3 etapas:
- Na primeira o usuário deve adicionar manualmente os indivíduos ou gerar um lista aleatória;
- Na segunda etapa, ele(a) deve formar as conexões entre os indivíduos registrados;
- Na terceira e última etapa o usuário escolhe 2 indivíduos e o algoritmo irá verificar se existe conexão entre eles e, caso exista, exibir o caminho dessas conexões

## Observação 
Este projeto trata-se de uma evolução da [entrega passada](https://github.com/projeto-de-algoritmos/Grafos1_Handshake), mas agora implementando o Dijikstra e encontrando realmente o caminho mínimo.




