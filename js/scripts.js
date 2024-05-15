// SELEÇÃO DE ELEMENTOS
const generatePasswordButton = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')


// FUNÇÕES
// Primeiro de tudo vou pegar o key code (id) de cada tecla do teclado que for pressionada. Pra ajudar, existe uma tabela de referencia no 'ascii character' com o indice de cada caractere. Com base nela, desenvolvemos uma logica e função para selecionar o caractere ao clique do usuario:

//Selecionando e gerando caracteres (letras minúsculas e maiúsculas) que serão geradas no 'gerador de senha'
// neste caso o multiplicamos por 26 pois sao a quantidade de letras no nosso alfabeto e somamos 97 pois é onde as letras minusculas começam na tabela ascii. O math.floor arredonda os numeros da função para não dar numeros quebrados
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


// aqui idem anterior, porém para letras maiúsculas
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


// Mesma coisa da função acima mas para numeros (multiplicando por 10 pois são a quantidade de numeros que existe)
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()    
}


// Mesma coisa das funções anteriores mas para caracteres especiais (simbolos)
// criei um array de simbolos que estão disponíveis para serem 'gerados' e no return multiplique pela quantidade de simbolos disponiveis no array
const getSymbol = () => {
    const symbols = '!@#$%¨&*[]{}()+-='
    return symbols[Math.floor(Math.random() * symbols.length)]        
}


// criando a função que vai juntar todas as ateriores
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ''
    
    const passwordLength = 10

    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol]

    for(i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            
            password += randomValue
        })
        
    }

    // aqui estou usando um recurso para excluir os ultimo 2 digitos da sennha gerada. Assim terei 10 caracteres e não 12 como estava acontecendo
    password = password.slice(0, passwordLength)
    
    // imprimindo a senha na tela do usuario:
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}





// EVENTOS (CLIQUES)
generatePasswordButton.addEventListener('click', () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

