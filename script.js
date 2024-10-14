// Import scrawl-canvas library
import * as scrawl from "https://unpkg.com/scrawl-canvas@8.14.0";

// Confetti functionality
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
// Import scrawl-canvas library
import * as scrawl from "https://unpkg.com/scrawl-canvas@8.14.0";

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const canvas = scrawl.library.canvas.mycanvas; // Get the canvas by id

    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            // Create a video element to capture the webcam feed
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();  // Start the video

            // Wait until the video is ready
            video.addEventListener('loadeddata', () => {
                // Create a scrawl-canvas picture from the video feed
                scrawl.makePicture({
                    name: 'webcam-feed',
                    asset: video, // Use the video element as the asset
                    dimensions: ['100%', '100%'],
                    copyDimensions: ['100%', '100%'],
                    start: ['center', 'center'],
                    handle: ['center', 'center'],
                    method: 'fill' // Fill the canvas with the video feed
                });

                // Render the webcam feed continuously onto the canvas
                scrawl.makeRender({
                    name: 'webcam-render',
                    target: canvas // Target the canvas for rendering
                });
            });
        })
        .catch((error) => {
            // Log any errors encountered while accessing the webcam
            console.error('Webcam access error:', error);
            alert('Error accessing the webcam: ' + error.message);
        });
});
