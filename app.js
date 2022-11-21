/*
}
let dinero = parseInt (prompt("ingresa tu dinero"))

let totalApagar= 500


if (dinero >= totalApagar) {
    alert("compra realizada")
    dinero = dinero - totalApagar
    alert("Te quedan $"+dinero)
} 
else {
    let tarjeta = parseInt (prompt("Si tienes tarjeta de credito pon 1, si no pon 2"))
    if (tarjeta === 1){
    alert("Compraste con la tarjeta de credito")
 }
 else {
    alert("no se realizó la compra")
}
*/

/*
let nombre = prompt ("ingresa tu nombre")
let apellido = prompt ("ingresa tu apellido")

if (nombre || apellido == ""){
    alert ("Datos Invalidos")
}
else {
    alert ("Su nombre completo es: "+nombre+" "+apellido)
}

let i = 0

while (i <= 6) {
    alert (i)
    i++
}
*/

let arreglo = [
    'manuel',
    'alvaro',
    'romina',
    'marcos'
]
alert ("los participantes son")
for (let nombres of arreglo) {
    alert (nombres)
}
 
