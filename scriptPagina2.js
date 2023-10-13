let barraDeVida = document.querySelector('#barra-de-vida-usuario')
let barraDeVidaInimigo = document.querySelector("#barra-de-vida-inimigo")
let barraDeVidaNumeral = 30
let btnLutar = document.querySelector("#btn-lutar")
let maximoDano = [0,1]
let danosCausados = []
let spanDano = document.querySelector("#span-dano")


barraDeVida.style.width = '389.309px'
barraDeVida.style.backgroundColor = 'red'
barraDeVida.textContent = ''

barraDeVidaInimigo.style.width = '389.309px'
barraDeVidaInimigo.style.backgroundColor = 'red'
barraDeVidaInimigo.textContent = ''

btnLutar.addEventListener('click', () =>{
    
    
    
    
    
    let numeroAleatorio = getRandomNumber()
    danosCausados.push(numeroAleatorio)

    let danosCausadosSoma = danosCausados.reduce((currentTotal,item) =>{
        return item + currentTotal
    },0)

   
    
    // console.log(numeroAleatorio)
    // console.log(danosCausados)
    // console.log(danosCausadosSoma)
    
    console.log(danosCausadosSoma)
    console.log(barraDeVidaNumeral - danosCausadosSoma)
    
    barraDeVidaNumeral -= danosCausadosSoma
    spanDano.textContent = barraDeVidaNumeral

    if(barraDeVidaNumeral <= 0){
        barraDeVida.style.backgroundColor = "transparent"
        barraDeVida.style.border = 'transparent'
        alert('Grifth é invencivel, você morreu!')
    }

    console.log(numeroAleatorio)
    
    switch (barraDeVidaNumeral) {
        case 30:
            barraDeVida.style.width = '389.309px'
            break
        case 29:
            barraDeVida.style.width = '376.33px';
            
            break
        case 28:
            barraDeVida.style.width = '363.35px';
            break
        case 27:
            barraDeVida.style.width = '350.37px';
            break
        case 26:
            barraDeVida.style.width = '337.40px';
            break
        case 25:
            barraDeVida.style.width = '324.42px';
            break
        case 24:
            barraDeVida.style.width = '311.44px';
            break
        case 23:
            barraDeVida.style.width = '298.47px';
            break
        case 22:
            barraDeVida.style.width = '285.49px';
            break
        case 21:
            barraDeVida.style.width = '272.51px';
            break
        case 20:
            barraDeVida.style.width = '259.63px';
        case 19:
            barraDeVida.style.width = '246.56px';
            break
        case 18:
            barraDeVida.style.width = '233.58px';
            break
        case 17:
            barraDeVida.style.width = '220.60px';
            break
        case 16:
            barraDeVida.style.width = '207.63px';
            break
        case 15:
            barraDeVida.style.width = '194.65px';
            break
        case 14:
            barraDeVida.style.width = '181.67px';
            break
        case 13:
            barraDeVida.style.width = '168.70px';
            break
        case 12:
            barraDeVida.style.width = '155.72px';
            break
        case 11:
            barraDeVida.style.width = '142.74px';
            break
        case 10:
            barraDeVida.style.width = '129.76px';
            break
        case 9:
            barraDeVida.style.width = '116.79px';
            break
        case 8:
            barraDeVida.style.width = '103.81px';
            break
        case 7:
            barraDeVida.style.width = '90.83px';
            break
        case 6:
            barraDeVida.style.width = '77.86px';
            break
        case 5:
            barraDeVida.style.width = '64.88px';
            break
        case 4:
            barraDeVida.style.width = '51.90px';
            break  
        case 3:
            barraDeVida.style.width = '38.92px';
            break
        case 2:
            barraDeVida.style.width = '25.94px';
            break
        case 1:
            barraDeVida.style.width = '12.97px';
            break
        case 0:
            barraDeVida.style.width = '0px';
            break
            
        
    }
    

    
})

// Adicionar um evento para quando a página de duelo for carregada
window.addEventListener('load', function() {
    // Recuperar o valor de characterName dos parâmetros da URL
    var urlParams = new URLSearchParams(window.location.search);
    var characterNameFromURL = urlParams.get('character');
    
    // Verificar se characterNameFromURL não é nulo e, em seguida, atualize o nome do personagem na página
    if (characterNameFromURL) {
        document.querySelector('#nome-personagem-usuario').textContent = characterNameFromURL;
    }
})


//função para gerar um numero aleatório

function getRandomNumber() {
    return Math.floor(Math.random() * maximoDano.length);
}


