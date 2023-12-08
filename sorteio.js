var nomes = ['André', 'Maynara', 'Pedro', 'Gustavo', 'Fabiana', 'Gabriel', 'Túlio'];
var resultado;
var sorteado;

function salvarListaNomes(lista) {
        localStorage.setItem('nomes', JSON.stringify(lista));
}

function sortear () {
        resultado = Math.floor(Math.random() * nomes.length);
        sorteado = nomes[resultado];
        document.querySelector(".resultado").textContent = sorteado;
}

function confirmar () {
        nomes.splice(resultado, 1);
        salvarListaNomes(nomes);
        document.querySelector(".resultado").textContent = '';
}

document.querySelector(".sortear").addEventListener("click", sortear);
    
document.querySelector(".confirmar").addEventListener("click", confirmar);