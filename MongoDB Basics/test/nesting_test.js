const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// describe

describe('Nesting records', function () {

    // dropping the database
    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    })
   
    // create test
    it('Create an author with sub-docs', function (done) {
        
        var pat = new Author({
            name: 'Patric Rothfuss',
            books: [
                {
                    tittle: 'Name of the wind',
                    pages: 400
                },
            ]
        });

        pat.save().then(function () {
            assert(pat.isNew === false);
            done();
        });
    });


    // new test
    it('Add book to author', function (done) {

        var pat = new Author({
            name: 'Patric Rothfuss',
            books: [
                {
                    tittle: 'Name of the wind',
                    pages: 400
                },
            ]
        });

        pat.save().then(function () {
            
            Author.findOne({ name: 'Patric Rothfuss' }).then(function (record) {
               // add book to books array
                record.books.push({
                    title: "Wise man's fear", pages: 500
                });
                record.save().then(function(){
                    Author.findOne({ name: 'Patric Rothfuss' }).then(function (result) {
                        assert(result.books.length === 2);
                        done();
                    })
                });
            });
        });
        

    });
});