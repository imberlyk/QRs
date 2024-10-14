window.onload = function() {
  startConfetti();
};

function startConfetti() {
  for (let i = 0; i < 100; i++) {
      let confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(confetti);
      confetti.addEventListener('animationend', () => confetti.remove());
  }
}
<script type="module">
    import * as scrawl from "https://unpkg.com/scrawl-canvas@8.14.0";

    // Ensure the DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        const canvas = scrawl.library.canvas.mycanvas; // Get canvas by id

        scrawl.makeFilter({
            name: "reduce-filter",
            method: "reducePalette",
            noiseType: "ordered", // Set the noise type
        });

        // Initialize Media Stream
        scrawl.importMediaStream({
            audio: false,
            width: 500,
            height: 500
        }).then((myface) => {
            scrawl.makePicture({
                name: "camera-picture",
                asset: myface.name,
                dimensions: ["100%", "100%"],
                copyDimensions: ["100%", "100%"],
                start: ["center", "center"],
                handle: ["center", "center"],
                flipReverse: true,
                method: "fill",
                filters: ["reduce-filter"]
            });
        }).catch((err) => console.log(err.message));

        scrawl.makeRender({
            name: "demo-animation",
            target: canvas
        });
    });