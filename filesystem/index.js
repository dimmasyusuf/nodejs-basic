const fs = require('fs');
const path = require('path');

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log('Gagal membaca berkas');
//     return;
//   }
//   console.log(data);
// };

// const notes = fs.readFile(
//   'notes.txt',
//   'utf8',
//   fileReadCallback
// );
// console.log(notes);

const notes = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'utf8');
console.log(notes);
