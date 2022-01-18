function insert(num) { /* Inserir os números no visor */
    numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}


function apagarTudo() {
    document.getElementById('visor').innerHTML = "";
    document.getElementById('visor_conta').innerHTML = "";
}


function apagarVisor() {
    document.getElementById('visor').innerHTML = "";
}


function apagar_ultimo_caractere() {
    resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length - 1);
}


function insert_operacao(operacao) { /* Inserir no visor as OPERAÇÕES */
    numero = document.getElementById('visor').value;
    visor_conta = document.getElementById('visor_conta').value;

    document.getElementById('visor_conta').innerHTML = eval(visor_conta + numero) + operacao;
    resultado_rapido = eval(visor_conta + numero) + operacao;
    document.getElementById('visor').innerHTML = "";

    /* Fazer com que a pessoa consiga mudar o operador depois de ter feito a linha a cima */


    /* Capturar ultimo caractere para usar no IF abaixo
    ultimo_caractere = visor_conta.slice(-1); */

    /* Se acaso a conta tiver um sinal de operação no final, esse IF irá remover para não dar erro
    if (ultimo_caractere == "+" || ultimo_caractere == "-" || ultimo_caractere == "*" || ultimo_caractere == "/") {
        visor_conta = visor_conta.substring(0, visor_conta.length - 1);
        document.getElementById('visor_conta').innerHTML = visor_conta + operacao;
    } */
}


function calcular() {
    /* Quando clicar em resultado aparecer a conta no VISOR_CONTA e o resultado no VISOR */
    /* Capturar no resultado, o número que não foi inserido no VISOR_CONTA  */
    resultado = document.getElementById('visor_conta').innerHTML + document.getElementById('visor').innerHTML;

    if (resultado) {
        document.getElementById('visor').innerHTML = eval(resultado);
        document.getElementById('visor_conta').innerHTML = "";
    }
    else {
        document.getElementById('visor').placeholder = "Resultado Nulo";
    }
}