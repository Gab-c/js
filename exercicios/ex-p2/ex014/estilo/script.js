function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.innerHTML = "<img src = 'imagens/manha.png'>"
        document.body.style.background = '#e4e424'

    } else if (hora >=12 && hora <= 18) {
        img.innerHTML = "<img src = 'imagens/tarde.png'>"
        document.body.style.background = '#b12525'
    } else {
        img.innerHTML = "<img src = 'imagens/noite.png'>"
        document.body.style.background = '#535252'
    
    }
    }