function insert(num){ /* Inserir os números no visor */
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function apagarTudo(){
    document.getElementById('visor').innerHTML = "";
}

function apagar_ultimo_caractere(){
    var resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length -1);
}

function insert_operacao(operacao){ /* Inserir no visor as OPERAÇÕES */
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + operacao;
} 

function calcular(){
    var resultado = document.getElementById('visor').innerHTML;
    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('visor').placeholder = "Resultado Nulo"
    }
}