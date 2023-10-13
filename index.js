//VARIABLES
let notification = document.querySelector('.notification-container')
let notificationConteudo = document.querySelector('#notification')
let userName = document.querySelector('#user-name')
let characterName = document.querySelector('#nome-personagem')
let spanName = document.querySelector('#span-name')
let btnMudarPagina = document.querySelector('#btn-comecar')


let btnLutar = document.querySelector('#btn-lutar')
let button = document.getElementById('btn-criar')







button.addEventListener('click', function(){
    // Verifique e modifique o estilo da notificação
    if (notification.style.display === 'none') {
        notification.style.display = 'flex';
    }

    // Atualize o nome do personagem
    let userNameValue = userName.value;
    spanName.textContent = userNameValue;
    characterName.textContent = userNameValue;
});





btnMudarPagina.addEventListener('click', function(){
    // Redirecionar para a outra página
    window.location.href = 'pagina-duelo.html?character=' + encodeURIComponent(characterName);
});


// Adicionar um evento para quando a página de duelo for carregada
window.addEventListener('load', function() {
    // Recuperar o valor de characterName dos parâmetros da URL
    var urlParams = new URLSearchParams(window.location.search);
    var characterNameFromURL = urlParams.get('character');
    
    // Verificar se characterNameFromURL não é nulo e, em seguida, imprimi-lo no console
    if (characterNameFromURL) {
        console.log(characterNameFromURL);
        // Também atualize o nome do personagem na página
        characterName.textContent = characterNameFromURL;
    } else {
        console.log('Nenhum nome de personagem foi passado via URL.');
    }
});






