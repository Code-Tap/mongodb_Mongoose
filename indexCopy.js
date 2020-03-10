var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.24.20.82:27017/";
var duplicates = [];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("master");
    var collection = dbo.collection("unresourced");
//  var query = { RegNum: 'SL16ZHE' };
//   collection.find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
console.log("Aggregating");
    collection.aggregate([
            {$group: {
                _id: {RegNum: '$RegNum', Date: '$Date'},
                uniqueIds: {"$addToSet": "$_id"},
                count: {"$sum": 1}
                }
            },
            {$match: { 
                count: {"$gt": 1}
                }
            },
        ],
        {
            allowDiskUse: true
        }).forEach(function(doc) {
            console.log("finished aggregating, deleting...");
            doc.uniqueIds.shift();      // First element skipped for deleting
            doc.uniqueIds.forEach( function(err, dupId){ 

                    collection.deleteOne({_id:new MongoClient.ObjectID(dupId)}, function(err, results) {
                // duplicates.push(dupId);   // Getting all duplicate ids
                if (err){
                    console.log(dupId);
                    throw err;
                    }
                    console.log("success");
                });
        });
        // Remove all duplicates in one go    
        // collection.deleteMany({_id:{$in:duplicates}}) 
    });
});