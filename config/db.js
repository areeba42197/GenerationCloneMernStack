import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL) 
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Detailed success message
    } catch (error) {
        console.error(`Error: ${error.message}`); // Log the actual error
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
