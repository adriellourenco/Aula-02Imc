alert("Olá Mundo!")

// 'use strict' é usado para que o navegador seja mais rígido, estritivo com seu código! Para que você siga os padrões atuais!
'use strict'

let $range = document.getElementById('peso'),
    $value = document.getElementById('descricao');

function valorRange(){
    $value.textContent = $range.value;
}

$range.addEventListener('click', valorRange)

function camposValidos(){
    return document.getElementById('formulario').reportValidity()
}

function calcularImc(altura,peso){
    return peso/(altura*altura)
}

function classificarImc(imc){
    
    let texto
    
    if(imc < 18.5){
        texto = "e você está abaixo do peso!"
    }else if(imc < 25){
        texto = "e você está com o peso ideal! Parabéns!"
    }else if(imc < 30){
        texto = "e você está levemente acima do peso!"
    }else if(imc < 35){
        texto = "e você está com obesidade grau I!"
    }else if(imc < 40){
        texto = "e você está com obesidade grau II!"
    }else{
        texto = "e você está com obesidade grau III! Cuidado!"
    }

    return texto
}

function mostrarResultado(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

if(camposValidos()){

    const imc = calcularImc(altura,peso)

    //console.log() é usado para que apareça o que você quiser no console do navegador, para que você possa testar! 
    //console.log(imc)

        let texto = classificarImc(imc);

    //Utilizado acentos graves, você pode adicionar variáveis usando ${nomeVariável} sem precisar concatenar as variáveis e os textos
    //toFixed(x) - define quantas casas decimais serão mostradas na tela ou armazenadas na variável  
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} ${texto}`

}else{
    resultado.textContent = `Preencha todos os campos!`
    }
}


//addEventListener é um método do elemento HTML, document.getElementById('calcular') retorna o elemento HTML botão calcular  
document.getElementById('calcular').addEventListener('click', mostrarResultado)