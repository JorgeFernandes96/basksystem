var equipaVisitante = sessionStorage.getItem('equipaVisitante');
var equipaCasa = sessionStorage.getItem('equipaCasa');
console.log(equipaVisitante);
console.log(equipaCasa);
var titularesJogo = [];
var cestosMarcados = 0;
var cestosFalhados = 0;
var faltasDesqualificantes = 0;
var faltasPessoal = 0;
var faltasTecnicas = 0;
var faltaAntiDesportiva = 0;
var elementos;
var nomeJogador;
var cWidth = 270;
var cHeight = 500;
var campo = new Image();
campo.src = "images/campo.png";
var marker = new Image();
marker.src = "https://image.flaticon.com/icons/svg/10/10660.svg";
var canvas;

$(document).ready(function(){
    //initialize after images are loaded
    console.log("Canvas");
    canvas = document.getElementById("canvas");
    canvas.width = cWidth;
    canvas.height = cHeight;
    area = canvas.getContext("2d");
    area.drawImage(campo, 10, 70, cWidth-10, cHeight-70);
});

$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: '/api/estatisticas/dadosEstatisticos',
        data: {
            equipa1: equipaCasa
        },
        success: function(response) {
            elementos = JSON.parse(response);
            for(i = 0; i < elementos[0].estatisticas.length; i++){
                if(elementos[0].estatisticas[i].acao === "CestoConvertido"){ cestosMarcados++}
                if(elementos[0].estatisticas[i].acao === "CestoFalhado"){ cestosFalhados++}
                if(elementos[0].estatisticas[i].acao === "FaltaDesqualificante"){ faltasDesqualificantes++}
                if(elementos[0].estatisticas[i].acao === "FaltaPessoal"){ faltasPessoal++}
                if(elementos[0].estatisticas[i].acao === "FaltaTecnica"){ faltasTecnicas++}
                if(elementos[0].estatisticas[i].acao === "AntiDesportiva"){ faltaAntiDesportiva++}
            }
            $('#cestosConvertidos').html(cestosMarcados);
            $('#cestosFalhados').html(cestosFalhados);
            $('#faltasDesqualificante').html(faltasDesqualificantes);
            $('#faltaPessoal').html(faltasPessoal);
            $('#faltaTecnica').html(faltasTecnicas);
            $('#faltaAntiDesportiva').html(faltaAntiDesportiva);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
});

$(document).ready(function () {
    $.ajax({
        type: 'get',
        //  data: jQuery.param({ field1: "Jorge"}) ,
        url: '/api/equipas/TitularesSuplentes',
        data: {
            equipa1: equipaCasa
        },
        success: function (response) {
            var elems = JSON.parse(response);
            for(var i = 0; i < elems[0].titulares.length; i++){
                titularesJogo.push(elems[0].titulares[i]);
            }
            for(var i = 0; i < elems[0].suplentes.length; i++){
                titularesJogo.push(elems[0].suplentes[i]);
            }

            $('#equipaCasa').html(equipaCasa);
            $('#jogador1').html(elems[0].titulares[0]);
            $('#jogador2').html(elems[0].titulares[1]);
            $('#jogador3').html(elems[0].titulares[2]);
            $('#jogador4').html(elems[0].titulares[3]);
            $('#jogador5').html(elems[0].titulares[4]);
            $('#jogador6').html(elems[0].suplentes[0]);
            $('#jogador7').html(elems[0].suplentes[1]);
            $('#jogador8').html(elems[0].suplentes[2]);

        },
        error: function (xhr) {
            //Do Something to handle error
            console.log(xhr);
        }
    })
});

function openCity(evt, cityName) {
    nomeJogador = document.getElementById(cityName).innerHTML;
    cestosMarcados = 0;
    cestosFalhados = 0;
    faltaAntiDesportiva = 0;
    faltasTecnicas = 0;
    faltasPessoal =0;
    faltasDesqualificantes =0;
    
    for(i = 0; i < elementos[0].estatisticas.length; i++){
        if(elementos[0].estatisticas[i].acao === "CestoConvertido" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ cestosMarcados++}
        if(elementos[0].estatisticas[i].acao === "CestoFalhado" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ cestosFalhados++}
        if(elementos[0].estatisticas[i].acao === "FaltaDesqualificante" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ faltasDesqualificantes++}
        if(elementos[0].estatisticas[i].acao === "FaltaPessoal" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ faltasPessoal++}
        if(elementos[0].estatisticas[i].acao === "FaltaTecnica" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ faltasTecnicas++}
        if(elementos[0].estatisticas[i].acao === "AntiDesportiva" && elementos[0].estatisticas[i].nomeJogador == document.getElementById(cityName).innerHTML){ faltaAntiDesportiva++}
    }
    $('#cestosConvertidos').html(cestosMarcados);
    $('#cestosFalhados').html(cestosFalhados);
    $('#faltasDesqualificante').html(faltasDesqualificantes);
    $('#faltaPessoal').html(faltasPessoal);
    $('#faltaTecnica').html(faltasTecnicas);
    $('#faltaAntiDesportiva').html(faltaAntiDesportiva);
}

function cestosMarcadosXY() {
    cestosMarcados = 0;
    cestosFalhados = 0;
    faltaAntiDesportiva = 0;
    faltasTecnicas = 0;
    faltasPessoal = 0;
    faltasDesqualificantes = 0;
    area.drawImage(campo, 10, 70, cWidth-10, cHeight-70);
    for (i = 0; i < elementos[0].estatisticas.length; i++) {
        if (elementos[0].estatisticas[i].acao === "CestoConvertido" && elementos[0].estatisticas[i].nomeJogador == nomeJogador) {
                area = canvas.getContext("2d");
            area.drawImage(marker, elementos[0].estatisticas[i].x*cWidth+10, elementos[0].estatisticas[i].y*cHeight+70, 10, 10);
                console.log("X"+elementos[0].estatisticas[i].x);
                console.log("Y"+elementos[0].estatisticas[i].y);

        }
    }
}

