let num = document.querySelector('input#inum')
let list = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
let valor = []

function isnum(n) {7
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlis(n, l) {
    if (l.indexOf(Number(n)) != -1) { // se for adicionado na lista um num q n seja igual a -1 é vdd, se n falso
        return true
    } else {
        return false
    }
} 

function add() {
    if(isnum(num.value) && !inlis(num.value, valor)) {
        valor.push(Number(num.value))
        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado.`
        list.appendChild(option)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    } else {
        window.alert('Valor inválido!')
    }
}

function finalizar() {
    if (valor.length == 0) {
        window.alert(`Add valores`)  
    } else {
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor) {
            soma += valor[pos]

            if (valor[pos] > maior) 
                maior = valor[pos]
            
            if (valor[pos] < menor) 
                menor = valor[pos]
        } 
        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} de números</p>`
        res.innerHTML += `<p>O maior valor ${maior}</p>`
        res.innerHTML += `<p>O menor valor ${menor}</p>`
        res.innerHTML += `<p>A soma dos valore ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}