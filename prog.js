

var click = 0;

function tocaronElCarrito() {
    if (click < 5) {

        switch (click) {
            case 0:
                var resultado = window.confirm("Presiona aceptar si deseas abrir el carrito!");
                if (resultado) {
                    alert("Uhh que lástima, todavia no funciona...");
                    click++  
                    console.log("click");
                } else {
                    alert("Que bueno que te arrepentiste... ;)");
                }
                    break;
            case 1:
                alert("Estamos trabajando para que puedas abrir el carrito, por favor toca otra cosa, no vuelvas a tocar acá que nos desconcentras!!!");
                click++
                break;
            case 2:
                alert("que te dijimos??");
                click++
                break;
            default:
                alert("Ya deja de tocarme -.-");
                click++
                break;  
        }
    } else {
        reproducirSonido();
        click = 0;
    }      
}

function mostrarNotificacion(txtNotificacion) {
    Swal.fire(txtNotificacion);
}

function reproducirSonido() {
    var audio = document.getElementById("dejame");
    audio.play();
  }
    

document.getElementById("carrito").addEventListener("click", tocaronElCarrito);
