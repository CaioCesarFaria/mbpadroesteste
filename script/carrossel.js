const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    on: {
        init: function () {
            // Obtém todos os bullets e define a cor de fundo e texto
            const bullets = this.pagination.bullets;
            const corPadrao = '#04436E'; // Cor de fundo e texto padrão
            const corAtiva = '#00263D'; // Cor de fundo e texto para o bullet ativo
            const tamanhoDesejado = '15px'; // Ajuste o tamanho conforme necessário
            for (let i = 0; i < bullets.length; i++) {
                bullets[i].style.backgroundColor = corPadrao;
                bullets[i].style.color = corPadrao;
                bullets[i].style.width = tamanhoDesejado;
                bullets[i].style.height = tamanhoDesejado;
            }
            bullets[this.activeIndex].style.backgroundColor = corAtiva;
            bullets[this.activeIndex].style.color = corAtiva;

            for (let i = 0; i < bullets.length; i++) {
                bullets[i].style.width = tamanhoDesejado;
                bullets[i].style.height = tamanhoDesejado;
            }
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});