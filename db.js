const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/myproject';

var insertDocuments = function(db, x, callback) {
	// Get the documents collection
	var collection = db.collection('documents');
	// Insert some documents
	collection.insertMany([
		{a : x}, {a : 2}, {a : 3}
	], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
};

var findDocuments = function(db, x, callback) {
	// Get the documents collection
	var collection = db.collection('documents');
	// Find some documents
	collection.find({'a': x}).toArray(function(err, docs) {
		assert.equal(err, null);
		callback(docs);
	});
};

var removeDocument = function(db, x, callback) {
	// Get the documents collection
	var collection = db.collection('documents');
	// Delete document where a is 3
	collection.deleteMany({ a : x }, function(err, result) {
		assert.equal(err, null);
		assert.equal(1, result.result.n);
		console.log("Removed the document with the field a equal to 3");
		callback(result);
	});
};

MongoClient.connect(url, function(error, db) {
	if (error) {
		console.log(error);
	}

	insertDocuments(db, function() {

	});

	// removeDocument(db, 2, function() {
	// 	findDocuments(db, 2, function(docs) {
	// 		console.log(docs);
	// 		db.close();
	// 	});
	// });
});