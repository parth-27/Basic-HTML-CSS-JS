const assert = require('assert');
const MarioChar = require('../models/marioChars');

// describe tests
describe("Finding Records", function () {

    var char

    beforeEach(function (done) {
        
        char = new MarioChar({
            name: 'Mario'
        });
    
        // saving character to database using save method. save is async request
        char.save().then(function () {
            done();
        });
    });


    // create tests
    it('Finds a record from the database', function (done) {
        
        // if we don't pass anything to find function then it will find every thing from the model
        MarioChar.findOne({ name: 'Mario' }).then(function (result) {
            assert(result.name === 'Mario');
            done();
        });

    });

    // test 2
    it('Finds one record from the database by id', function (done) {

        // if we don't pass anything to find function then it will find every thing from the model
        MarioChar.findOne({ _id : char._id }).then(function (result) {
            
            // as we can't compare two objects so first convert them in strings and then compare them.
            assert(result._id.toString() === char._id.toString());
            done();
        });

    });


});