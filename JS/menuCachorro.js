
let listaC = document.getElementById("lista-cachorros");
resultadoC = "";

for(let cachorro of cachorros){
  resultadoC += `
            <div class="item-resultado">
                <img src=${cachorro.imagem}>
                <h2>${cachorro.nome}</h2> 
                <p class="descricao-meta">${cachorro.descricao}</p> 
            </div>`
}

listaC.innerHTML = resultadoC;

