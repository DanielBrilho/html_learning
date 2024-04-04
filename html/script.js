// Seleciona o botão de abrir modal
var openModalBtn = document.getElementById("abrir");


// Seleciona o modal
var modal = document.getElementById("modal");

// Seleciona o elemento de fechar modal
var closeBtn = document.getElementsByClassName("close")[0];

// Abrir o modal ao clicar no botão
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal ao clicar no botão de fechar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
