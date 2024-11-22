// Seleciona todos os botões de "próximo passo"
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona o evento de click para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo'); // Obtém o passo atual (ativo)
        
        // Obtém o ID do próximo passo com base no atributo 'data-proximo'
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        if (proximoPasso) {
            // Remove a classe 'ativo' do passo atual
            atual.classList.remove('ativo');
            
            // Adiciona a classe 'ativo' no próximo passo
            proximoPasso.classList.add('ativo');
        } else {
            // Caso o próximo passo não seja encontrado, loga um erro detalhado
            console.error(`O elemento com o id '${proximoPassoId}' não foi encontrado. Verifique se o id está correto.`);
        }
    });
});

