console.log = function() {};
const fs = require('fs');
const { expect } = require('chai');
const Structured = require('structured');

// This filepath does not need to go up a directory level
const code = fs.readFileSync('main.js', 'utf-8');

describe('', function() {
  it('', function() {
    const structure = () => {
      // Enter the struture here
    };

    const isMatch = Structured.match(code, structure);

    expect(isMatch, 'Did you...?').to.not.be.false;
  });
});
