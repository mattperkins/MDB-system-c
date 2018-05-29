const assert = require('assert')
const User = require('../models-m1')

// Describe tests
describe('Awesome, it works!', (done)=> {

    // Create test
    it('Saves a record to the database', ()=> {
      var char = new User({
          name: 'Sandy'
      })  

      char.save().then(()=> {
        assert(char.isNew === false)
        done()
      })
    })

    // next test

})