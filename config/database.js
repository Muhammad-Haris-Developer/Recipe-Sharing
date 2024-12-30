const mongoose = require('mongoose');

// const MONGO_URL = "mongodb+srv://mh00167009:Dj0RpXeR3RsYwGhQ@cluster0.9z6mv.mongodb.net/";
const MONGO_URL = "mongodb+srv://mh00167009:Dj0RpXeR3RsYwGhQ@cluster0.9z6mv.mongodb.net/Recipe_Sharing?retryWrites=true&w=majority";

// const mongoConnect = async (callback) => {
//     try{
//         await mongoose.connect(MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB with Mongoose');
//         callback();
//     }
//     catch(err){
//         console.log("MongoDB connection failded: ", err);
//     }
// }
const mongoConnect = async (callback) => {
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000
        });
        console.log('Connected to MongoDB with Mongoose');
        callback();
    }
    catch(err){
        console.log("MongoDB connection failed: ", err);
    }
}

exports.mongoose = mongoose;
exports.mongoConnect = mongoConnect;