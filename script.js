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

import * as scrawl from "https://unpkg.com/scrawl-canvas@8.14.0";

const canvas = scrawl.findCanvas("mycanvas");

scrawl.makeFilter({
  name: "reduce-filter",
  method: "reducePalette",

  /* Filter supports "random", "ordered" and "bluenoise" values. Uncomment the noiseType attribute below to see effect */
  // noiseType: 'random',
  noiseType: "ordered"
  // noiseType: 'bluenoise',

  /* Attributes to create a "commonrst color" dither - warning: very slow! */
  // palette: 4,
  // useLabForPaletteDistance: false,
  // minimumColorDistance: 4000,
});

scrawl
  .importMediaStream({
    audio: false,
    width: 500,
    height: 500
  })
  .then((myface) => {
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
  })
  .catch((err) => console.log(err.message));

scrawl.makeRender({
  name: "demo-animation",
  target: canvas
});
