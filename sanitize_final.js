const fs = require('fs');
const path = 'C:\\Users\\Guill\\OneDrive\\Escritorio\\punto ganga por mayor web\\src\\data\\products.ts';
let content = fs.readFileSync(path, 'utf8');

// Final precise mapping for encoding artifacts
content = content.replace(/ǭ/g, 'á');
content = content.replace(/ǩ/g, 'é');
content = content.replace(/Ǯ/g, 'ó');
content = content.replace(/ǲ/g, 'ú');
content = content.replace(/Metálica/g, 'Metálica'); // Fixing the previous Metǭlica

fs.writeFileSync(path, content, 'utf8');
console.log("Sanitization complete version 3.");
