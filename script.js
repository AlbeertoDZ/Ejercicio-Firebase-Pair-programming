document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const datosFormulario = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("message").value,
    urlImage: document.getElementById("urlImage").value,
  };
  document.getElementById("fallo").innerHTML = "";
  let error = "";

  //1. Guardar en Local Storage los datos de contacto enviados de cada usuario
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Recuperar los datos existentes del localStorage
  usuarios.push(datosFormulario); // Agregar los nuevos datos al array
  localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Guardar el array actualizado en el localStorage


  
  // 4. Borrar todo con el boton borrar todo
  document.getElementById("delete-all").addEventListener("click", function () {
    localStorage.clear();
  });

  // 5. Borrar un contacto en concreto
  document.getElementById("delete-one").addEventListener("click", function () {
    window.localStorage.removeItem("name");
    });
  });

