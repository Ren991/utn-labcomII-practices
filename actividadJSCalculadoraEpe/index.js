function validarDatos() {
    var tipoUsuarioResidencial = document.getElementById("residencial");
    var tipoUsuarioIndustrial = document.getElementById("industrial");
    var tipoUsuario;
    var zonaDomicilio = document.getElementById("zona-domicilio");
    var valorZonaSeleccionado = zonaDomicilio.value;

        
    //VALIDACION TIPO USUARIO
    if (tipoUsuarioResidencial.checked) {

        tipoUsuario = "residencial";
    } else if (tipoUsuarioIndustrial.checked) {
        tipoUsuario = "industrial"
    }

    if (valorZonaSeleccionado !== "" &&  tipoUsuario !== undefined   && valorZonaSeleccionado !== "s") {

        calcularFactura(valorZonaSeleccionado, tipoUsuario)
    } else {
        Swal.fire({

            icon: 'error',
            title: 'Debe completar todos los campos',
            showConfirmButton: true,

        })
    }

}

function changeKwh() {

    //ESTE ONCHANGE DESHABILITA EL BOTON DE SUBMIT SI EL USUARIO INGRESA UN NUMERO INVALIDO

    var valorKwh = document.getElementById("kwh").value;
    var submitBoton = document.getElementById("submitBoton");

    if (valorKwh <= 0 || isNaN(valorKwh)) {
        submitBoton.disabled = true;
        submitBoton.classList.remove("button-enabled"); // Elimina la clase
    } else {
        submitBoton.disabled = false;
        submitBoton.classList.add("button-enabled"); // Agrega la clase
    }
}

function calcularFactura(valorZonaSeleccionado, tipoUsuario) {
   
    var containerMsg = document.getElementById("msjExito");

    const costoDeServicio = 102
    var valorKwh = document.getElementById("kwh").value
    var costoSegunZona;
    var ivaSegunUsuario;
    var cuentaFinal;


    switch (valorZonaSeleccionado) {
        case "centro":
            costoSegunZona = 5.80
            break;
        case "zur":
            costoSegunZona = 5.40
            break;
        case "oeste":
            costoSegunZona = 5.35
            break;
        case "norte":
            costoSegunZona = 5.60
            break;

        default:
            break;
    }
    

    if (tipoUsuario === "industrial") {
        ivaSegunUsuario = 27
    } else {
        ivaSegunUsuario = 21
    }

    cuentaFinal = parseFloat(costoDeServicio) * (parseFloat(valorKwh) * costoSegunZona) * (1 + parseFloat(ivaSegunUsuario))

    


    Swal.fire({

        icon: 'success',
        title: `La cotización es $${cuentaFinal.toFixed(2)}`,
        showConfirmButton: true,

    })

}