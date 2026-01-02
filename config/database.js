
//connect mongoose to mongodb
const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
}

// export default ConnectDB - this way not work we use below

module.exports = connectDB