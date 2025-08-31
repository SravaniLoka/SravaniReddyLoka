document.addEventListener("DOMContentLoaded", () => {
  const blobContainer = document.querySelector(".blob-container");
  const blobs = document.querySelectorAll(".blob");

  // --- make main blobs bounce ---
  blobs.forEach(blob => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
    let dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);

    function animate() {
      x += dx;
      y += dy;

      if (x <= 0 || x + blob.offsetWidth >= window.innerWidth) dx *= -1;
      if (y <= 0 || y + blob.offsetHeight >= window.innerHeight) dy *= -1;

      blob.style.left = x + "px";
      blob.style.top = y + "px";

      requestAnimationFrame(animate);
    }
    animate();

    // spawn mini blobs on click
    blob.addEventListener("click", () => spawnMiniBlobs());
  });

  function spawnMiniBlobs() {
  for (let i = 0; i < 8; i++) {
    const mini = document.createElement("div");
    mini.classList.add("mini-blob");

    // random pastel color
    mini.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;

    // random size (smaller than main blobs)
    const size = Math.floor(Math.random() * 25) + 10; // 10px – 35px
    mini.style.width = size + "px";
    mini.style.height = size + "px";

    // random horizontal starting position (fall from top)
    let x = Math.random() * (window.innerWidth - size);
    let y = -size;

    let dx = (Math.random() * 2 - 1) * 1.5; // slower sideways drift
    let dy = Math.random() * 1 + 1;         // 🚀 start slower downward speed

    mini.style.left = x + "px";
    mini.style.top = y + "px";

    blobContainer.appendChild(mini);

    // --- animate bounce ---
    function animateMini() {
      x += dx;
      y += dy;

      // bounce left/right
      if (x <= 0 || x + size >= window.innerWidth) dx *= -1;

      // bounce top/bottom
      if (y + size >= window.innerHeight) {
        dy *= -0.7; // lose some energy
        y = window.innerHeight - size;
      } else {
        dy += 0.15; // 🌙 slower gravity pull
      }

      mini.style.left = x + "px";
      mini.style.top = y + "px";

      requestAnimationFrame(animateMini);
    }
    animateMini();

    // remove after some time to avoid too many
    setTimeout(() => mini.remove(), 7000);
  }
}
})