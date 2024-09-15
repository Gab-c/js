let num = [1, 8, 3, 5, 6]
num.push(7) // adicionei o sete e ele irá na ultima posição
num.sort() // irá contar em ordem crescente, cuida na ordem q colocar ele

/*for(let a = 0; a < num.length; a++) {
console.log(`posição ${a} e valor ${num[a]}`)
} */

for(let a in num) { // VERSÃO SIMPLIFICADA
    console.log(`posição ${a} e valor ${num[a]}`)
}

