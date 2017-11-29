const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/myproject';
const COLLECTION = 'trips';

module.exports = function (app) {
	MongoClient.connect(URL)
		.then((connection) => {
			app.people = connection.collection(COLLECTION);
			console.log("Database connection established")
		})
		.catch((err) => console.error(err))
};