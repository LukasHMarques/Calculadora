function insert(num){
    document.principal.visor.value = document.principal.visor.value + num;
}

function apagarTudo() {
    document.principal.visor.value = "";
}

function apagarNumero() {
    document.principal.visor.value = ""; /* ARRUMAR, APAGAR APENAS NÚMERO DO MOMENTO ESCRITO E NÃO A CONTA TODA */
}


/* Operadores */
function bot_adicao(){
    document.principal.visor.value = document.principal.visor.value + "+";
}

function bot_subtracao(){
    document.principal.visor.value = document.principal.visor.value + "-";
}

function bot_multiplicação(){
    document.principal.visor.value = document.principal.visor.value + "x";
}

function bot_divisao(){
    document.principal.visor.value = document.principal.visor.value + "÷";
}
/* Fim Operadores */

function resultado(){
    
}