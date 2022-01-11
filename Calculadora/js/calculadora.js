function insert(num){
    document.principal.visor.value = document.principal.visor.value + num;
}

function apagarTudo() {
    document.principal.visor.value = "";
}

function apagarNumero() {
    document.principal.visor.value = ""; /* ARRUMAR, APAGAR APENAS NÚMERO DO MOMENTO ESCRITO E NÃO A CONTA TODA */
}