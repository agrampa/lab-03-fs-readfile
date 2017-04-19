'use strict';

const Buffer = require('buffer').Buffer;
const fs = require('fs');

fs.readFile(`${__dirname}/../textfiles/one.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/../textfiles/two.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/../textfiles/three.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('hex', 0, 8));
});
