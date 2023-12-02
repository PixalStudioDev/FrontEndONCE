function openPopup(title) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
