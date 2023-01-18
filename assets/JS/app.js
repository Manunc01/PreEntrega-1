//FAKE STORE API
fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            let nuevoProducto = document.createElement("div")
            nuevoProducto.classList.add("cartaProducto")
            nuevoProducto.innerHTML = `<span>${product.title}</span>
    <img src="${product.image}" alt="${product.name}">
    <p>$${product.price}</p>
    <button id="${product.id}" class="btnSumar">Sumar al Carrito</button>`

            contenedorProductos.appendChild(nuevoProducto);
        });
        let btnSumar = document.querySelectorAll(".btnSumar");
        btnSumar.forEach(btn => {
            btn.addEventListener("click", (i) => {
                elegirProducto(i.target.id)
                sumarPrecios();
                alertaAgregado();
            })
        })
    })
//DECLARACIÓN DE VARIABLES
let carrito = [];
let montoFinal = 0;
let carritoProductos = [];
let montoTotal = document.querySelector("#montoTotal");
let productos = document.querySelector("#productos");
let precios = document.querySelector("#precios");
let guardar = document.querySelector("#guardar");
let vaciar = document.querySelector("#vaciar");
let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));
let contenedorProductos = document.querySelector(".contenedorProductos")
let carritoProductosEnLS = JSON.parse(localStorage.getItem("productosCarrito"));
//INICIAR APP CON CARRITO DE LOCAL STORAGE Y TOTAL
if (carritoEnLS) {
    carrito = carritoEnLS;
}
if (carritoProductosEnLS) {
    carritoProductos = carritoProductosEnLS;
}
sumarPrecios()
//MOSTRANDO LOS DATOS ALMACENADOS
montoTotal.innerHTML = `$${montoFinal}`;
mostrarProductos();
//FUNCION PARA SUMAR PRODUCTOS AL CARRITO
function elegirProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(prod => {
            carrito.push(prod)
            console.log(carrito)
            mostrarProductos()
            sumarPrecios()
            console.log(montoFinal)
            montoTotal.innerHTML = `$${montoFinal}`;
        })
}
//FUNCION SUMAR PRECIOS
function sumarPrecios() {
    montoFinal = 0;
    carrito.forEach(i => {
        montoFinal += i.price
    });
    return montoFinal
}
//FUNCION PARA MOSTRAR PRODUCTOS DEL CARRITO EN EL HTML
function mostrarProductos() {
    productos.innerHTML = "";
    for (const i of carrito) {
        let li = document.createElement("li");
        li.innerHTML = `<span>${i.title}</span>
   <span>$${i.price}</span>`;
        productos.appendChild(li);
    }
}

//FUNCION SWEET ALERT--------------------------
function alertaAgregado() {
    Swal.fire({
        title: "¡Agregado!",
        text: "Has agregado este producto al carrito",
        icon: "success",
        confirmationButtonText: "Aceptar",
    })
}
// BOTON PARA GUARDAR EN LOCALSTORAGE
guardar.onclick = () => {
    const enJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", enJSON);
    const enJSON2 = JSON.stringify(carritoProductos);
    localStorage.setItem("productosCarrito", enJSON2);
};
//BOTON PARA VACIAR EL CARRITO
vaciar.onclick = () => {
    carrito = []
    montoFinal = 0
    mostrarProductos()
    const enJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", enJSON);
    const enJSON2 = JSON.stringify(carritoProductos);
    localStorage.setItem("productosCarrito", enJSON2);
    montoTotal.innerHTML = `$${montoFinal}`;

}