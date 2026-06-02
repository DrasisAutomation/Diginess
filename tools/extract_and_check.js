const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'pos.html');
const out = path.resolve(__dirname, '..', 'pos_script_extracted.js');
const html = fs.readFileSync(file, 'utf8');
// Find the last <script>...</script> block
const lastScriptStart = html.lastIndexOf('<script>');
const lastScriptEnd = html.lastIndexOf('</script>');
if (lastScriptStart === -1 || lastScriptEnd === -1 || lastScriptEnd < lastScriptStart) {
  console.error('No script block found');
  process.exit(2);
}
const scriptContent = html.substring(lastScriptStart + '<script>'.length, lastScriptEnd);
fs.writeFileSync(out, scriptContent, 'utf8');
console.log('Extracted script to', out);
const { exec } = require('child_process');
exec(`node --check "${out}"`, (err, stdout, stderr) => {
  if (err) {
    console.error('node --check reported an error:');
    console.error(stderr || stdout);
    process.exit(1);
  } else {
    console.log('No syntax errors reported by node --check');
    process.exit(0);
  }
});