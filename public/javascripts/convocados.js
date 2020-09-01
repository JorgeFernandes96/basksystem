var equipaVisitante = sessionStorage.getItem('equipaVisitante');
var equipaCasa = sessionStorage.getItem('equipaCasa');
console.log(equipaVisitante);
console.log(equipaCasa);
var titulares = [];
var suplentes = [];

$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: '/api/equipas/jogadores',
        data: {
            equipa1: equipaCasa
        },
        success: function(response) {
            var elems = JSON.parse(response);
            $('#jogador1').html(elems[0].nomeJogador);
            $('#jogador2').html(elems[1].nomeJogador);
            $('#jogador3').html(elems[2].nomeJogador);
            $('#jogador4').html(elems[3].nomeJogador);
            $('#jogador5').html(elems[4].nomeJogador);
            $('#jogador6').html(elems[5].nomeJogador);
            $('#jogador7').html(elems[6].nomeJogador);
            $('#jogador8').html(elems[7].nomeJogador);

        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
});

function clickAlert() {

    if(document.getElementById("titular1").checked){
        var nome = document.getElementById("jogador1").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular2").checked){
        var nome = document.getElementById("jogador2").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular3").checked){
        var nome = document.getElementById("jogador3").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular4").checked){
        var nome = document.getElementById("jogador4").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular5").checked){
        var nome = document.getElementById("jogador5").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular6").checked){
        var nome = document.getElementById("jogador6").textContent;
        titulares.push(nome);
    }
    if(document.getElementById("titular7").checked){
        var nome = document.getElementById("jogador7").textContent;
        titulares.push(nome);
    }

    if(document.getElementById("titular8").checked){
        var nome = document.getElementById("jogador8").textContent;
        titulares.push(nome);
    }


    if(document.getElementById("suplente1").checked){
        var nome = document.getElementById("jogador1").textContent;
        suplentes.push(nome);
    }

    if(document.getElementById("suplente2").checked){
        var nome = document.getElementById("jogador2").textContent;
        suplentes.push(nome);
    }

    if(document.getElementById("suplente3").checked){
        var nome = document.getElementById("jogador3").textContent;
        suplentes.push(nome);
    }
    if(document.getElementById("suplente4").checked){
        var nome = document.getElementById("jogador4").textContent;
        suplentes.push(nome);
    }
    if(document.getElementById("suplente5").checked){
        var nome = document.getElementById("jogador5").textContent;
        suplentes.push(nome);
    }
    if(document.getElementById("suplente6").checked){
        var nome = document.getElementById("jogador6").textContent;
        suplentes.push(nome);
    }
    if(document.getElementById("suplente7").checked){
        var nome = document.getElementById("jogador7").textContent;
        suplentes.push(nome);
    }
    if(document.getElementById("suplente8").checked){
        var nome = document.getElementById("jogador8").textContent;
        suplentes.push(nome);
    }



        console.log(titulares);
        console.log(suplentes);
        $.ajax({
            type: 'PUT',
            url: '/api/equipas/updateConvocados',
                data:{
                    equipaVisitante: equipaVisitante,
                    equipaCasa: equipaCasa,
                    titulares: titulares,
                    suplentes: suplentes
                }
        ,
            success: function(response) {
                console.log("Bem Sucedido");
            },
            error: function(xhr) {
                console.log(xhr);
            }
        })
    window.location.href = "https://basksys.herokuapp.com/";
    }


