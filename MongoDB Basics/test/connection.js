const mongoose = require('mongoose');


mongoose.set('useFindAndModify', false);    // for resolving the depreciated warning in deleting the record using findOneAndRemove


// ES6 Promise
mongoose.Promise = global.Promise;

// hook in mocha lets you run the code part either before the test or after the test
// connect to db before test
before(function (done) {
    
    // connect to mongodb
    // if the db doesn't exist it will create one
    mongoose.connect(
        'mongodb://localhost/testaroo',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ); // pass connection string to connect


    // only once connection is open then call the function
    // at every error fire the error function
    mongoose.connection.once('open', function () {
        console.log("Connection done successfully!!!");
        done();
    }).on('error', function (error) {
        console.log('Connection Failed. TRY AGAIN!!', error);
    });    
});


// drop the chars collection before each test
beforeEach(function (done) {
   
    // drop the collection
    // pluralize the collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });

});