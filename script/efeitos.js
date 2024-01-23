$(document).ready(function() {
    // Verifique se o usuário já rolou a página
    var hasScrolled = false;
  
    $(window).scroll(function() {
      if (!hasScrolled) {
        // Animar h3 da esquerda para a direita
        $(".container_quemsomos h3").animate({ marginLeft: 0 }, 1000);
  
        // Animar h4 da direita para a esquerda
        $(".container_quemsomos h4").animate({ marginRight: 0 }, 1000);
  
        // Animar h5 da esquerda para a direita
        $(".container_quemsomos h5").animate({ marginLeft: 0 }, 1000);
  
        // Defina a flag para evitar animações adicionais
        hasScrolled = true;
      }
    });
  });