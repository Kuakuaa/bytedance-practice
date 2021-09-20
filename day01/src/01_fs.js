const fs = require("fs");
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

fs.readFile('./config.js', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

(async () => {
  try {
    let data = await readFile('./index.html');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})()