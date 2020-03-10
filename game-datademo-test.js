var assert = require('assert');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/gh4743');
mongoose.set('debug', true);

var tbl_GameData = new mongoose.Schema({
  //id: {type: Number},
  LevelID : {type: Number},
  Data : {type: Array}    
});

var GameData = mongoose.model('Test', tbl_GameData);

var arr = [];
for (var i = 0; i < 81; ++i) {
  arr.push({ val: i, candidate: [0, 1, 2, 3, 4, 5, 6, 7, 8] });
}

GameData.create({ Data: arr }).
  then(doc => {
    console.log(doc);
    process.exit(0);
  });
  
// $ node gh-4743.js 
// Mongoose: tests.insert({ _id: ObjectId("583dab4ca996cc75c5ea7c99"), Data: [ { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 0 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 1 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 2 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 3 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 4 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 5 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 6 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 7 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 8 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 9 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 10 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 11 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 12 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 13 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 14 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 15 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 16 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 17 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 18 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 19 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 20 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 21 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 22 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 23 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 24 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 25 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 26 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 27 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 28 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 29 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 30 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 31 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 32 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 33 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 34 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 35 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 36 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 37 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 38 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 39 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 40 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 41 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 42 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 43 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 44 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 45 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 46 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 47 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 48 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 49 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 50 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 51 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 52 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 53 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 54 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 55 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 56 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 57 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 58 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 59 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 60 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 61 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 62 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 63 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 64 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 65 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 66 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 67 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 68 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 69 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 70 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 71 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 72 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 73 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 74 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 75 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 76 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 77 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 78 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 79 }, { candidate: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], val: 80 } ], __v: 0 })
// { __v: 0,
//   _id: 583dab4ca996cc75c5ea7c99,
//   Data: 
//    [ { candidate: [Object], val: 0 },
//      { candidate: [Object], val: 1 },
//      { candidate: [Object], val: 2 },
//      { candidate: [Object], val: 3 },
//      { candidate: [Object], val: 4 },
//      { candidate: [Object], val: 5 },
//      { candidate: [Object], val: 6 },
//      { candidate: [Object], val: 7 },
//      { candidate: [Object], val: 8 },
//      { candidate: [Object], val: 9 },
//      { candidate: [Object], val: 10 },
//      { candidate: [Object], val: 11 },
//      { candidate: [Object], val: 12 },
//      { candidate: [Object], val: 13 },
//      { candidate: [Object], val: 14 },
//      { candidate: [Object], val: 15 },
//      { candidate: [Object], val: 16 },
//      { candidate: [Object], val: 17 },
//      { candidate: [Object], val: 18 },
//      { candidate: [Object], val: 19 },
//      { candidate: [Object], val: 20 },
//      { candidate: [Object], val: 21 },
//      { candidate: [Object], val: 22 },
//      { candidate: [Object], val: 23 },
//      { candidate: [Object], val: 24 },
//      { candidate: [Object], val: 25 },
//      { candidate: [Object], val: 26 },
//      { candidate: [Object], val: 27 },
//      { candidate: [Object], val: 28 },
//      { candidate: [Object], val: 29 },
//      { candidate: [Object], val: 30 },
//      { candidate: [Object], val: 31 },
//      { candidate: [Object], val: 32 },
//      { candidate: [Object], val: 33 },
//      { candidate: [Object], val: 34 },
//      { candidate: [Object], val: 35 },
//      { candidate: [Object], val: 36 },
//      { candidate: [Object], val: 37 },
//      { candidate: [Object], val: 38 },
//      { candidate: [Object], val: 39 },
//      { candidate: [Object], val: 40 },
//      { candidate: [Object], val: 41 },
//      { candidate: [Object], val: 42 },
//      { candidate: [Object], val: 43 },
//      { candidate: [Object], val: 44 },
//      { candidate: [Object], val: 45 },
//      { candidate: [Object], val: 46 },
//      { candidate: [Object], val: 47 },
//      { candidate: [Object], val: 48 },
//      { candidate: [Object], val: 49 },
//      { candidate: [Object], val: 50 },
//      { candidate: [Object], val: 51 },
//      { candidate: [Object], val: 52 },
//      { candidate: [Object], val: 53 },
//      { candidate: [Object], val: 54 },
//      { candidate: [Object], val: 55 },
//      { candidate: [Object], val: 56 },
//      { candidate: [Object], val: 57 },
//      { candidate: [Object], val: 58 },
//      { candidate: [Object], val: 59 },
//      { candidate: [Object], val: 60 },
//      { candidate: [Object], val: 61 },
//      { candidate: [Object], val: 62 },
//      { candidate: [Object], val: 63 },
//      { candidate: [Object], val: 64 },
//      { candidate: [Object], val: 65 },
//      { candidate: [Object], val: 66 },
//      { candidate: [Object], val: 67 },
//      { candidate: [Object], val: 68 },
//      { candidate: [Object], val: 69 },
//      { candidate: [Object], val: 70 },
//      { candidate: [Object], val: 71 },
//      { candidate: [Object], val: 72 },
//      { candidate: [Object], val: 73 },
//      { candidate: [Object], val: 74 },
//      { candidate: [Object], val: 75 },
//      { candidate: [Object], val: 76 },
//      { candidate: [Object], val: 77 },
//      { candidate: [Object], val: 78 },
//      { candidate: [Object], val: 79 },
//      { candidate: [Object], val: 80 } ] }
// $