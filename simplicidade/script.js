function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados para ver se está tudo ok')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }  else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            }  else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}