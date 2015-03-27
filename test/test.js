
var build = require('../build');
var client = require('../client');
var assert = require('assert');
var validate = require('html-validator');
var colors = require('colors');

var options = {
  props: {
    name: 'Test',
    title: 'Test',
  },
  Root: require('../examples/src/components/root.jsx'),
};

var html = build(options);

describe('static-react', function() {

  it('should be a string', function() {
    assert.equal(typeof html, 'string');
  });

  it('should create valid html', function(done) {
    validate({ data: html }, function(err, data) {
      if (err) throw err;
      var results = JSON.parse(data);
      console.log('HTML validator'.cyan.underline);
      results.messages.forEach(function(m) {
        if (m.type === 'error') {
          console.log(m.message.red.bold);
        } else {
          console.log(m.message.gray, m.extract ? m.extract.gray : '');
        }
      });
      done();
    });
  });

});

