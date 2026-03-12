const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

async function removeBackground(file) {
    const filePath = path.join(__dirname, 'public/products', file);
    try {
        const image = await Jimp.read(filePath);
        
        // Remove white or near-white background
        // The background is likely solid white.
        // We do a simple flood fill approach from the top-left corner, or just a global threshold.
        // Let's use global threshold for simplicity but make it soft.
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            if (r > 245 && g > 245 && b > 245) {
                this.bitmap.data[idx + 3] = 0; // complete transparency
            } else if (r > 230 && g > 230 && b > 230) {
                // progressive transparency for anti-aliasing edges
                const avg = (r + g + b) / 3;
                const ratio = (245 - avg) / 15; // 0 at 245, 1 at 230
                this.bitmap.data[idx + 3] = Math.floor(255 * ratio);
            }
        });
        
        await image.writeAsync(filePath);
        console.log('Processed background removal for', file);
    } catch (e) {
        console.error('Error processing', file, e.message);
    }
}

async function main() {
    await removeBackground('1.png');
    await removeBackground('2.png');
    await removeBackground('3.png');
}
main();
