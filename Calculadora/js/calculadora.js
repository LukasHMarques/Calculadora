function insert(num){ /* Inserir os números no visor */
    numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function apagarTudo(){
    document.getElementById('visor').innerHTML = "";
    document.getElementById('visor_conta').innerHTML = "";
}

function apagarVisor(){
    document.getElementById('visor').innerHTML = "";
}

function apagar_ultimo_caractere(){
    resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length -1);
}

function insert_operacao(operacao){ /* Inserir no visor as OPERAÇÕES */
    numero = document.getElementById('visor').innerHTML;
    visor_conta = document.getElementById('visor_conta').value;
    document.getElementById('visor_conta').innerHTML = visor_conta + numero + operacao;
    document.getElementById('visor').innerHTML = "";
} 

function calcular(){
    /* SE CLICAR NO RESULTADO E TIVER UM NUMERO NO VISOR PRINCIPAL, ADICIONAR ELE COM O RESTO DA CONTA DO VISOR_CONTA */
    resultado = document.getElementById('visor_conta').innerHTML;
    ultimo_caractere = resultado.slice(-1);

    if (ultimo_caractere == "+" || ultimo_caractere == "-" || ultimo_caractere == "*" || ultimo_caractere == "/" ){
        resultado = resultado.substring(0, resultado.length -1)
    }

    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('visor').placeholder = "Resultado Nulo"
    }
}