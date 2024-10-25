const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        if (proximoPasso) {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        } else {
            console.error(`O elemento com o id ${proximoPassoId} não foi encontrado.`);
        }
    });
});
