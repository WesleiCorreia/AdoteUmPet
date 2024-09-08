
let listaG = document.getElementById("gatos");
resultadoG = "";
  
  for(let gato of gatos){
    resultadoG += `
              <div class="item-resultado">
                  <img src=${gato.imagem}>
                  <h2>${gato.nome}</h2> 
                  <p class="descricao-meta">${gato.descricao}</p> 
              </div>`
  }
  
  listaG.innerHTML = resultadoG;
