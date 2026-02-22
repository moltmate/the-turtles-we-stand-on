import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const JSZip = require('jszip');

const epubData = readFileSync('publish/the-turtles-we-stand-on.epub');
const coverData = readFileSync('publish/cover.jpg');

const zip = await JSZip.loadAsync(epubData);

// Replace the empty cover with actual image data
zip.file('OEBPS/cover.jpeg', coverData);

// Update content.opf to reference cover properly
let opf = await zip.file('OEBPS/content.opf').async('string');
if (!opf.includes('cover-image')) {
  // Add cover image to manifest if not there
  opf = opf.replace('</manifest>', '  <item id="cover-image" href="cover.jpeg" media-type="image/jpeg" properties="cover-image"/>\n</manifest>');
}
// Add cover meta if not present
if (!opf.includes('name="cover"')) {
  opf = opf.replace('</metadata>', '  <meta name="cover" content="cover-image"/>\n</metadata>');
}
zip.file('OEBPS/content.opf', opf);

const output = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
writeFileSync('publish/the-turtles-we-stand-on.epub', output);
console.log(`EPUB with cover: ${(output.length / 1024).toFixed(1)} KB`);
