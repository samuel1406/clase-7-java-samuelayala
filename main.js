//declaro la funcion saludar
function saludar() {
    alert(
      "Bienvenido a Franchesca's Fast Food! " +
        nombre +
        " a continuacion podra escojer su comida"
    );
  }
//defino la clase del producto
class producto {
  constructor(menu, precio, cantidad){
    this.menu = menu;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
//defino arrays de precios
let precios = [
  {menu:"Hamburguesa con chedar y bacon", precio:"$550"},
  {menu:"Pizza de la casa", precio:"$850"},
  {menu:"Super lomo completo", precio:"$1200"},
  {menu:"Papas fritas con chedar y bacon", precio:"$750"},

]; 

//funcion para elegir otro producto.
function cargarProductos(arrayProductos) { 
  //tomo valores y los guardo en variables asignadas.
  let menu = prompt("Elija uno de nuestros productos \n 1: Hamburguesa doble con chedar y bacon $605 \n 2: Pizza de la casa $1150 \n 3: Super lomo completo $1575 \n 4:Papas fritas con chedar y bacon $750",);
  let precio = parseInt(prompt("desea agregar otro menu"));
  let cantidad = prompt("cuantos menus?");
  //creo una instancia de producto
  const nuevoProducto = new producto(menu, precio, cantidad);
  //agrego el producto creado al array de productos 
  arrayProductos.push(nuevoProducto);
  console.log("producto añadido al carrito");
}
//funcio para mostrar productos cargados
function mostarProductos() {
  arrayProductos.forEach((producto) => {
    console.log(
      `usted eligio ${producto.menu} por un precio de ${producto.precio} en cantidad ${producto.cantidad}`
    );
  });
}
//utilizo un reduce para obtener un unico valor, en este caso precio
function finalizarcompra() {
  const total = arrayProductos.reduce((acc, el) => acc + el.precio, 0);

  alert(`gracias por comprar en Franchesca's Fast Food !! el total a pagar es de $ ${total}`);
}

//funcion para mostar oferta del dia
function mostarOferta() {
  const ofertas = precios.filter((el) => el.precio < 2000);
  for (const oferta of ofertas) {
    alert(
      "La oferta del dia es : pizza de la casa y papas chedar con bacon " +
      oferta.menu + 
      "por $1400" +
      oferta.precio
    );
  }
}
//defino array de producto como un array 
let arrayProductos = ["Hamburguesa con chedar y bacon", "Pizza de la casa", "Super lomo completo", "Papas fritas con chedar y bacon" ];

//capturo una opcion por prompt.
let opcion = prompt(
  "ingrese una opcion: \n 1: elegir menu  \n 3:finalizar compra \n 4:sugerir oferta \n 5: salir"
);

//mientras no sea opcion 5 (salir)
while (opcion !== "5") {
  if (opcion === "1") {
    cargarProductos(arrayProductos);
  }
  if (opcion ==="2") {
    mostarProductos(arrayProductos);
  }
  if (opcion === "3") {
    finalizarcompra(arrayProductos);
  }
  if (opcion === "4") {
    mostarOferta(arrayProductos);
  }
  //pido la opcion para continuar en el bucle while.
  opcion = prompt(
    "vuelva a ingresar una opcion: \n 1: seguir comprando \n 2: mostrar carrito en consola  \n 3: finalizar compra \n 4: sugerir oferta \n 5: salir"
  );
}
 
  
//Finalizar el programa con un saludo.
function  saludar() {
alert("Franchesca's Fast Food! agradece su compra vuelva pronto!!");
}
