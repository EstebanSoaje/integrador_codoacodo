const productosRemeras = [ 
    //STAR WARS
    {
        id: "remera-1-01",
        titulo: "THE BOOK OF BOBA FETT",
        categoria: "Remera",
        licencia: "STAR WARS",
        imagen_front: "../../multimedia/star-wars/re-grogu.png",
        imagen_back: "../../multimedia/star-wars/re-grogu-box.png",
        precio: 1799.99
    },

    //DRAGON BALL Z
    {
        id: "remera-5-01",
        titulo: "GOKU",
        categoria: "Remera",
        licencia: "DRAGON BALL Z",
        imagen_front: "../../multimedia/dragon-ball/re-goku.png",
        imagen_back: "../../multimedia/dragon-ball/re-goku-box.png",
        precio: 1999.99
    },
    {
        id: "remera-5-02",
        titulo: "TRUNKS",
        categoria: "Remera",
        licencia: "DRAGON BALL Z",
        imagen_front: "../../multimedia/dragon-ball/re-trunks.png",
        imagen_back: "../../multimedia/dragon-ball/re-trunks-box.png",
        precio: 1999.99
    }
];

const card = document.querySelector('#articles');

let currentPage = 1;

function cargarProductosRemeras() {
    card.innerHTML = "";
    const productosPerPage = 6; // Número de productos por página
    const startIndex = (currentPage - 1) * productosPerPage;
    const endIndex = startIndex + productosPerPage;
    const productosToDisplay = productosRemeras.slice(startIndex, endIndex);

    productosToDisplay.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("articles__product");
        div.innerHTML = `
            <div class="articles__product__image">
                <div class="articles__product__image__label">
                    <p>NUEVO</p>
                </div>
                <div class="articles__product__image__photo">
                    <img class="img--front" src="${producto.imagen_front}" alt="${producto.titulo}">
                    <img class="img--back" src="${producto.imagen_back}" alt="${producto.titulo}">
                </div>
            </div>
            <div class="articles__product__description">
                <p class="articles__product__description__title">${producto.licencia}</p>
                <p class="articles__product__description__subtitle">${producto.titulo}</p>
                <p class="articles__product__description__price">${producto.precio}</p>
                <p class="articles__product__description__dues">3 CUOTAS SIN INTERÉS</p>
            </div>                
        `;
        card.append(div);
    });
};

cargarProductosRemeras();