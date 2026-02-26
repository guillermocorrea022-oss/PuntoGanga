const fs = require('fs');
const path = 'C:\\Users\\Guill\\OneDrive\\Escritorio\\punto ganga por mayor web\\src\\data\\products.ts';
let content = fs.readFileSync(path, 'utf8');

// Basic character fixes for common latin1 -> utf8 issues in this batch
content = content.replace(/ǭ/g, 'á');
content = content.replace(/ǩ/g, 'é');
content = content.replace(/Ǯ/g, 'ó');
content = content.replace(/ǲ/g, 'ú');
// Checking specifically for "Metǭlica" mentioned in the logs
content = content.replace(/Metǭlica/g, 'Metálica');
// Fixing the '' which often comes from 'ñ' or other characters
content = content.replace(//g, 'ñ');

    fs.writeFileSync(path, content, 'utf8');
console.log("Sanitization complete version 2.");
