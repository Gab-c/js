function carregar() {
    var msg = document.querySelector('div#msg')
    var ima = document.querySelector('div#imagem')
    var data = new Date ()
    var hora = data.getHours()
    var img = document.createElement('img')
    ima.appendChild(img)
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e4e424'

    } else if (hora >=12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b12525'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#535252'
    
    }
    }