const fs = require('fs');

const path = 'C:\\Users\\Guill\\OneDrive\\Escritorio\\punto ganga por mayor web\\src\\data\\products.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
    'ǭ': 'á',
    'ǩ': 'é',
    'ǭ': 'í', // wait, let's be more precise
    'Ǯ': 'ó',
    'ǲ': 'ú',
    '': 'ñ',
    '?': 'ñ' // This is risky, but sometimes it shows up as ?
};

// Based on the output "Panera Metǭlica" -> "Metálica"
// Let's use a more robust regex for common encoding artifacts from latin1/utf8 mismatches
content = content.replace(/ǭ/g, 'á');
content = content.replace(/ǩ/g, 'é');
content = content.replace(/ǭ/g, 'í');
content = content.replace(/Ǯ/g, 'ó');
content = content.replace(/ǲ/g, 'ú');
content = content.replace(//g, 'ñ');

    fs.writeFileSync(path, content, 'utf8');
console.log("Sanitization complete.");
