//ARRAY DE PRODUCTOS
const Productos = [
  { id: 1, producto: "manzana", precio: 50 },
  { id: 2, producto: "banana", precio: 40 },
];

//MOSTRAR LA LISTA DE PRODUCTOS
alert("elija uno o mas de los siguientes productos");
for (const i of Productos) {
  alert(i.id + ".- " + i.producto + " $" + i.precio);
}
//DECLARACIÓN DE VARIABLES
let carrito = [];
let productoSeleccionado;
let montoTotal = 0

//FUNCION PARA SUMAR PRODUCTOS AL CARRITO
function elegirProductos(arr) {
  productoSeleccionado = parseInt(
    prompt(
      "escriba el indice de un producto para sumar al carrito, o 0 para salir."
    )
  );
  for (i of arr) {
    if (i.id === productoSeleccionado) {
      carrito.push(i.precio);
      return carrito;
    }
  }
  return productoSeleccionado;
}
//FUNCION PARA SUMAR ELEMENTOS
function sumarElementos (arr){
    for (let e of arr) {
        montoTotal += e;
    }
}
//LLAMDA A LA FUNCIÓN
elegirProductos(Productos);

//BUCLE PARA AGREGAR VARIOS PRODUCTOS
while (productoSeleccionado !== 0) {
    elegirProductos(Productos)
}
//LLAMADA A LA FUNCIÓN DE SUMAR ELEMENTOS
sumarElementos(carrito)

//MOSTRAR EL MONTO FINAL
alert("El Total a pagar es $"+montoTotal)
