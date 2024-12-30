const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://mh00167009:Dj0RpXeR3RsYwGhQ@cluster0.9z6mv.mongodb.net/";

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