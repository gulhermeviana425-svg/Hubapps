document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const discordButton = document.getElementById('discordButton');
    const currentYearElement = document.getElementById('currentYear');

    // Definir ano atual no footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Adicionar evento de clique ao botão do Discord
    discordButton.addEventListener('click', function() {
        // Adicionar efeito visual de clique
        discordButton.style.transform = 'scale(0.98)';

        // Redirecionar após pequeno delay para melhor experiência
        setTimeout(function() {
            window.location.href = 'https://discord.gg/2gVWhgStQa';
        }, 200);

        // Restaurar tamanho do botão
        setTimeout(function() {
            discordButton.style.transform = 'scale(1)';
        }, 200);
    });

    // Adicionar efeito de hover no botão via JavaScript também
    discordButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    discordButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Adicionar feedback tátil para dispositivos móveis
    discordButton.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
    });

    discordButton.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });

    // Feedback no console
    console.log('Site do Discord carregado com sucesso!');
    console.log('Botão configurado para redirecionar para: https://discord.gg/2gVWhgStQa');
});