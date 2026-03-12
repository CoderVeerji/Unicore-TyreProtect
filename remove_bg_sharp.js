const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeBackgroundSharp(filename) {
    const inputPath = path.join(__dirname, 'public/products', filename);
    const outputPath = path.join(__dirname, 'public/products', 'out_' + filename);
    
    try {
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });
        
        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            
            if (r > 230 && g > 230 && b > 230) {
                const avg = (r + g + b) / 3;
                if (avg > 245) {
                    data[i+3] = 0;
                } else {
                    const diff = 245 - avg;
                    const alpha = Math.floor((diff / 15) * 255);
                    data[i+3] = Math.min(data[i+3], alpha);
                }
            }
        }
        
        await sharp(data, {
            raw: {
                width: info.width,
                height: info.height,
                channels: info.channels
            }
        }).png().toFile(outputPath);
        
        fs.renameSync(outputPath, inputPath);
        console.log('Successfully processed', filename);
        
    } catch (e) {
        console.error('Error on', filename, e);
    }
}

async function run() {
    await removeBackgroundSharp('1.png');
    await removeBackgroundSharp('2.png');
    await removeBackgroundSharp('3.png');
}
run();
