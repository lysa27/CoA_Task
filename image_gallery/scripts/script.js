document.addEventListener("DOMContentLoaded", function() {
  const imageInteractions = document.querySelectorAll(".image-interaction");

  imageInteractions.forEach(interaction => {
      interaction.addEventListener("mouseenter", function() {
          this.querySelector(".overlays").classList.add("active");
          this.querySelector("img").classList.add("active");
      });

      interaction.addEventListener("mouseleave", function() {
          this.querySelector(".overlays").classList.remove("active");
          this.querySelector("img").classList.remove("active");
      });
  });
});
