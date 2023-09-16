const fs = require('fs');

const writeableStream = fs.createWriteStream('./stream/output.txt');

const readableStream = fs.createReadStream('./stream/input.txt', {
  highWaterMark: 15,
});

readableStream.on('readable', () => {
  try {
    writeableStream.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on('end', () => {
  console.log('Done');
});
