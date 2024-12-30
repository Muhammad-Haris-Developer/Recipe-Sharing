const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017/Recipe_Sharing";

const mongoConnect = async (callback) => {
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB with Mongoose');
        callback();
    }
    catch(err){
        console.log("MongoDB connection failded: ", err);
    }
}

exports.mongoose = mongoose;
exports.mongoConnect = mongoConnect;