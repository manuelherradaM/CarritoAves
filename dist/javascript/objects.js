
function Prompt(){
  let ingreso= prompt("Ingresar nombre y apellido");
  
  nombre.innerHTML= (ingreso)
}

var dataBase = [{

  'img': 'https://cdn.pixabay.com/photo/2020/02/27/13/21/rock-dove-4884627_960_720.jpg',
  'title': 'Paloma',
  'texto': 'Son una familia de aves del orden Columbiformes que incluye las palomas, las tórtolas y formas afines. Son, en total, unas 308 especies. Las colúmbidas se distribuyen por todo el mundo, excepto la Antártida​ y el Ártico, y con centro de dispersión en América Central',
  'precio': '$500'
}, {
  'img': 'https://cdn.pixabay.com/photo/2018/09/23/20/56/sparrow-3698507_960_720.jpg',
  'title': 'Gorrion',
  'texto': 'El gorrión común, también llamado pardal​ o chilero, ​ es una especie de ave paseriforme de la familia Passeridae. Está adaptado al hábitat urbano hasta el punto de ser el pájaro más frecuente y conocido en esas áreas, aunque en términos absolutos el pinzón es más abundante. Vive como comensal del ser humano.',
  'precio': '$7850'
}, {
  'img': 'https://cdn.pixabay.com/photo/2017/08/26/05/11/shoebill-2682189_960_720.jpg',
  'title': 'PicoZapato',
  'texto': 'El picozapato es un ave alta, con un rango de altura típico de 110 a 140 cm y algunos especímenes que alcanzan hasta 152 cm. La longitud desde la cola hasta el pico puede variar entre 100 y 140 cm y la envergadura de las alas es de 230 a 260 cm. Se ha informado que el peso ha oscilado entre 4 y 7 kg. Un macho pesará en promedio alrededor de 5,6 kg y es más grande que una hembra típica de 4,9 kg (11 libras).',
  'precio': '$1500'
}, {
  'img': 'https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg',
  'title': 'Aguila monera',
  'texto': 'El águila monera o águila filipina es un ave rapaz diurna y endémica de las selvas de Filipinas. Es el ave nacional del país y se encuentra en peligro crítico de extinción. En la actualidad, la población de águilas moneras no sobrepasa los 500 individuos. ',
  'precio': '$6500'
}, {
  'img': 'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg',
  'title': 'Colibri de Arica',
  'texto': 'Con apenas 8 centímetros de largo y 3 gramos de peso, el colibrí o picaflor de Arica es el ave más pequeña de todo Chile. Esta ave está en peligro crítico de extinción y se estima que en la actualidad quedan menos de 250 ejemplares en los matorrales, bosques y jardines chilenos',
  'precio': '$3333'
}, {
  'img': 'https://cdn.pixabay.com/photo/2014/04/09/10/31/macaw-320006_960_720.jpg',
  'title': 'Guacamayo',
  'texto': ' pesar de hasta tener una película infantil que crea conciencia sobre la trata de aves en el mundo por los cazadores furtivos, el guacamayo azul o mejor conocido en Latinoamérica como el jacinto, es una ave en peligro de extinción por ser uno de los ejemplares salvajes más llamativos y que sirve para comercializarse como mascota.',
  'precio': '$10000'
}

]
class MainFill {
  constructor() {
    const main = document.getElementById('mainrow');
    let divContent = '';
    dataBase.forEach(element => {
      divContent += `<div class="col-sm-12 col-md-6 col-xl-4">         
        <div class="myRscCard shadow p-3 mb-5 bg-body rounded">
          <div class="image">
           <img src="${element.img}" class="image__img card-img-top" alt="color-hex_banner">                   
            <div class="image__overlay image__overlay--blur">
              <div class="image__title">${element.title}</div> 
            </div>
          </a> 
          </div>                             
          <div class="card-body">
            <p class="card-text">${element.texto}</p>
            <p class="card-price">${element.precio}</p>
            <button class="btn btn-outline-primary addToCart" type="button" id="buscador">Agregar al carrito</button>

          </div>
        </div>
      </div>`;

    });
    for (let index = 0; index < 3; index++) {

    }

    main.innerHTML = divContent;
  }
}
var mainObj = new MainFill();

const newArray = dataBase.map( (elemento,indice ) => { 
  elemento.id = indice + 1
  return elemento
})
function buscar(event) {
  const textoBuscar = event.target.parentElement.children[0].value;
  
  const databaseFiltered = newArray.filter((element) => element.title.toLowerCase().includes(textoBuscar.toLowerCase(), 0)) 

     

  const main = document.getElementById('mainrow');
  let divContent = '';
  databaseFiltered.forEach(element => {
    divContent += `<div class="col-sm-12 col-md-6 col-xl-4">         
      <div class="myRscCard shadow p-3 mb-5 bg-body rounded">
        <div class="image">
         <img src="${element.img}" class="image__img card-img-top" alt="color-hex_banner">                   
          <div class="image__overlay image__overlay--blur">
            <div class="image__title">${element.title}</div> 
          </div>
        </a> 
        </div>                             
        <div class="card-body">
          <p class="card-text">${element.texto}</p>
          <p class="card-price">${element.precio}</p>
          <button class="btn btn-outline-primary addToCart " onclick="addtocart2(${element.id})" type="button" >añadir al carrito</button>

        </div>
      </div>
    </div>`;

  });

  main.innerHTML = divContent;

}



  let buscadorElement = document.getElementById("buscador");
  console.log(buscadorElement)
  buscadorElement.addEventListener("click", buscar);





const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
console.log(addToShoppingCartButtons)
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});
const borrar = document.querySelector('.borrarButton')
borrar.addEventListener('click',borrarclicked );
const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);
//solucion carrito
function addtocart2(id){
  const object = newArray.find(elemento => elemento.id == id )
 
  addItemToShoppingCart(object.title,object.precio,object.img)
}

function addToCartClicked(event) {
  console.log(event);
  const button = event.target;
  const item = button.closest('.myRscCard');

  const itemTitle = item.querySelector('.image__title').textContent;
  const itemPrice = item.querySelector('.card-price').textContent;
  const itemImage = item.querySelector('.image__img').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage}  class="shopping-cart-image w-25 p-3  ">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = parseInt(total) + parseInt(shoppingCartItemPrice) * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = "$" + total;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
function borrarclicked(){
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
