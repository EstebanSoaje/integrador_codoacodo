const productosLlaveros = [
    //STAR WARS
    {
        id: "llavero-1-01",
        titulo: "GROGU",
        categoria: "Llavero",
        licencia: "STAR WARS",
        imagen_front: "../../multimedia/star-wars/ll-grogu-1.png",
        imagen_back: "../../multimedia/star-wars/ll-grogu-box.png",
        precio: 499.99
    },
    {
        id: "llavero-1-02",
        titulo: "BO-KATAN KRYZE",
        categoria: "Llavero",
        licencia: "STAR WARS",
        imagen_front: "../../multimedia/star-wars/ll-kryze-1.png",
        imagen_back: "../../multimedia/star-wars/ll-kryze-box.png",
        precio: 499.99
    },
    {
        id: "llavero-1-03",
        titulo: "THE MANDALORIAN",
        categoria: "Llavero",
        licencia: "STAR WARS",
        imagen_front: "../../multimedia/star-wars/ll-mandalorian-1.png",
        imagen_back: "../../multimedia/star-wars/ll-mandalorian-box.png",
        precio: 499.99
    },

    //HARRY POTTER
    {
        id: "llavero-3-01",
        titulo: "GINNY WEASLEY",
        categoria: "Llavero",
        licencia: "HARRY POTTER",
        imagen_front: "../../multimedia/harry-potter/ll-ginny-1.png",
        imagen_back: "../../multimedia/harry-potter/ll-ginny-box.png",
        precio: 499.99
    },
    {
        id: "llavero-3-02",
        titulo: "REBEUS HAGRID",
        categoria: "Llavero",
        licencia: "HARRY POTTER",
        imagen_front: "../../multimedia/harry-potter/ll-hagrid-1.png",
        imagen_back: "../../multimedia/harry-potter/ll-hagrid-box.png",
        precio: 499.99
    },
    {
        id: "llavero-3-03",
        titulo: "HARRY POTTER",
        categoria: "Llavero",
        licencia: "HARRY POTTER",
        imagen_front: "../../multimedia/harry-potter/ll-harry-1.png",
        imagen_back: "../../multimedia/harry-potter/ll-harry-box.png",
        precio: 499.99
    }
];

const card = document.querySelector('#articles');

let currentPage = 1;

function cargarProductosLlaveros() {
    card.innerHTML = "";
    const productosPerPage = 6; // Número de productos por página
    const startIndex = (currentPage - 1) * productosPerPage;
    const endIndex = startIndex + productosPerPage;
    const productosToDisplay = productosLlaveros.slice(startIndex, endIndex);

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

cargarProductosLlaveros();