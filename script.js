let inicio = document.getElementById("txti");
let fim = document.getElementById("txtf");
let passo = document.getElementById("txts");
let resultado = document.getElementById("res");

function contar() {
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    resultado.innerHTML = "Impossivel contar!";
    alert("[Error] - Faltam dados!");
  } else {
    resultado.innerHTML = "Contando:";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando salto 1");
      p = 1;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += ` ${c} \u{1F449}`;
      }
    } else
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += ` ${c} \u{1F449}`;
      }
    resultado.innerHTML += `\u{1F3C1}`;
  }
}
