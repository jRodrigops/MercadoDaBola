// pegar os valores do formulario
let nome = document.querySelector("#nome")
console.log(nome)

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campotipo = document.querySelector("#tipo")

campoQtde.addEventListener("change", calcular)
campoQtde.addEventListener("change", calcular)

// calcular preço
function calcular(){
    //R$ 100 por pagina
    let qtde = campoQtde.value 
    let valor = qtde * 100
   
    if(campotipo.value == 2) {valor += 1000
        
    }
    console.log(tipo.value)
    output.innerText = `R$ ${valor}`
 
}





// mostrar preço