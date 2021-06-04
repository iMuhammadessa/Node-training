var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// var fs = require('fs');

// fs.unlink('mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// var fs = require('fs');

// fs.rename('mynewfile3.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });