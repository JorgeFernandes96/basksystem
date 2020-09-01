function myFunction(x) {
    // alert("Row index is: " + x.rowIndex);
    sessionStorage.setItem('equipaCasa', document.getElementById('equipaCasa'+x.rowIndex).textContent);
    sessionStorage.setItem('equipaVisitante', document.getElementById('equipaVisitante'+x.rowIndex).textContent);
    console.log("myFunction(x)")
}

$(document).ready(function () {
    console.log("receberJogos()");
    $.ajax({
        type: 'get',
        //  data: jQuery.param({ field1: "Jorge"}) ,
        url: '/api/calendario/calendario',
        data: {

        },
        success: function(response) {
            var elems = JSON.parse(response);
            console.log(elems);
            $('#equipaCasa1').html(elems[0].equipaCasa);
            $('#equipaVisitante1').html(elems[0].equipaVisitante);
            $('#resultado1').html(elems[0].resultado);
            $('#data1').html(elems[0].data);

            $('#equipaCasa2').html(elems[1].equipaCasa);
            $('#equipaVisitante2').html(elems[1].equipaVisitante);
            $('#resultado2').html(elems[1].resultado);
            $('#data2').html(elems[1].data);

        },
        error: function(xhr) {
            //Do Something to handle error
            console.log(xhr);
        }
    })
})