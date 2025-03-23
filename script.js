document.addEventListener("DOMContentLoaded", function () {
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

    // Guardar en Local Storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(datosFormulario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarContactos(); 
  });

  // Borrar todos los contactos
  document.getElementById("delete-all").addEventListener("click", function () {
    localStorage.clear();
    mostrarContactos(); 
  });

  // Función para mostrar contactos
  function mostrarContactos() {
    let contactos = JSON.parse(localStorage.getItem('usuarios')) || [];
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contactos.forEach((contacto, index) => {
      let div = document.createElement('div');
      div.classList.add('contacto');
      div.innerHTML = `
          <p>Nombre: ${contacto.name}</p>
          <p>Email: ${contacto.email}</p>
          <p>Mensaje: ${contacto.mensaje}</p>
          <p>URL: ${contacto.urlImage}</p>
          <button onclick="borrarContacto(${index})">Borrar</button>
      `;
      contactList.appendChild(div);
    });
  }

  // Función para borrar un contacto 
  window.borrarContacto = function (index) {
    let contactos = JSON.parse(localStorage.getItem('usuarios')) || [];
    contactos.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(contactos));
    mostrarContactos();
  };

  
  mostrarContactos(); // Mostrar contactos al cargar la página
});