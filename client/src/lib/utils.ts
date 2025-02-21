import mongoose from "mongoose" 


export const connectDB = () => {
  const db = process.env.DB || "A"
  mongoose.connect(db)
    .then(() => console.log('Connected!'))

  
}

