
let dinero = parseInt (prompt("ingresa tu dinero"))

let totalApagar= 500


if (dinero >= totalApagar) {
    alert("compra realizada")
    dinero = dinero - totalApagar
    alert("Te quedan $"+dinero)
} 
else {
    let tarjeta = parseInt (prompt("Si tienes tarjeta de credito pon 1, si no, pon 2"))
    if (tarjeta === 1){
        alert("Compraste con la tarjeta de credito")
    }
    else {
        alert("no se realizó la compra")
    }
}