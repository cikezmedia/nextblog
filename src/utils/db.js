import mongoose from 'mongoose';

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error('Unable to connect to database');
  }
};
export default connect;
