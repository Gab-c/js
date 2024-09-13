function contar() {
    let ini = document.getElementById('txi')
    let fim = document.getElementById('txf')
    let passo = document.getElementById('txp')
    let res = document.querySelector('div#res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    res.innerHTML = `Contando:<br>`
    

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        
    } else {
           
        if (p <= 0) {
            window.alert('[ERRO] Considerando passo "1"')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else if (i > f) {
            // Contagem decrecente
            for(let c = 1; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}