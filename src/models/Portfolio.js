import mongoose from 'mongoose';

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio ||
  mongoose.model('Portfolio', portfolioSchema);
