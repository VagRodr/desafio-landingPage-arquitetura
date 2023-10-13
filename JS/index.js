var verificaNome = window.document.getElementById("nome")
var verificaEmail = window.document.getElementById("email")

function alerta(){

    if(nome.value.length >= 2 && verificaEmail.value.length >= 3){
        alert("Seus dados foram cadastrados com sucesso!")
    }

    
}