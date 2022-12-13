import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    "mongodb+srv://md:5dPJHleKfsFiBZui@cluster0.vtgyhz1.mongodb.net/NextJS?retryWrites=true&w=majority"
  );
  return handler(req, res);
};

export default connectDB;
