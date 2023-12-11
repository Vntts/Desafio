//NOME DO PERSONAGEM
console.log ("Qual seu nome?")
let nickname = "Tião do facão"
let XP = 9214
let nivel;
console.log("Bem vindo " + nickname);
// Variáveis para armazenar a quantidade de experiência do herói
if (XP < 1000) {
    console.log("O herói " + nickname + " ainda é liga de ferro");
} else if (XP >= 1001 && XP <=2000){
console.log ("O herói " + nickname + " ainda é liga de ferro")
} else if (XP >= 2001 && XP <= 5000){
  console.log ("O herói " + nickname + "ainda é liga de prata")
} else if (XP >= 6001 && XP <= 7000){
  console.log ("O herói " + nickname + " agora é liga de ouro")
} else if (XP >= 7001 && XP <= 8000){
  console.log("O herói " + nickname + "ja é platina")
} else if (XP >= 8001 && XP <= 9000){
  console.log ("O herói " + nickname + " é liga de ascendente")
} else if (XP >= 9001 && XP <= 10000){
  console.log ("O herói " + nickname + " ultrapassou o nivel humano e agora é um imortal!")
} else {
  console.log("O herói " + nickname + "é de nível Radiante.")
}
console.log ("O herói de nome " +nickname + " esta no nivel imortal")
