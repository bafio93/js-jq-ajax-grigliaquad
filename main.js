$(document).ready(function(){
    // Genero la griglia di 36 quadratini
    for (var i = 0; i < 36; i++) {
        $("#grid-container").append("<div class='quadrato'></div>");
    }
    // Intercetto click su quadratino:
    $(".quadrato").click(function() {
        // Uso una classe di supporto per indicare l'elemento selezionato (problemi con "this" nella AJAX):
        $(this).addClass("selected");
        // Faccio partire una chiamata API, per valutare il colore:
        $.ajax({
            "url":"https://flynn.boolean.careers/exercises/api/random/int",
            "method":"GET",
            "success":function(data){
                // Metto a console il numero per valutare correttezza colorazione.
                console.log(data.response);
                if (data.response > 5) {
                    // Prendo l'elemento selezionato, lo coloro, lo deseleziono (se non deseleziono, al prossimo step coloro tutto del colore scelto.)
                    $(".selected").addClass("green").removeClass("selected");
                } else {
                    // Come sopra, cambio colore.
                    $(".selected").addClass("yellow").removeClass("selected");
                }
            },
            "error":function(){
                alert("error");
            }
        })
    })
})
