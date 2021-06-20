// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


    let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value; 

    let totalcarne =  carnePP(duracao) * adultos + ( carnePP(duracao) / 2 * criancas );
    let totalcerveja = cervejaPP(duracao) * adultos ;
    let totalFefriAgua = bebidaPP(duracao) * adultos + ( bebidaPP(duracao) / 2 * criancas );
    
//coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
    resultado.innerHTML += `<p class="info">Você vai precisar de:</p> </br>`

    resultado.innerHTML += `
    <div class="result">
    <img src="./imagens/carne.svg" />
    <p>${totalcarne/1000}kg de Carne </p>
    </div>`

    resultado.innerHTML += `
    <div class="result">
    <img src="./imagens/cerveja.svg"/>
    <p>${Math.ceil(totalcerveja / 350)} latas de Cerveja </p>
    </div>`
    
    resultado.innerHTML += `
    <div class="result">
    <img src="./imagens/refri.svg"/>
    <p>${Math.ceil(totalFefriAgua / 2000)} pet´s de Bebida </p>
    </div>`

   
}

//calculando a quantidade por pessoa
function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6 ){
        return 2000
    }else{
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}
// limpando os campos input 
function limpar(){
    let adultos = document.getElementById("adultos").value = "";
    let criancas = document.getElementById("criancas").value ="";
    let duracao = document.getElementById("duracao").value = ""; 
    resultado.innerHTML = "";
}


