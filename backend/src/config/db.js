import mongoose from 'mongoose';
import props from './properties.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(props.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
