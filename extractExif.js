import fs from 'fs/promises';
import path from 'path';
import exifr from 'exifr';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// To handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Since exifr is a CommonJS module, we directly use it without destructuring
const parse = exifr.parse;

// Define the path to the directories
const originalsDir = path.join(__dirname, 'public', 'images', 'originals');
const fullsDir = './images/fulls';
const thumbnailsDir = './images/thumbnails';

// Base URL for Imgix
const imgixBaseUrl = 'https://sfmta-test-975080756.imgix.net';

// Function to read all files in the directory
async function readFiles(directory) {
    return fs.readdir(directory, { withFileTypes: true });
}

// Function to generate the desired object structure for each image
async function generateImageData(files) {
    const imageData = [];
    for (const file of files) {
        if (file.isFile() && /\.(jpg|jpeg|png|tiff)$/i.test(file.name)) {
            try {
                const originalPath = path.join(originalsDir, file.name);
                const exif = await parse(originalPath);

                // Generate Imgix URLs
                const imgixOriginal = `${imgixBaseUrl}/originals/${file.name}?wm=webp&lossless=0`;
                const imgixFull = `${imgixBaseUrl}/fulls/${file.name}?wm=webp&lossless=0`;
                const imgixThumbnail = `${imgixBaseUrl}/thumbnails/${file.name}?wm=webp&lossless=0`;

                imageData.push({
                    original: path.join('./images/originals', file.name),
                    full: path.join(fullsDir, file.name),
                    thumbnail: path.join(thumbnailsDir, file.name),
                    imgixOriginal, // Add the new Imgix URL
                    imgixFull, // Add the new Imgix URL
                    imgixThumbnail, // Add the new Imgix URL
                    title: "", // Title can be extracted or defined here
                    description: "", // Description can be extracted or defined here
                    exif
                });
            } catch (error) {
                console.error(`Error extracting EXIF data from ${file.name}: ${error}`);
            }
        }
    }
    return imageData;
}

// Function to sort imageData by DateTimeOriginal
function sortByDateTimeOriginal(imageData) {
    return imageData.sort((a, b) => {
        const dateA = a.exif.DateTimeOriginal ? new Date(a.exif.DateTimeOriginal) : new Date(0); // Use Unix epoch as fallback
        const dateB = b.exif.DateTimeOriginal ? new Date(b.exif.DateTimeOriginal) : new Date(0);
        return dateA - dateB;
    });
}

// Main function to execute the script
async function main() {
    try {
        const files = await readFiles(originalsDir);
        let imageData = await generateImageData(files);
        imageData = sortByDateTimeOriginal(imageData); // Sort imageData before writing
        await fs.writeFile(path.join(__dirname, 'imageData.json'), JSON.stringify(imageData, null, 2));
        console.log('Image data extraction complete and saved to imageData.json');
    } catch (error) {
        console.error('Failed to extract image data:', error);
    }
}

// Run the main function
main();
