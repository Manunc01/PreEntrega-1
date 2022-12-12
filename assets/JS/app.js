//ARRAY DE PRODUCTOS
const Productos = [
  { id: 1, producto: "Remera", precio: 1000 },
  { id: 2, producto: "Jean", precio: 2000},
  { id: 3, producto: "Campera", precio: 7800},
  { id: 4, producto: "Buzo", precio: 5000},
  { id: 5, producto: "Zapatos", precio: 15000},
];

//MOSTRAR LA LISTA DE PRODUCTOS
alert("elija uno o mas de los siguientes productos");
for (const i of Productos) {
  alert(i.id + ".- " + i.producto + " $" + i.precio);
  console.log(i.id+".-" + i.producto + " $"+i.precio)
}

//DECLARACIÓN DE VARIABLES
let carrito = [];
let productoSeleccionado;
let montoTotal = 0
let carritoProductos = []

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
      carritoProductos.push(i.producto)
      return carrito, carritoProductos;
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
alert(`Los productos seleccionados son:
${carritoProductos}.

El total es de: $${montoTotal}`)

