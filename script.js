// Seleciona todos os botões que avançam os passos
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Seleciona o elemento atualmente ativo (o passo visível)
        const atual = document.querySelector('.ativo');
        
        // Pega o número do próximo passo através do atributo data-proximo do botão clicado
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        // Verifica se o próximo passo existe
        const proximoPasso = document.getElementById(proximoPassoId);

        if (proximoPasso) {
            // Remove a classe 'ativo' do passo atual (esconde o passo atual)
            atual.classList.remove('ativo');
            
            // Adiciona a classe 'ativo' ao próximo passo (mostra o próximo passo)
            proximoPasso.classList.add('ativo');
        } else {
            console.error(`O elemento com o id ${proximoPassoId} não foi encontrado.`);
        }
    });
});
