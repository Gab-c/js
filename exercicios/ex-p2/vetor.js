let num = [1, 3, 9, 5]
num.push(7)
num.sort()

console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}, o segundo é ${num[1]}`)

let a = num.indexOf(9)

if (a == -1) {
    console.log(`Não fo possivel calcular!`)

}else {
    console.log(`A posição em que o 9 se encontra é ${a}`)
}