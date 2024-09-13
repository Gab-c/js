function cal() {
    var data = new Date()
    var anos = data.getFullYear()
    var fanos = document.getElementById('iano')
    var res = document.querySelector('div#res')
    var fsexo = document.getElementsByName('rsex')
    var idade = anos - Number(fanos.value) 
    var genero = ''
    var img = document.querySelector('div#imagem')
    res.innerHTML = (`Detectamos a idade de ${idade} anos.`)

    if (fanos.value.length == 0 || Number(fanos.value) > anos) {
        window.alert('[ERRO] Verifique novamente.')
    } else {
    
        if (fsexo[0].checked) {
            genero = 'M'

        if (idade >=0 &&  idade < 18){
            // CRIANÇA
             img.innerHTML = "<img src = 'criança-m.png'>"
            } else if (idade < 65) {
                // ADULTO
                img.innerHTML = "<img src = 'adulto-m.png'>"
            } else {
                // IDOSO
                img.innerHTML = "<img src = 'idoso-m.png'>"
            }
        } else if (fsexo[1].checked) {
            genero = 'F'
            if (idade >=0 &&  idade < 18) {
                // CRIANÇA
                img.innerHTML = "<img src = 'criança-f.png'>"
            } else if (idade < 65) {
                // ADULTO
                img.innerHTML = "<img src = 'adulto-f.png'>"
            } else {
                // IDOSO
                img.innerHTML = "<img src = 'idoso-f.png'>"
            }
            
            }
           
        }
}