const mongoose = require('mongoose');
require('dotenv')
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.mongo_url)
        console.log('Db Connected')
    } catch (error) {
        console.log('error :',error);
    }
}

module.exports = {db}