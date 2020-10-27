// configurações do jogo
var rescDadosX = []
var rescDadosO = []
var comecDeNovo = false
var vezJogador = Math.floor(Math.random() * 2 + 1)
var inparte = 1

//elementos html
var tr = []
var td = []
var table = document.getElementsByTagName("table")[0]
var input = document.getElementsByTagName("input")[0]

function comecar () { //essa função é responsável para mostrar o jogo e configurar as variáveis  que vão receber os elementos HTML

   if (comecDeNovo == true) {// isso vai recarregar a página quando o usuário clicar no botão "jogar" se a partida acabar
   
      location.reload()
   } else {
      
      switch (vezJogador) {
         case 1:
            alert("X vai começar")
         break;
      
         case 2:
            alert("O vai começar")
         break;
      }
   
      for (var contador = 0; contador <= 8; contador++) {
         td[contador] = document.getElementsByTagName("td")[contador]
         td[contador].setAttribute("onclick",`jogarEm${contador}()`)
      }
   
      for (var contador = 0; contador <= 2; contador++) {
         tr[contador] = document.getElementsByTagName("tr")[contador]
      }
   
      table.setAttribute("id", "tableMostrar")
      input.className = "displayNone"
   }
}

function verificar (quemGanhou, inparte) { // essa função é para verificar se o jogador ganhou, se o jogador ganhou vai aparecer um alerta dizendo que ele ganhou
   /*

   [0] [1] [2]
   [3] [4] [5]
   [6] [7] [8]

   */
  var ganhou = false

   if (quemGanhou == 1) {

      if (
         rescDadosX[0] == "X" && rescDadosX[1] == "X" && rescDadosX[2] == "X" ||
         rescDadosX[3] == "X" && rescDadosX[4] == "X" && rescDadosX[5] == "X" ||
         rescDadosX[6] == "X" && rescDadosX[7] == "X" && rescDadosX[8] == "X" ||

         rescDadosX[0] == "X" && rescDadosX[3] == "X" && rescDadosX[6] == "X" ||
         rescDadosX[2] == "X" && rescDadosX[5] == "X" && rescDadosX[8] == "X" ||
         rescDadosX[0] == "X" && rescDadosX[4] == "X" && rescDadosX[8] == "X" ||

         rescDadosX[3] == "X" && rescDadosX[4] == "X" && rescDadosX[5] == "X" ||
         rescDadosX[1] == "X" && rescDadosX[4] == "X" && rescDadosX[7] == "X" ||
         rescDadosX[2] == "X" && rescDadosX[4] == "X" && rescDadosX[6] == "X"
         ) {
         alert("parabéns para o jogador que tá jogando com o X")
         
         input.id = "inputGanhou"
         comecDeNovo = true
         ganhou = true
      }
   } else {
      if (
         rescDadosO[0] == "O" && rescDadosO[1] == "O" && rescDadosO[2] == "O" ||
         rescDadosO[3] == "O" && rescDadosO[4] == "O" && rescDadosO[5] == "O" ||
         rescDadosO[6] == "O" && rescDadosO[7] == "O" && rescDadosO[8] == "O" ||

         rescDadosO[0] == "O" && rescDadosO[3] == "O" && rescDadosO[6] == "O" ||
         rescDadosO[2] == "O" && rescDadosO[5] == "O" && rescDadosO[8] == "O" ||
         rescDadosO[0] == "O" && rescDadosO[4] == "O" && rescDadosO[8] == "O" ||

         rescDadosO[3] == "O" && rescDadosO[4] == "O" && rescDadosO[5] == "O" ||
         rescDadosO[1] == "O" && rescDadosO[4] == "O" && rescDadosO[7] == "O" ||
         rescDadosO[2] == "O" && rescDadosO[4] == "O" && rescDadosO[6] == "O"
       ) {
         alert("parabéns para o jogador que tá jogando com o O")

         input.id = "inputGanhou"
         comecDeNovo = true
         ganhou = true
      }
   }

   if (inparte == 9 && ganhou == false) {
      alert("inparte!")
      input.id = "inputGanhou"
      comecDeNovo = true
   }
}

function jogarEm0 () {
   if (vezJogador == 1) {

      if (
         td[0].innerText == "X" || td[0].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[0] = "X"
         td[0].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
      
   } else {
      if (
         td[0].innerText == "X" || td[0].innerText[0] == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosO[0] = "O"
         td[0].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm1() {
   if (vezJogador == 1) {

      if (
         td[1].innerText == "X" || td[1].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[1] = "X"
         td[1].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[1].innerText == "X" || td[1].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[1] = "O"
         td[1].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm2() {
   if (vezJogador == 1) {

      if (
         td[2].innerText == "X" || td[2].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[2] = "X"
         td[2].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[2].innerText == "X" || td[2].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[2] = "O"
         td[2].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm3() {
   if (vezJogador == 1) {

      if (
         td[3].innerText == "X" || td[3].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[3] = "X"
         td[3].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[3].innerText == "X" || td[3].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[3] = "O"
         td[3].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm4() {
   if (vezJogador == 1) {

      if (
         td[4].innerText == "X" || td[4].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[4] = "X"
         td[4].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[4].innerText == "X" || td[4].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[4] = "O"
         td[4].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm5() {
   if (vezJogador == 1) {

      if (
         td[5].innerText == "X" || td[5].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[5] = "X"
         td[5].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[5].innerText == "X" || td[5].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[5] = "O"
         td[5].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm6() {
   if (vezJogador == 1) {

      if (
         td[6].innerText == "X" || td[6].innerText == "O" ||
         comecDeNovo == true
      ) {
         alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[6] = "X"
         td[6].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[6].innerText == "X" || td[6].innerText == "O" ||
         comecDeNovo == true
         ) {
            alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[6] = "O"
         td[6].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm7() {
   if (vezJogador == 1) {

      if (
         td[7].innerText == "X" || td[7].innerText == "O" ||
         comecDeNovo == true
         ) {
            alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[7] = "X"
         td[7].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[7].innerText == "X" || td[7].innerText == "O" ||
         comecDeNovo == true
         ) {
            alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[7] = "O"
         td[7].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}

function jogarEm8() {
   if (vezJogador == 1) {

      if (
         td[8].innerText == "X" || td[8].innerText == "O" ||
         comecDeNovo == true
         ) {
            alert("Ops, lugar invalido ou a partida acabou!")
      } else {

         rescDadosX[8] = "X"
         td[8].innerText = "X"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 2
      }
   } else {
      if (
         td[8].innerText == "X" || td[8].innerText == "O" ||
         comecDeNovo == true
         ) {
            alert("Ops, lugar invalido ou a partida acabou!")
      } else {
         rescDadosO[8] = "O"
         td[8].innerText = "O"
         verificar(vezJogador, inparte)
         inparte = inparte + 1
         vezJogador = 1
      }
   }
}