'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const readModule = require('../lib/readfile.js');


describe('readfile.js', function() {
  let allData = [];
  describe('#readFile', function() {
    it('should return the first text file', function(done) {
      fs.readFile(`${__dirname}/../textfiles/one.txt`, function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        allData.push(testData);
        expect(testData).to.be.equal('54686973206f6e65');
        done();
      });
    });
    
    it('should return the second text file next', function(done) {
      fs.readFile(`${__dirname}/../textfiles/two.txt`, function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        allData.push(testData);
        expect(testData).to.be.equal('426c696767697479');
        done();
      });
    });
    
    it('should return the third text file last', function(done) {
      fs.readFile(`${__dirname}/../textfiles/three.txt`,
      function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        allData.push(testData);
        expect(testData).to.be.equal('416e642068657265');
        done();
      });
    });
    
    
    it('should compare the expected array to the actual array', function(done) {
      readModule(function(arrayOfThree){
        expect(arrayOfThree).to.deep.equal(allData);    
        done();
      });
    });
  });
});
