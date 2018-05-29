const assert = require('assert');
const User = require('../models-m1')

// Describe tests
describe('Awesome, it works!', function(done){

    // Create test
    it('Saves a record to the database', function(){
      var char = new User({
          name: 'Sandy'
      })  

      char.save().then(function(){
        assert(char.isNew === false)
        done()
      })
    });

    // next test

});