//CONFIGURAÇÃO DO MENU HAMBURGUE P/ APARECER E ESCONDER
//declaracao de variavel quevai receber o comando de abrir e fechar
//recebendo valores de id e class
//menu.onclick = quando clicar no #menu-bar (verificar)
//navbar.classList.toggle('active'); -> css regra para "active"
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


//abrir o menu
menu.onclick = () => {

    menu.classList.toggle('fa-times');/*simbolo de fechar #x*/
    navbar.classList.toggle('active');
};

//fechar o menu
menu.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};



// Section With Dark / Light Mode

let themetoggler = document.querySelector('#theme-toggler');

themetoggler.onclick = () => {

    themetoggler.classList.toggle('fa-sun');

    if(themetoggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

// Section count numbers

    $('.count').each(function(){
    var $this = $(this),
    countTo = $this.attr('data-count');
    $({ countNum : $this.text() }).animate({
        countNum : countTo
        },
        {
            duration:5000,
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete: function(){
                $this.text(this.countNum + '+');
            }
        }
        );
    });

    // Section project - magnific popup

    $('.project').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });