

function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

if(email == "adm@gmail.com" && senha == "123"){
    alert("Administrador logado!")
    location.href = "adm.html"
//abri a pagina do adm que tema atela de cadastro
}else if(email == "" || senha == ""){
    alert("Favor preencher todos os campos!");
}else if(email == "adm@gmail.com" && senha != "123"){
    alert("Credenciais inválidas!");
}else{
    location.href = "index.html"
}

}

function cadastrarVisita(){
    var email = document.getElementById('email').value;
    if(email == ""){
        alert("Favor preencher todos os campos!");
    }else{
        alert("Visita cadastrada com sucesso!");
        location.href = "adm.html"
    }
}

function addVisita (){
    var visita = document.getElementById("visita");
    visita.classList.toggle('visita-on');
}

function cadastrar(){
    var email = document.getElementById('email').value;

    if(email != ""){
    alert("Cliente cadastrado com sucesso!");
    location.href = "adm.html"
    }else{
        alert("Favor preencher todos os campos!");
    }
}

function addFav2 (){
    var linha2 = document.getElementById("linha2");
    linha2.classList.toggle('linha2-on');
}

function addFav3 (){
    var linha3 = document.getElementById("linha3");
    linha3.classList.toggle('linha3-on');
}