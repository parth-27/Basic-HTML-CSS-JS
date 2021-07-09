const assert = require('assert');
const MarioChar = require('../models/marioChars');

// describe tests
describe("Updating Records", function () {

    var char

    beforeEach(function (done) {

        char = new MarioChar({
            name: 'Mario',
            weight:50
        });

        // saving character to database using save method. save is async request
        char.save().then(function () {
            done();
        });
    });


    // create tests
    it('Updates a record in the database', function (done) {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(function () {
            MarioChar.findOne({ _id: char._id }).then(function (result) {
                assert(result.name === 'Luigi');
                done();
            })
        });
    });

    // test 2
    it('Increments weights by 1', function (done) {
        MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (record) {
                assert(record.weight === (char.weight + 1));
                done();
            })
        });
    });

});