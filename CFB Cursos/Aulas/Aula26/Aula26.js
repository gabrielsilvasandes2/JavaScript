// Funções dentro de funções em Javascript

const somar = valor => {
    let resultado = 0
    for (v of valor) {
        resultado += v
    }
    return resultado
}

const soma = (...valores) => {
    return somar(valores)
}

console.log(soma(5, 5, 5, 5))
