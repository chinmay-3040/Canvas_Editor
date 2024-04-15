// Canvas.js


import React, { useEffect, useRef } from 'react';

function Canvas({ selectedImage, ctaContent, adContent, staticImage, buttonColor }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


/////////////////////////////////STATIC_IMAGE///////////////////////////////////////////////////////////
    // Draw selected image
// Draw the static image with border radius
const borderRadius3 = 20;

if (staticImage instanceof HTMLImageElement) {
  // Save the current state of the canvas
  ctx.save();

  // Create a clipping path with rounded corners
  ctx.beginPath();
  ctx.moveTo(120 + borderRadius3, 45);
  ctx.arcTo(540, 45, 540, 465, borderRadius3);
  ctx.arcTo(540, 465, 120, 465, borderRadius3);
  ctx.arcTo(120, 465, 120, 45, borderRadius3);
  ctx.arcTo(120, 45, 540, 45, borderRadius3);
  ctx.closePath();
  ctx.clip();

  // Draw the image
  ctx.drawImage(staticImage, 120, 45, 420, 420);

  // Restore the previous state of the canvas
  ctx.restore();
} else {
  // Handle case where staticImage is not an image element
  console.error("staticImage is not an HTMLImageElement");
}

////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////IMAGE///////////////////////////////////////////////////////////
// Define the radius for the border
const borderRadius2 = 20;

// Draw the selected image with border radius
if (selectedImage) {
    // Save the current state of the canvas
    ctx.save();

    // Create a clipping path with rounded corners
    ctx.beginPath();
    ctx.moveTo(125 + borderRadius2, 40);
    ctx.arcTo(525, 40, 525, 440, borderRadius2);
    ctx.arcTo(525, 440, 125, 440, borderRadius2);
    ctx.arcTo(125, 440, 125, 40, borderRadius2);
    ctx.arcTo(125, 40, 525, 40, borderRadius2);
    ctx.closePath();
    ctx.clip();

    // Draw the image
    ctx.drawImage(selectedImage, 125, 40, 400, 400);

    // Restore the previous state of the canvas
    ctx.restore();
}

/////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
ctx.fillStyle = '#000000';
ctx.font = 'bold 20px Arial'; // Set font weight to bold
const maxCharsPerLine = 20;
const maxLines = 3;
// const maxTotalChars = 60;

let lines = [];
let remainingText = ctaContent || "Enter text"; // Default text if ctaContent is empty

// Split the text into lines with a maximum of maxCharsPerLine characters per line
while (remainingText.length > 0 && lines.length < maxLines) {
    lines.push(remainingText.substr(0, maxCharsPerLine));
    remainingText = remainingText.substr(maxCharsPerLine);
}

// Draw each line of text
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    ctx.fillText(line, 240, 500 + i * 25); // Adjust the y-coordinate to position each line vertically
}
///////////////////////////////////////////////////////////////////////////////////////////////




// Draw button with ad content///////////////////////////////////////////////////////////////////////
// Function to draw a rounded rectangle
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

// Calculate text dimensions
const textMetrics = ctx.measureText(adContent || 'Click here');
const textWidth = textMetrics.width;
const textHeight = 20; // Assuming line height is 20px

// Calculate rectangle dimensions based on text dimensions
const paddingX = 10;
const paddingY = 10;
const rectangleWidth = textWidth + paddingX * 2; // Add padding on both sides
const rectangleHeight = textHeight + paddingY * 2; // Add padding on both sides
const borderRadius = 10; // Border radius

// Draw black rounded rectangle with adjusted dimensions and border radius
ctx.fillStyle = '#000000';
roundRect(ctx, 415, 470, rectangleWidth, rectangleHeight, borderRadius);
ctx.fill();

// Draw white text centered within the rectangle
ctx.fillStyle = buttonColor;
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.fillText(adContent || 'Click here', 415 + rectangleWidth / 2, 470 + rectangleHeight / 2 + 10); // Adjust text position to center

////////////////////////////////////////////////////////////////////////



}, [selectedImage, ctaContent, adContent,staticImage, buttonColor]); // Include selectedImage as a dependency

  

  return <canvas ref={canvasRef} width={650} height={600} />;
}

export default Canvas;
