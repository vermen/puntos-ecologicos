import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://root:root@cluster0.qlqx2o1.mongodb.net/ecologicoUts?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MogoDB conectado en: ${url}`);
  } catch (e) {
    console.log('error:' + e.message);
    process.exit(1);
  }
}

export default connectDB;