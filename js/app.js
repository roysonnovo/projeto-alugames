function alterarStatus(id){
    let gameClick = document.getElementById(`game-${id}`);
    let img = gameClick.querySelector('.dashboard__item__img');
    let botao = gameClick.querySelector('.dashboard__item__button');
    let nomeJogo = gameClick.querySelector('.dashboard__item__name');

    if (img.classList.contains('dashboard__item__img--rented')){
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            img.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}