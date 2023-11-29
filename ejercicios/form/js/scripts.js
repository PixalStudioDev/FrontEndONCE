document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (e) {
      // Validación del nombre
      if (!document.getElementById('nombre').value.trim()) {
          alert('Por favor, ingrese su nombre.');
          e.preventDefault();
          return;
      }

      // Validación del apellido
      if (!document.getElementById('apellido').value.trim()) {
          alert('Por favor, ingrese su apellido.');
          e.preventDefault();
          return;
      }

      // Validación del email
      var email = document.getElementById('email').value.trim();
      if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          alert('Por favor, ingrese un email válido.');
          e.preventDefault();
          return;
      }

      // Puedes agregar más validaciones según sea necesario
  });
});
