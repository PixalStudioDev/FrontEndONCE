function filtrarImagenes(categoria) {
  let imagenes = document.getElementsByClassName('imagen');
  for (let i = 0; i < imagenes.length; i++) {
    if (categoria == 'todas') {
      imagenes[i].style.display = '';
    } else if (imagenes[i].classList.contains(categoria)) {
      imagenes[i].style.display = '';
    } else {
      imagenes[i].style.display = 'none';
    }
  }
}
