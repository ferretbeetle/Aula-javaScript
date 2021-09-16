function clicou(){  

  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</>";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function redirecionar(){
  //window.open("https://globallabs.academy/");
  //window.location.href = "https://globallabs.academy/";
}

/*
function trocar(elemento){
  //document.getElementbyId("mousermove").innerHTML = "<b>Obrigado por passar o mouser</";
  //elemento.innerHTML = "Obrigado por passar o mouse";

  //alert("trocar texto");
}
*/

function voltar(elemento){
  //document.getElementbyId("mousermove").innerHTML = "<b>Obrigado por clicar</";
  elemento.innerHTML = "passar o mouse aqui";
}  
function load(){
  alert("pagina carregada");

} 
function funcaoChange(elemento){
  console.log(elemento.value)
}

  


  //console.log(document.getElementById("agradecimento"));
    

 // alert("Obrigado por clicar");





/*
function soma(n1, n2){
  return n1 + n2;
}
var validar = 0;
function validaidade(idade){
  var validar;
  if (idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaidade(idade));

alert(soma(5, 10));
*/

//function setReplace(frase, nome, nome_nome){
//  return frase.replace(nome, nome_nome)
//}

//alert(soma(5, 10));
//alert(setReplace("Vai japao" , "japao" , "Brasil"));


// Trabalhando com Datas
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getUTCMinutes());
*/



// Trabalhando com for

/*
var count;
for(count=1; count <= 10; count++){
  alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
  console.log(count);
  alert(count);
  count++;
}
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
};
*/


// Trabalhando com lista

/*
var fruta = [{nome:"maca" , cor:"vermelha"}, {nome: "uva" , cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/

// Trabalhando com Dicionario

/*
var fruta = {nome:"maca" , cor:"vermelha"}
console.log("fruta.nome");
alert(fruta.cor);
*/

/*
var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
lista.push(“Polônia”);
lista.pop(“Inglaterra”);
*/
/*
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

// Exemplo 01


/*var nome = "Cristiano";
var idade = 32;
var idade2 = 10;
var frase = "corinthians e o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade);
console.log(nome);
console.log(idade + idade2);
// Mudando para maiuscula
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
// Mudando tudo para Minuscula
//alert(frase.replace("corinthians" , "Brasil"))
*/