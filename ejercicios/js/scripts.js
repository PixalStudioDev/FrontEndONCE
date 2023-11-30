document.querySelectorAll('.accordion').forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
    var panel = accordion.querySelector('.panel');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

