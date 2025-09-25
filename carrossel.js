document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // CARROSSEL
  // ==========================
  let index = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Aplica transição suave
  slides.style.transition = "transform 0.5s ease-in-out";

  function showSlide(newIndex) {
    index = (newIndex + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  // Botão próximo
  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
  });

  // Botão anterior
  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
  });

  // ==========================
  // MODAL DINÂMICO DOS CARDS
  // ==========================
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // Fecha modal ao clicar no X
  closeBtn.addEventListener("click", () => modal.style.display = "none");

  // Fecha modal ao clicar fora
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Seleciona todos os cards
  const cards = document.querySelectorAll(".resultado-card");

  // Adiciona evento para cada card
  cards.forEach(card => {
    card.style.cursor = "pointer"; // Mostra ícone de clique
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalBody.innerHTML = card.dataset.content;
      modal.style.display = "flex";
    });
  });
  
});
