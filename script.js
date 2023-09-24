//criando variaveis

//variavel com $, o elemento ja esta criado no html
     const $startGameButton = document.querySelector(".start-quiz")
 //removendo a classe hide da div do html 1
    const $questionsContainer = document.querySelector(".questions-container")
//removendo os filhos que a div answers container tem 1
    const $answersContainer = document.querySelector(".answers-container")

    const $questionText = document.querySelector(".question")

//addEventListener capturando o evento de click e rodando a funcao startGame
    $startGameButton.addEventListener ("click", startGame)

    //criando variavel auxiliar para saber qual a pergunta atual que esta começando na 0, conforme o usuario vai respondendo, vai aumentando
    let currentQuestionIndex = 0
    let totalCorrect = 0

function startGame(){
    //fazendo o botao de comecar jogo desaparecer usando hide
    $startGameButton.classList.add("hide")


    //removendo a classe hide da div do html 2
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()

}

//removendo os filhos que a div answers container tem 2
//while pega o elemento $answersContainer e verifica se ele tem filho, se tiver, remove usando a funcao remove child e checa dnv e assim ate nao houver nenhum filho
function displayNextQuestion (){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }
//acessando a variavel question e o index atual que é o 0,mostrando em tela a primeira pergunta do banco de pergunta    
//fazendo as perguntas da questions aparecer
    $questionText.textContent = questions[currentQuestionIndex].question
//fazendo as respostas da questions aparecer
questions[currentQuestionIndex].answers.forEach(answers => {
    //criando elemento button para cada resposta
    const newAnswer = document.createElement("button")
})
}







//banco de perguntas
//cada posicao do array é um objeto com pergunta co suas possiveis respostas
//propriedade correct, se for falso e a resposta errada

const questions = [
    {
      question: "Dentro de qual elemento HTML colocamos o JavaScript?",
      answers: [
        { text: "<javascript>", correct: false },
        { text: "<js>", correct: false },
        { text: "<script>", correct: true },
        { text: "<scripting>", correct: false }
      ]
    },
    {
      question: "Onde é o lugar correto para inserir JavaScript?",
      answers: [
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        { text: "No <body>", correct: false },
        { text: "No <head>", correct: false },
        { text: "Em outro lugar", correct: false }
      ]
    },
    {
      question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
      answers: [
        { text: '<script src="xxx.js">', correct: true },
        { text: '<script href="xxx.js">', correct: false },
        { text: '<script name="xxx.js">', correct: false },
        { text: "Nenhuma das alternativas", correct: false }
      ]
    },
    {
      question: 'O arquivo JavaScript externo deve conter a tag <script>',
      answers: [
        { text: "Verdadeiro", correct: false },
        { text: "Falso", correct: true }
      ]
    },
    {
      question: 'Como escrever "Hello World" numa caixa de alerta?',
      answers: [
        { text: 'msg("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false }
      ]
    },
    {
      question: 'Como podemos criar uma função no JavaScript?',
      answers: [
        { text: 'function:myFunction()', correct: false },
        { text: 'function myFunction()', correct: true },
        { text: 'function = myFunction()', correct: false },
        { text: 'Nenhum desses códigos criaria uma função', correct: false }
      ]
    },
    {
      question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
      answers: [
        { text: 'call minhaFuncao()', correct: false },
        { text: 'call function minhaFuncao()', correct: false },
        { text: 'Nenhum desses códigos chamaria essa função', correct: false },
        { text: 'minhaFuncao()', correct: true },
      ]
    },
  ]