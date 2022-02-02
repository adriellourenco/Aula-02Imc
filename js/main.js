// 'use strict' é usado para que o navegador seja mais rígido, estritivo com seu código! Para que você siga os padrões atuais!
'use strict'

//Importação de uma função para ser usada no código
import{iniciarRange} from "./inputRange.js"

// Chama a função iniciarRange e inicia as ranges de altura e peso
iniciarRange('altura')
iniciarRange('peso')

//reportValidity vê todas as regras dos filhos do formulário estão sendo seguidas 
const validarCampos = () => document.getElementById('formulario').reportValidity() 

// Função para Calcular IMC
const calcularImc = (altura,peso) => peso/(altura*altura) 

function classificarImc(imc){
    
    let texto
    
    if(imc < 18.5){
        texto = "e você está abaixo do peso!"
    }else if(imc < 25){
        texto = "e você está com o peso ideal! <span id='parabens'> Parabéns! </span>"
    }else if(imc < 30){
        texto = "e você está levemente acima do peso!"
    }else if(imc < 35){
        texto = "e você está com obesidade grau I!"
    }else if(imc < 40){
        texto = "e você está com obesidade grau II!"
    }else{
        texto = "e você está com obesidade grau III! <span id='cuidado'> Cuidado! </span>"
    }

    return texto
}

function mostrarResultado(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(validarCampos()){

        const imc = calcularImc(altura,peso)

        //console.log() é usado para que apareça o que você quiser no console do navegador, para que você possa testar! 
        //console.log(imc)

        let texto = classificarImc(imc);

        //Utilizado acentos graves, você pode adicionar variáveis usando ${nomeVariável} sem precisar concatenar as variáveis e os textos
        //toFixed(x) - define quantas casas decimais serão mostradas na tela ou armazenadas na variável  
        resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} ${texto}`

    }else{
        resultado.innerHTML = `Preencha todos os campos!`
    }
}

//addEventListener é um método do elemento HTML, document.getElementById('calcular') retorna o elemento HTML botão calcular  
document.getElementById('calcular').addEventListener('click', mostrarResultado)