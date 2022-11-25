
const validarCheckoutForm = () => {
    let nombres = document.querySelector('#nombres').value
    let apellidos = document.querySelector('#apellidos').value
    let direccion_entrega = document.querySelector('#direccion_entrega').value
    let municipio = document.querySelector('#municipio').value
    let barrio = document.querySelector('#barrio').value
    let correo_electronico = document.querySelector('#correo_electronico').value
    let numero_celular = document.querySelector('#numero_celular').value

    if (nombres == "" || apellidos == "" || direccion_entrega == "" || municipio == "" || barrio == "" || correo_electronico == "" || numero_celular == "") {
        llenarCampos()
        //alert("Por favor llene todos los campos obligatorios para poder realizar el pedido.")
    } else {
        confirmarRealizarPedido()
    }
}


const boton_realizarPedido = document.querySelector('#boton-realizarPedido')
boton_realizarPedido.addEventListener('click',validarCheckoutForm)


function modificadoCorrectamente() {
    Swal.fire({
        icon: 'success',
        title: 'Modificado correctamente',
        text: 'Se modificaron los insumos de la ancheta correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    $('#modalInsumos').modal('hide')
}

function confirmarEliminar() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Tendrás que volver a añadir esta ancheta al carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ancheta eliminada',
            text: 'La ancheta ha sido eliminada del carrito correctamente.',
            showConfirmButton: false,
            timer: 1500
        })
        }
      })
}

function llenarCampos() {
    Swal.fire({
        title: 'Hay campos vacíos',
        text: "Debes llenar todos los campos para poder realizar el pedido",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      })
}

function confirmarRealizarPedido() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Después de realizar un pedido no podrás modificarlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, realizar pedido',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Pedido realizado',
            text: 'El pedido fue realizado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(function(){ window.location = "http://localhost:4000/thankyou"; }, 2000);
        }
      })
}