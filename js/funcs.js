var racaSelec;


function mudar(){
  var botao = document.getElementById('racas');
  var pRaca = document.getElementById('raca');
  var pNorte = document.getElementById('norte');
  var pNilfgaard = document.getElementById('Nilfgaard');
  var pSkellige = document.getElementById('Skellige');
  var pDol = document.getElementById('dol');
  var pMahakam = document.getElementById('Mahakam');
  var botaoDado = document.getElementById('btn-desligado');

    pRaca.innerHTML = "Humano";
    pNorte.innerHTML = "Igual";
    pSkellige.innerHTML = "Igual";
    pNilfgaard.innerHTML = "Igual";
    pDol.innerHTML = "Odiado (-2 em sedução, carisma, persuasão e liderança)";
    pMahakam.innerHTML = "tolerado (-1 em sedução, carisma, persuasão e liderança)";
    racaSelec = "Humano";

    botaoDado.innerHTML = "<button class='sortear' id='btn-dado1' onclick='rolarDado()'' ><p id='dado1'>Sortear</p></button>'";


  }
function mudar2(){
  var botao = document.getElementById('racas');
  var pRaca = document.getElementById('raca');
  var pNorte = document.getElementById('norte');
  var pNilfgaard = document.getElementById('Nilfgaard');
  var pSkellige = document.getElementById('Skellige');
  var pDol = document.getElementById('dol');
  var pMahakam = document.getElementById('Mahakam');
  var btndado1 = document.getElementById('btn-dado1');

    pRaca.innerHTML = "Elfo";
    pNorte.innerHTML = "Odiado (-2 em sedução, carisma, persuasão e liderança)";
    pSkellige.innerHTML = "Igual";
    pNilfgaard.innerHTML = "Igual";
    pDol.innerHTML = "Igual";
    pMahakam.innerHTML = "Igual";
    racaSelec = "Elfo";


  }
function mudar3(){
  var botao = document.getElementById('racas');
  var pRaca = document.getElementById('raca');
  var pNorte = document.getElementById('norte');
  var pNilfgaard = document.getElementById('Nilfgaard');
  var pSkellige = document.getElementById('Skellige');
  var pDol = document.getElementById('dol');
  var pMahakam = document.getElementById('Mahakam');
    pRaca.innerHTML = "Anão";
    pNorte.innerHTML = "tolerado (-1 em sedução, carisma, persuasão e liderança)";
    pSkellige.innerHTML = "Igual";
    pNilfgaard.innerHTML = "Igual";
    pDol.innerHTML = "Igual";
    pMahakam.innerHTML = "Igual";
    racaSelec = "Anão";
  }
function mudar4(){
  var botao = document.getElementById('racas');
  var pRaca = document.getElementById('raca');
  var pNorte = document.getElementById('norte');
  var pNilfgaard = document.getElementById('Nilfgaard');
  var pSkellige = document.getElementById('Skellige');
  var pDol = document.getElementById('dol');
  var pMahakam = document.getElementById('Mahakam');
    pRaca.innerHTML = "Bruxo";
    pNorte.innerHTML = "Odiado/Temido (+1 em intimidação, -3 em carisma e -2 em sedução, persuasão e liderança)";
    pSkellige.innerHTML = "tolerado (-1 em sedução, carisma, persuasão e liderança)";
    pNilfgaard.innerHTML = "Odiado/Temido (+1 em intimidação -3 em carisma e -2 em sedução, persuasão e liderança)";
    pDol.innerHTML = "tolerado (-1 em sedução, carisma, persuasão e liderança)";
    pMahakam.innerHTML = "tolerado (-1 em sedução, carisma, persuasão e liderança)";
    racaSelec = "Bruxo";
  }

  function show(){
    var botaoMostrar = document.getElementById('botaoMostrar');
    botaoMostrar.innerHTML = racaSelec;
  }

  function rolarDado(){
    var botao = document.getElementById('dado1');

    var rand = Math.floor(Math.random()*10 + 1);
    botao.innerHTML = rand;
  }
