function alterarStatus(id){
    let  gameClick = document.getElementById(`game-${id}`);
    let img = gameClick.querySelector('.dashboard__item__img');
    let botao = gameClick.querySelector('.dashboard__item__button');
    let nomeJogo = gameClick.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);
}