'use strict';

const expect = require('chai').expect;
const fs = require('fs');

describe('readfile.js', function() {
  describe('#readFile', function() {
    it('should return the first text file', function(done) {
      fs.readFile(`${__dirname}/../textfiles/one.txt`, function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        expect(testData).to.be.equal('54686973206f6e65');
        done();
      });
    });
    
    it('should return the second text file next', function(done) {
      fs.readFile(`${__dirname}/../textfiles/two.txt`, function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        expect(testData).to.be.equal('426c696767697479');
        done();
      });
    });
    
    it('should return the third text file last', function(done) {
      fs.readFile(`${__dirname}/../textfiles/three.txt`,
      function(err, data) {
        if(err) throw err;
        let testData = data.toString('hex', 0, 8);
        expect(testData).to.be.equal('416e642068657265');
        done();
      });
    });
    
    let arrayOfThree = [];
    
    function getText1() {
      fs.readFile(`${__dirname}/../textfiles/one.txt`, function(err, data) {
        if(err) throw err;
        arrayOfThree.push(data.toString('hex', 0, 8));
        return arrayOfThree;
      });
    }
    
    function getText2() {
      fs.readFile(`${__dirname}/../textfiles/two.txt`, function(err, data) {
        if(err) throw err;
        arrayOfThree.push(data.toString('hex', 0, 8));
        return arrayOfThree;
      });
    }
    
    function getText3() {
      fs.readFile(`${__dirname}/../textfiles/three.txt`, function(err, data) {
        if(err) throw err;
        arrayOfThree.push(data.toString('hex', 0, 8));
        return arrayOfThree;
      });
    }
    
    getText3(getText2(getText1()));
    
    it('should push the expected results into an array', function(done) {
      
      expect(arrayOfThree).to.be.equal(['54686973206f6e65','426c696767697479','416e642068657265']);
      
      done();
    });
  });
});

