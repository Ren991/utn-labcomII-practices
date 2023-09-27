function changeProductImage(){

    
    var imagenCell = [
        {
            color:"grafito",
            url:"https://tienda.personal.com.ar/images/Moto_E20_Gris_Dorso_min_546e1cd060.png"
        },
        {
            color:"sierra",
            url:"https://tienda.personal.com.ar/images/i_Phone_13_pro_sierra_blue_min_7a139db599.png"
        },
        {
            color:"silver",
            url:"https://www.multipoint.com.ar/Image/0/750_750-6121.jpg"
        },
        {
            color:"gold",
            url:"https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-6.jpg",
            
        }
    ]
    
    var opcion = document.getElementById("selectColor").value;
    
    console.log(opcion);

    var containerImg = document.getElementById("cellphonePic");

    for (let index = 0; index < imagenCell.length; index++) {
        //const element = array[index];
        
        if(imagenCell[index].color === opcion){
            containerImg.innerHTML = 
            `<img src=${imagenCell[index].url} width=180 > `;
        }
        
    }
    // var contenedorImagen = document.createElement('img');

    // contenedorImagen.src = "https://tienda.personal.com.ar/images/Moto_E20_Gris_Dorso_min_546e1cd060.png"

    // document.getElementById("cellphonePic").appendChild(contenedorImagen);

}
function onChangeCantidad(){

    var input = document.getElementById("cantidadIngresada").value;
    console.log(input)

    var result = document.getElementById("result");
    
    if (input ===  "") {
        result.innerHTML = "";
    } else if (input <= 0 || input > 10) {
        result.innerHTML = `<h2>Debe ingresar un número entre 1 y 10</h2>`;
    } else {
        result.innerHTML = ""; // Limpiar el mensaje de error si no es necesario
    }
}
function calculatePrice(){

    var precioCel = [
        {
            capacidad:"128",
            precio:150000
        },
        {
            capacidad:"256",
            precio:165000
        },
        {
            capacidad:"512",
            precio:180000
        }
    ]

    var opcionCapacidad = document.getElementById("selectCapacidad").value;

    var cantidadIngresadaUsuario = document.getElementById("cantidadIngresada").value;

    
    var total;
    
    for (let index = 0; index < precioCel.length; index++) {
               
        if(opcionCapacidad === precioCel[index].capacidad){
            total = cantidadIngresadaUsuario * precioCel[index].precio
        }
    }
   

    var result = document.getElementById("result");

    result.innerHTML = `<h2>Cotizacion:$ ${total}</h2>`;
 /*    document.getElementById("cantidadIngresada").value = "";
    document.getElementById("selectCapacidad").value = 0;
    document.getElementById("selectColor").value = 0; */

    //document.getElementById("cellphonePic").style.display='none'
    
    

}

