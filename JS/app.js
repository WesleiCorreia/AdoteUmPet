
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada raça e cria o HTML para cada item
    for (let raca of racas) {

        titulo = raca.titulo.toLowerCase();
        descricao = raca.descricao.toLowerCase();
        tags = raca.tags.toLowerCase();

        if(!campoPesquisa){
            section.innerHTML = "Nada foi encontrado. Você não digitou nada!"
            return;
        };

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${raca.titulo}</h2> 
                <p class="descricao-meta">${raca.descricao}</p> 
                <a href=${raca.link} target="_blank">Mais informações</a> </div>`;
        }
    }

    if(!resultados){
        resultados = "Nada foi encontrado";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}



  let listaC = document.getElementById("lista-cachorros");

  resultadoC += `
            <div class="item-resultado">
                <img src=${cachorro.imagem}>
                <h2>${cachorro.nome}</h2> 
                <p class="descricao-meta">${cachorro.descricao}</p> 
            </div>`

listaC.innerHTML = resultadoC;



function renderizarGatos(){
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
}


