var assert = require('assert');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.pluralize(null);

var connection = mongoose.createConnection('mongodb://localhost:27017/master', {useNewUrlParser: true});
var MyModel = connection.model('successfulSheetPath', new Schema({ 
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

var arr = [
    "C:\\filepath\\to\\file.exe", "C:\\filepath\\to\\another\\file.exe"
];

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
