'use strict'

// Função que inicia o range e atualiza o valor do span que está a frente do input type="range"

const iniciarRange = (idRange) => {

    //Pega os Elementos HTML
    const range = document.getElementById(idRange)
    const span = document.getElementById(`valor-${idRange}`)

    // Evento de input do range 
    const atualizarValor= () => span.textContent = range.value 

    range.addEventListener('input', atualizarValor)
}

//Exportação de uma função para que possa ser usada em outros arquivos, ela se torna uma função pública
export {
    iniciarRange
}