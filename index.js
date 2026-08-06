const html = fs.readFileSync('d.html', 'utf-8');
const payload = {
  request: html
};
fs.writeFileSync('request.json', JSON.stringify(payload));