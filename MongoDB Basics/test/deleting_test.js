const assert = require('assert');
const MarioChar = require('../models/marioChars');

// describe tests
describe("Deleting Records", function () {

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
    it('Delets a record from the database', function (done) {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (result) {
                assert(result === null);
                done();
            });
        });

    });

    // test 2


});