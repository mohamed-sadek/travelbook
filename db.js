const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myproject';

class db {
	// let insertDocuments = function(db, x, callback) {
	// 	// Get the documents collection
	// 	let collection = db.collection('documents');
	// 	// Insert some documents
	// 	collection.insertMany([
	// 		{a : x}, {a : 2}, {a : 3}
	// 	], function(err, result) {
	// 		assert.equal(err, null);
	// 		assert.equal(3, result.result.n);
	// 		assert.equal(3, result.ops.length);
	// 		console.log("Inserted 3 documents into the collection");
	// 		callback(result);
	// 	});
	// };

	// getRecords(x) {
	// 	MongoClient.connect(url, function (error, db) {
	//
	// 		let collection = db.collection('documents');
	//
	// 		collection.find({'a': x}).toArray(function (err, docs) {
	// 			return docs;
	// 		});
	// 	});
	// };

	// let removeDocument = function(db, x, callback) {
	// 	// Get the documents collection
	// 	let collection = db.collection('documents');
	// 	// Delete document where a is 3
	// 	collection.deleteMany({ a : x }, function(err, result) {
	// 		assert.equal(err, null);
	// 		assert.equal(1, result.result.n);
	// 		console.log("Removed the document with the field a equal to 3");
	// 		callback(result);
	// 	});
	// };
}

module.exports = function (app) {
	MongoClient.connect(url)
		.then((connection) => {
			app.people = connection.collection('documents');
			console.log("Database connection established")
		})
		.catch((err) => console.error(err))
};