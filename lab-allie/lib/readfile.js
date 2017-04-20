'use strict';

const fs = require('fs');

module.exports = function(callback) {
  let arrayOfThree = [];

  fs.readFile(`${__dirname}/../textfiles/one.txt`, function(err, data) {
    if(err) throw err;
    arrayOfThree.push(data.toString('hex', 0, 8));

    fs.readFile(`${__dirname}/../textfiles/two.txt`, function(err, data) {
      if(err) throw err;
      arrayOfThree.push(data.toString('hex', 0, 8));

      fs.readFile(`${__dirname}/../textfiles/three.txt`, function(err, data) {
        if(err) throw err;
        arrayOfThree.push(data.toString('hex', 0, 8));
        callback(arrayOfThree);
      });
    });
  });
};