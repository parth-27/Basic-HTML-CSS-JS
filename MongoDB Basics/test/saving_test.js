const assert = require('assert');
const MarioChar = require('../models/marioChars');

// describe tests
describe("Saving Records", function () {
    // create tests
    it('Saves a record to the database', function (done) {
        var char = new MarioChar({
            name: 'Mario'
        });

        // saving character to database using save method. save is async request
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    // test 2
});