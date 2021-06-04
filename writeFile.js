var fs = require('fs');

fs.appendFile('writeFile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});