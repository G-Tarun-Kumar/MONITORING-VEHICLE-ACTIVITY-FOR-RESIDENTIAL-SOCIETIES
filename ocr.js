const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

// Path to the image you want to process
const imagePath = path.join(__dirname, 'uploads', 'sample_image.jpg');

// Check if the image exists
if (!fs.existsSync(imagePath)) {
  console.log(`Error: Image not found at ${imagePath}`);
  process.exit(1);
}

// Start OCR processing
Tesseract.recognize(
  imagePath,   // Path to image
  'eng',       // Language to use
  {
    logger: (m) => console.log(m) // Log progress
  }
)
.then(({ data: { text } }) => {
  console.log("Extracted Text: ", text);
})
.catch((error) => {
  console.error("Error during OCR:", error);
});
