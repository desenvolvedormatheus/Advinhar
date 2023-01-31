const numEntrada = document.querySelector("#numEntrada");
const btnadvinhar = document.querySelector("#btnadvinhar");
const res = document.querySelector("#res");

let nAleatorio = Math.floor(Math.random() * 100);

btnadvinhar.addEventListener("click", function() {
  if(numEntrada.value == ''){
    res.textContent = "Campo não pode estar vazio";
  } else if (numEntrada.value == nAleatorio) {
    res.textContent = "Acertou!";
  } else if (numEntrada.value < nAleatorio) {
    res.textContent = "O número é maior.";
  } else {
    res.textContent = "O número é menor.";
  }
});
