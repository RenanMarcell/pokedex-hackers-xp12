function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function(e) {
        const res = JSON.parse(xhr.response);
        populaModal(res);
        $('.modal').modal();
    };
}

// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
    const pokemon_name = document.createElement('h5');
    pokemon_name.innerHTML = 'Nome: ' + pokemon.name;
    const pokemon_peso = document.createElement('h6');
    pokemon_peso.innerHTML = 'Peso: ' + pokemon.weight;
    const pokemon_altura = document.createElement('h6');
    pokemon_altura.innerHTML = 'Altura: ' + pokemon.height;
    const pokemon_imagem = document.createElement('img');
    pokemon_imagem.classList.add('img-fluid');
    pokemon_imagem.src = pokemon.sprites.front_default;
    document.querySelector('.modal-body').innerHTML = '';
    document.querySelector('.modal-body').appendChild(pokemon_imagem);
    document.querySelector('.modal-body').appendChild(pokemon_name);
    document.querySelector('.modal-body').appendChild(pokemon_peso);
    document.querySelector('.modal-body').appendChild(pokemon_altura);
}