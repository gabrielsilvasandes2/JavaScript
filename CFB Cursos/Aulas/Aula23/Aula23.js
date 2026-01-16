// Parâmetros REST em funções Javascript

function soma(...valores) {
    let resultado = 0
    for (let valor of valores) {
        resultado += valor
    }
    console.log(`Total de ${valores.length} valores somados.`)
    return resultado
}

total = soma(5, 5, 8)

console.log(`A soma dos valores é ${total}.`)