/* OLHAR O retirar_operador, VC VAI USAR QUASE A MESMA LOGICA DO BOTÃO DE RETIRAR O ULTIMO CARACTRE "X", MAIS ESSE BOTÃO NÃO PODE CANCELAR O OPERADOR */

function insert(num) { /* Adiciona os números no visor */
    document.principal.visor.value = document.principal.visor.value + num;
    operador_ativado = false;
}

function apagarTudo() { /*Apaga tudo sobre a conta */
    document.principal.visor.value = "";
    operador_ativado = false;
}

function apagarNumero() { /*Apaga o ultimo número inserido na conta antes de um operador */
    document.principal.visor.value = ""; /* ARRUMAR, APAGAR APENAS NÚMERO DO MOMENTO ESCRITO E NÃO A CONTA TODA */
}


/* Operadores */
function bot_adicao() {
    if (operador_ativado == true) { /* Acaso for operador o ultimo caractere, irá substituir pela adição*/
        visor = document.principal.visor.value;
        retirar_operador = visor.substring(0, visor.length - 1);
        document.principal.visor.value = retirar_operador + "+";
    } else { /* Acaso não houver operador no ultimo caractere, irá adicionar o operador de adição*/
        operador_ativado = true;
        document.principal.visor.value = document.principal.visor.value + "+";
    }
}

function bot_subtracao() {
    if (operador_ativado == true) { /* Acaso for operador o ultimo caractere, irá substituir pela subtração*/
        visor = document.principal.visor.value;
        retirar_operador = visor.substring(0, visor.length - 1);
        document.principal.visor.value = retirar_operador + "-";
    } else { /* Acaso não houver operador no ultimo caractere, irá adicionar o operador de subtração*/
        operador_ativado = true;
        document.principal.visor.value = document.principal.visor.value + "-";
    }
}

function bot_multiplicação() {
    if (operador_ativado == true) { /* Acaso for operador o ultimo caractere, irá substituir pela multiplicação*/
        visor = document.principal.visor.value;
        retirar_operador = visor.substring(0, visor.length - 1);
        document.principal.visor.value = retirar_operador + "x";
    } else { /* Acaso não houver operador no ultimo caractere, irá adicionar o operador de multiplicação*/
        operador_ativado = true;
        document.principal.visor.value = document.principal.visor.value + "x";
    }
}

function bot_divisao() {
    if (operador_ativado == true) { /* Acaso for operador o ultimo caractere, irá substituir pela divisão*/
        visor = document.principal.visor.value;
        retirar_operador = visor.substring(0, visor.length - 1);
        document.principal.visor.value = retirar_operador + "÷";
    } else { /* Acaso não houver operador no ultimo caractere, irá adicionar o operador de divisão*/
        operador_ativado = true;
        document.principal.visor.value = document.principal.visor.value + "÷";
    }
}
/* Fim Operadores */

function resultado() {

}