function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano') //é a id do HTML do 1º <p>
    var res = document.getElementById('res') // penultima DIV 

    if ( fano.value.length == 0 || Number (fano.value) > ano) //se ano for igual a 0 ou (||)
    window.alert('[ERRO] Verificque os dados e tente novamente')

    else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ' '

        var img = document.createElement('img')

        if (sex [0].checked){

            genero = 'Homem'
            if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'menino jovem.jpg')
            }
            else if (idade >= 10 && idade < 20){
                    //Jovem
                    img.setAttribute('src', 'adolecente jovem.jpg')
            }                

            else if (idade > 21 && idade < 28){
                // Adolescente
                img.setAttribute('src', 'adulto h jovem.jpg')
            }

            else {
                // Idoso
                img.setAttribute('src', 'idoso h.jpg')
            }

        }

        else if (sex [1].checked){

            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'menina2 jovem.jpeg')
            }
            else if (idade >=10 && idade < 21){
                    //Jovem
                    img.setAttribute('src', 'gabi med.jpg')
            }                

            else if (idade > 21 && idade < 28 ){
                // Adolescente
                img.setAttribute('src', 'amanda.jpg')
            }

            else {
                // Idosa
                img.setAttribute('src', 'idosa f.jpg')
            }

        }
     

        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos . `
        res.appendChild(img)

    }
}