function myFunction(x) {
   // alert("Row index is: " + x.rowIndex);
    sessionStorage.setItem('equipaCasa', document.getElementById('equipaCasa'+x.rowIndex).textContent);
    sessionStorage.setItem('equipaVisitante', document.getElementById('equipaVisitante'+x.rowIndex).textContent);
}


$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: '/api/calendario/calendario',
        data: {

        },
        success: function(response) {
            var elems = JSON.parse(response);
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
            console.log(xhr);
        }
    })
})

