// pegar os valores do formulario
let nome = document.querySelector("#nome")
console.log(nome)

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campotipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#Prazo")

campoQtde.addEventListener("change", calcular)
campoQtde.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)
campoPrazo.addEventListener("input", function(){
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} semanas`
    calcular()
})


// calcular preço
function calcular(){
    //R$ 100 por pagina
    let qtde = campoQtde.value 
    let valor = qtde * 20
    let taxaDeUrgencia =0
   
    if(campotipo.value == 2) valor += 25

    if(campotipo.value == 2) taxaDeUrgencia += 5

    if(campoLayoutSim.checked) valor += qtde * 25

    if(campoLayoutSim.checked) taxaDeUrgencia+= 8
    
    if(campoJs.checked) valor *= 1.2

    if(campoJs.checked) taxaDeUrgencia += 9





    taxaDeUrgencia = 1 + campoPrazo.value * 0.02
    valor *= 1 + taxaDeUrgencia
    
    console.log(tipo.value)
    output.innerText = `R$ ${valor.toFixed(2)}`
}





// mostrar preço