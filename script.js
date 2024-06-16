function toggleGallery() {
    var gallery = document.getElementById("imageGallery");
    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "flex";
    } else {
        gallery.style.display = "none";
    }
}

function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
