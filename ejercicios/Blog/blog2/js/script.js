function openPopup(htmlFile) {
  fetch(htmlFile)
    .then(response => response.text())
    .then(data => {
      document.getElementById("popupInnerContent").innerHTML = data;
      document.getElementById("popup").style.display = "flex"; // Cambiado a 'flex' para trabajar con flexbox
      document.body.classList.add('popup-active'); // Añadir clase al body para desactivar el scroll
    })
    .catch(error => console.error('Error al cargar el contenido del artículo:', error));
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove('popup-active'); // Remover la clase del body para reactivar el scroll
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

