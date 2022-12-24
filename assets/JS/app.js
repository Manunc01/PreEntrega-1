//ARRAY DE PRODUCTOS
const Productos = [
  { id: 1, producto: "Remera", precio: 1000 },
  { id: 2, producto: "Jean", precio: 2000 },
  { id: 3, producto: "Campera", precio: 7800 },
  { id: 4, producto: "Buzo", precio: 5000 },
  { id: 5, producto: "Zapatos", precio: 15000 },
];

//DECLARACIÓN DE VARIABLES
let carrito = [];
let montoFinal = 0;
let carritoProductos = [];
let mostrarTotal = document.querySelector("#total");
let montoTotal = document.querySelector("#montoTotal");
let agregar1 = document.querySelector("#agregar1");
let eliminar1 = document.querySelector("#eliminar1");
let agregar2 = document.querySelector("#agregar2");
let eliminar2 = document.querySelector("#eliminar2");
let agregar3 = document.querySelector("#agregar3");
let eliminar3 = document.querySelector("#eliminar3");
let agregar4 = document.querySelector("#agregar4");
let eliminar4 = document.querySelector("#eliminar4");
let agregar5 = document.querySelector("#agregar5");
let eliminar5 = document.querySelector("#eliminar5");
let productos = document.querySelector("#productos");
let precios = document.querySelector("#precios");
let guardar = document.querySelector("#guardar");
let vaciar = document.querySelector("#vaciar");
let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));
let carritoProductosEnLS = JSON.parse(localStorage.getItem("productosCarrito"));
//INICIAR APP CON CARRITO DE LOCAL STORAGE Y TOTAL
if (carritoEnLS) {
  carrito = carritoEnLS;
}
if (carritoProductosEnLS) {
  carritoProductos = carritoProductosEnLS;
}
montoFinal = carrito.reduce((a, b) => a + b, 0);
//MOSTRANDO LOS DATOS ALMACENADOS
montoTotal.innerHTML = `$${montoFinal}`;
mostrarProductos();
mostrarPrecios();
//FUNCION PARA SUMAR PRODUCTOS AL CARRITO
function elegirProducto(num, arr) {
  for (const i of arr) {
    if (i.id === num) {
      carrito.push(i.precio);
      carritoProductos.push(i.producto);
      return carrito, carritoProductos;
    }
  }
}
//FUNCIONES PARA ELMIMINAR PRODUCTOS DEL CARRITO
function eliminarPrecios(precio, arr1) {
  for (const i of arr1) {
    if (i === precio) {
      let indice = arr1.indexOf(precio);
      arr1.splice(indice, 1);
      return arr1;
    }
  }
}
function eliminarProducto(producto, arr2) {
  for (const i of arr2) {
    if (i === producto) {
      let indice = arr2.indexOf(producto);
      arr2.splice(indice, 1);
      return arr2;
    }
  }
}
//FUNCION PARA MOSTRAR PRODUCTOS DEL CARRITO EN EL HTML
function mostrarProductos() {
  productos.innerHTML = "";
  for (const i of carritoProductos) {
    let li = document.createElement("li");
    li.innerHTML = i;
    productos.appendChild(li);
  }
}
function mostrarPrecios() {
  precios.innerHTML = "";
  for (const i of carrito) {
    let li = document.createElement("li");
    li.innerHTML = `$${i}`;
    precios.appendChild(li);
  }
}
//--------------------------------DOM y EVENTS
agregar1.onclick = () => {
  elegirProducto(1, Productos);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
eliminar1.onclick = () => {
  eliminarProducto("Remera", carritoProductos);
  eliminarPrecios(1000, carrito);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
agregar2.onclick = () => {
  elegirProducto(2, Productos);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
eliminar2.onclick = () => {
  eliminarProducto("Jean", carritoProductos);
  eliminarPrecios(2000, carrito);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
agregar3.onclick = () => {
  elegirProducto(3, Productos);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
eliminar3.onclick = () => {
  eliminarProducto("Campera", carritoProductos);
  eliminarPrecios(7800, carrito);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
agregar4.onclick = () => {
  elegirProducto(4, Productos);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
eliminar4.onclick = () => {
  eliminarProducto("Buzo", carritoProductos);
  eliminarPrecios(5000, carrito);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
agregar5.onclick = () => {
  elegirProducto(5, Productos);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
eliminar5.onclick = () => {
  eliminarProducto("Zapatos", carritoProductos);
  eliminarPrecios(15000, carrito);
  montoFinal = carrito.reduce((a, b) => a + b, 0);
  montoTotal.innerHTML = `$${montoFinal}`;
  mostrarProductos();
  mostrarPrecios();
};
guardar.onclick = () => {
  const enJSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", enJSON);
  const enJSON2 = JSON.stringify(carritoProductos);
  localStorage.setItem("productosCarrito", enJSON2);
};
vaciar.onclick = () =>{
  carrito = []
  carritoProductos = []
  montoFinal = 0
  mostrarProductos()
  mostrarPrecios()
  const enJSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", enJSON);
  const enJSON2 = JSON.stringify(carritoProductos);
  localStorage.setItem("productosCarrito", enJSON2);
  montoTotal.innerHTML = `$${montoFinal}`;
}
