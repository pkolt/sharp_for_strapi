const fs = require('fs');
const sharp = require('sharp');

const test = () => {
    fs.mkdirSync('build/');

    sharp('stars.jpg')
        .resize(300, 200)
        .toFile('build/stars.jpg', (err) => {
            if (err) {
                console.error(err);
            }
        });
};

test();