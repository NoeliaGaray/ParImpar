rótulo.innerHTML = "Ingresar número: ";
let número: number = Number(dato1.value);
let divisor: number = 2;
let división: number = número % divisor;
let cero: number = 0;
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let btnEnv = document.getElementById("btnEnviar");
  let número: number = Number(dato1.value);
  let divisor: number = 2;
  let división: number = número % divisor;
  let cero: number = 0;
  if (división === cero) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
  if (número === 0) {
    console.log("El número es cero");
  }
});
