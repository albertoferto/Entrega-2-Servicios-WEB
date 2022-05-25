const nombreMascota = document.querySelector(".nombre_mascota");
const mascotaInput = document.querySelector(".mascota_input");
const addMascoBtn = document.querySelector(".addMascotaBtn");

addMascoBtn.addEventListener("click", function() {

    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(mascotaInput.value);
    newLi.appendChild(liContent);
    nombreMascota.appendChild(newLi);
});