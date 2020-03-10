var assert = require('assert');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.pluralize(null);
// mongoose.set('debug', true);

// mongoose.connect('mongodb://localhost/droppedSheets');
// mongoose.connect('mongodb://10.24.20.82/master');
// mongoose.set('debug', true);

var connection = mongoose.createConnection('mongodb://localhost:27017/master', {useNewUrlParser: true});
var MyModel = connection.model('failedSheetPath', new Schema({ 
                            full_path: { type: String, unique: true },
                        }));

connection.once('open', function () {
    //Kill the MongoDB server here
    setTimeout(function() {
    mongoose.disconnect();
  },5000);
});

connection.once('close', function () {
   console.log("Closed mongoose");
});

// var tbl_sheetPathData = new Schema({
//   //id: {type: Number},
//   sheetPath : {type: String},
//   //Data : {type: Array}    
// });

// var sheetData = mongoose.model('tbl_sheetPathData', tbl_sheetPathData, 'tbl_sheetPathData');

var arr = [
    "C:\\filepath\\to\\file.exe", "C:\\filepath\\to\\another\\file.exe"
];

// arr.forEach((entry) => {
//     sheetData.create({ sheetPath: entry })
//     .then(doc => {
//         console.log(doc);
//     })
//     .catch(err => console.log("err while saving", err));
// }).then(
//     mongoose.disconnect()
// );

const sheetDataPromise = entry => {
    MyModel.create({ full_path: entry }).
    catch(() => {})
    return Promise.resolve('ok')
}

const anAysncFunction = async entry => {
    return sheetDataPromise(entry)
}

const getData = async () => {
    return Promise.all(arr.map(entry => anAysncFunction(entry)))
}

getData().then(data => {
    console.log(data.length, "Records written to DB")
})


// const asynyprocesMultipleDocs = arr => Promise.all(
//     arr.map((entry) => {sheetData.create({ sheetPath: entry })
//   }))
//   .catch(err => {
//     console.log('err: ' + err);
//   }).finally(
//     mongoose.disconnect()
//   );