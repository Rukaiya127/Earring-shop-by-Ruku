// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

// Open modal with clicked image
function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

// Close modal when anywhere is clicked
function closeModal() {
  modal.style.display = "none";
}

// Optional: Close modal on pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
