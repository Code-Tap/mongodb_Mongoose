var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://10.24.20.82:27017/";
var url = "mongodb://localhost:27017/";

// db.unresourced.createIndex( { RegNum: 1, Date: 1}, { unique: true } ) // Prevent duplicates from being loaded

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("master");
    var collection = dbo.collection("unresourced");
    var query = { RegNum: 'KX64OBZ' }; //SL16ZHE
  collection.find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//   var duplicates = [];

//   dbo.command(
//     {aggregate: "unresourced",
//       pipeline: [
//         { $group: { _id: { RegNum: '$RegNum', Date: '$Date'}, dups: { "$addToSet": "$_id" }, count: { "$sum": 1 } }},
//         { $match: { count: { "$gt": 1 }}}
//       ],
//       allowDiskUse: true }
//   )
//   .result
//   .forEach(function(doc) {
//       doc.dups.shift();
//       doc.dups.forEach(function(dupId){ duplicates.push(dupId); })
//   })
//   printjson(duplicates); //optional print the list of duplicates to be removed
  
//   collection.remove({_id:{$in:duplicates}});

// });





// })
// var duplicates = [];
// collection.aggregate([
//         {$group: {
//             _id: {RegNum: '$RegNum', Date: '$Date'},
//             dups: {"$addToSet": "$_id"},
//             count: {"$sum": 1}
//             }
//         },
//         {$match: { 
//             count: {"$gt": 1}
//             }
//         }
//     ],
//     {
//         allowDiskUse: true
//       }).result
//         .forEach(function(doc) {
//          doc.dups.shift();
//          doc.dups.forEach(function(dupId){ duplicates.push(dupId); })
// })
// printjson(duplicates); //optional print the list of duplicates to be removed

// collection.remove({_id:{$in:duplicates}});

// });





// toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//       });
// });


    // var pipeline = [
    //     {$group: {
    //         _id: {RegNum: '$RegNum', Date: '$Date'},
    //         uniqueIds: {$addToSet: "$_id"},
    //         count: {$sum: 1}
    //         }
    //     },
    //     {$match: { 
    //         count: {"$gt": 1}
    //         }
    //     },
    //     {$sort: {
    //         count: -1
    //         }
    //     }
    // ],
    // counter = 0,
    // bulk = collection.initializeOrderedBulkOp();
      
    // collection.aggregate(pipeline).forEach(async function(doc) {
    //     try {
    //     bulk.find({ 
    //         "_id": { "$in": doc.uniqueIds },
    //         count: {"$gt": 1}   
    //     },{
    //         allowDiskUse: true}
    //         ).remove();

    //     counter++;
    //     if ( counter % 500 == 0 ) {
    //         // Execute per 500 operations and re-init.
    //         bulk.execute(); 
    //         bulk = collection.initializeOrderedBulkOp(); 
    //     }
    //     doc();
    // } catch (err) {
    //     doc(err);
    // });

    
    // // Catch any under or over the 500's and clean up queues
    // if (counter % 500 != 0)
    //     bulk.execute(); 
    // });

// {
//     allowDiskUse: true
//   }




// db query

// db.getCollection('unresourced').find({
//     Date: {
//         $gte: ISODate("2018-10-01"),
//         $lte: ISODate("2019-10-15")
//     }
// }).limit(5).sort( {Date: 1})