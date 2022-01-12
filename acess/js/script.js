/*let varia
const não varia*
var mais antigo não usado atualmente*/

let nome = document.getElementById("nome");

function validarNome() {

    let texto = document.querySelector("#msgtexto")

    if (nome.value.length > 3){
        texto.innerHTML = "tamanho ideal";
        texto.style.color = "green";
    }
    else{
        texto.innerHTML = "Nome precisa ser maior"
    }
}
function validarEmail(){
    let msgEmail = document.querySelector("#msgemail")
    let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(padrao))
    {
        msgEmail.innerHTML = "email válido"
    }
    else{
        msgEmail.innerHTML = "email inválido"
    }


}

let name = window.document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

name.style.width = "100%"
email.style.width = "100%"

function validanome(){

    let txt = document.querySelector("#msgtexto")
    if(name.value.length < 3){
       txt.innerHTML = "Nome Inválido"
       txt.style.color = "red"
      
    }
    else{
        txt.innerHTML = "Válido"
        txt.style.color = "black"
        nomeOk = true
      
    }

}

function validaemail(){
    let txtemail = document.querySelector("#msgemail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtemail.innerHTML = "Email Inválido"
        txtemail.style.color = "red"
    }
    else{
        txtemail.innerHTML = "Email Válido"
        txtemail.style.color = "black"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#msgassunto")
    
    if (assunto.value.length > 100){
        txtAssunto.innerHTML = "Texto muito grande máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk==true && assuntoOk == true){
        alert ("Formulário Enviado com sucesso!")
    }
    else{
        alert ("Preencha o Formulário corretamente")
    }
}

function mapazoom (){

    mapa.style.width = "50rem"
    mapa.style.height = "40rem"

}

function mapanormal (){

    mapa.style.width = "25rem"
    mapa.style.height = "20rem"

}