var equipaVisitante = sessionStorage.getItem('equipaVisitante');
var equipaCasa = sessionStorage.getItem('equipaCasa');
console.log(equipaVisitante);
console.log(equipaCasa);

var nrImagemSelec = null;
var titularesJogo = [];
var suplentesJogo = [];

var imgProp = {
    'padding': '3px',
    'backgroundColor': '#eded01',
    'borderSize': '1ps',
    'borderStyle': 'none',

};

function highlightImg() {

    var allimgs = document.getElementById('idelm').getElementsByTagName('img');
    var nrallimgs = allimgs.length;

    for(i=0; i<nrallimgs; i++) {
        allimgs[i].onclick=function() {

            if(this.style.borderStyle == imgProp.borderStyle) {
                this.style.padding = 'auto';
                this.style.background = 'none';
                this.style.border = 'hidden';
            }
            else {
                this.style.padding = imgProp.padding;
                this.style.backgroundColor = imgProp.backgroundColor;
                this.style.borderSize = imgProp.borderSize;
                this.style.borderStyle = imgProp.borderStyle;
                nrImagemSelec = this.id;
                console.log(nrImagemSelec);
                //  this.style.borderColor = imgProp.borderColor;
            }
        }
    }
}

// calls the highlightImg() function to apply the effect
//highlightImg();

function bigImg(x) {
    x.style.height = "75px";
}

function normalImg(x) {
    x.style.height = "65px";
    x.style.width = "150px";
}

var epageX;
var epageY;

$(document).ready(function () {
    document.getElementById('campo').onclick = function (e) {
        var x = e.pageX;
        var y = e.pageY;
        var marker = document.getElementById('marker');
        marker.style.position = "fixed";
        marker.style.left = x;
        marker.style.top = y;
        marker.style.display = "block";
        marker.style.visibility = "visible"
        marker.style.width = "20px"
        epageX = (x - this.getBoundingClientRect().left) / this.getBoundingClientRect().width;
        epageY = (y - this.getBoundingClientRect().top) / this.getBoundingClientRect().height;
        console.log(epageX + " " + epageY);
    };
});
    /* Start button */
    //start.onclick = timer;

    /* Stop button */
   /* stop.onclick = function() {
        clearTimeout(t);
    }

    /* Clear button */
   /*
    clear.onclick = function() {
        p3.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
        clearTimeout(t);
    }
*/

function guardarCestoConvertido() {

    var acao = "CestoConvertido";

    var CestoConvertido = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }
        console.log(CestoConvertido);

    $.ajax({
        type: 'post',
        url: '/api/estatisticas/enviarRegisto',
        data: {
            cestoConvertido : JSON.stringify(CestoConvertido)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })



}

function guardarCestoFalhado() {

    var acao = "CestoFalhado";

    var CestoFalhado = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }
    console.log(CestoFalhado);

    $.ajax({
        type: 'post',
        url: '/api/estatisticas/enviarCestoFalhado',
        data: {
            cestoFalhado : JSON.stringify(CestoFalhado)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
}

function guardarFaltaDesqualificante() {

    var acao = "FaltaDesqualificante";

    var FaltaDesqualificante = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }
    console.log(FaltaDesqualificante);

    $.ajax({
        type: 'post',
        url: '/api/estatisticas/enviarFaltaDesqualificante',
        data: {
            faltaDesqualificante : JSON.stringify(FaltaDesqualificante)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
}

function guardarFaltaPessoal() {

    var acao = "FaltaPessoal";

    var FaltaPessoal = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }
    console.log(FaltaPessoal);

    $.ajax({
        type: 'post',

        url: '/api/estatisticas/enviarFaltaPessoal',
        data: {
            faltaPessoal : JSON.stringify(FaltaPessoal)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
}

function guardarFaltaTecnica() {

    var acao = "FaltaTecnica";

    var FaltaTecnica = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }
    console.log(FaltaTecnica);

    $.ajax({
        type: 'post',
        url: '/api/estatisticas/enviarFaltaTecnica',
        data: {
            faltaTecnica : JSON.stringify(FaltaTecnica)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
}

function guardarFaltaAntiDesportiva() {

    var acao = "AntiDesportiva";

    var AntiDesportiva = {
        equipaCasa: equipaCasa,
        equipaVisitante: equipaVisitante,
        x: epageX,
        y: epageY,
        nomeJogador: titularesJogo[nrImagemSelec - 1],
        acao: acao
    }

    $.ajax({
        type: 'post',
        url: '/api/estatisticas/enviarAntiDesportiva',
        data: {
            antiDesportiva : JSON.stringify(AntiDesportiva)
        },
        success: function(response) {
            console.log(response);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    })
}

    $(document).ready(function () {
        $.ajax({
            type: 'get',
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
                $('#nomeJogador1').html(elems[0].titulares[0]);
                $('#nomeJogador2').html(elems[0].titulares[1]);
                $('#nomeJogador3').html(elems[0].titulares[2]);
                $('#nomeJogador4').html(elems[0].titulares[3]);
                $('#nomeJogador5').html(elems[0].titulares[4]);
                $('#nomeJogador6').html(elems[0].suplentes[0]);
                $('#nomeJogador7').html(elems[0].suplentes[1]);
                $('#nomeJogador8').html(elems[0].suplentes[2]);

            },
            error: function (xhr) {
                console.log(xhr);
            }
        })
    });

    $(document).ready(function () {
        $.ajax({
            type: 'get',
            url: '/api/equipas/TitularesSuplentes',
            data: {
                equipa1: equipaVisitante
            },
            success: function (response) {
                var elems = JSON.parse(response);
                for(var i = 0; i < elems[0].titulares.length; i++){
                    titularesJogo.push(elems[0].titulares[i]);
                }
                for(var i = 0; i < elems[0].suplentes.length; i++){
                    titularesJogo.push(elems[0].suplentes[i]);
                }
                $('#equipaVisitante').html(equipaVisitante);
                $('#nomeJogador9').html(elems[0].titulares[0]);
                $('#nomeJogador10').html(elems[0].titulares[1]);
                $('#nomeJogador11').html(elems[0].titulares[2]);
                $('#nomeJogador12').html(elems[0].titulares[3]);
                $('#nomeJogador13').html(elems[0].titulares[4]);
                $('#nomeJogador14').html(elems[0].suplentes[0]);
                $('#nomeJogador15').html(elems[0].suplentes[1]);
                $('#nomeJogador16').html(elems[0].suplentes[2]);
            },
            error: function (xhr) {
                console.log(xhr);
            }
        })
    });
