function resta (num1,num2){
    num1=num1-num2
    console.log ("te quedan $"+num1)}

let dinero = parseInt (prompt("ingresa tu dinero"))

let totalApagar= 500

	alert("procesando compra...")
	for (let i = 0; i <= 3; i++) {
	    alert("paso: "+i+"/3");
	}
if (dinero >= totalApagar) {
    alert("compra realizada")
    resta(dinero,totalApagar)
} 
else {
    let tarjeta = parseInt (prompt("dinero insuficiente, si tienes tarjeta de credito pon 1, si no, pon 2"))
    if (tarjeta === 1){
        alert("Compraste con la tarjeta de credito")
    }
    else {
        alert("no se realizó la compra")
    }
}