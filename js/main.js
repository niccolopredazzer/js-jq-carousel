$(document).ready(function() {

    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);
    
    //timing functions

    var slideAutomatico = setInterval(nextSlide, 5000);   //setto l'intervallo: ogni 5 secondi si passa all'immagine successiva

    //blocco lo slide automatico in vari modi
    $("#bottone").click(function () {           //metodo 1: il bottone
        clearInterval(slideAutomatico);
    });


    setTimeout(function() {                    //metodo 2: si interrompe automaticamente dopo 40 secondi
        clearInterval(slideAutomatico);
    }, 40000);


    $('.images').mouseenter(function(){        //metodo 3: se tengo il mouse fermo sull'immagine lo scorrimento si interrompe se esco dall'immagine riparte
        clearInterval(slideAutomatico);
    });
    $('.images').mouseleave(function(){
        slideAutomatico = setInterval(nextSlide, 5000);
    })

    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    //Defisco la funzione per il prev e lo chiamo prevSlide
    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var imgPrecedente = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            imgPrecedente.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var pallinoPrecedente = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            pallinoPrecedente.addClass('active');
        }
    }





});
