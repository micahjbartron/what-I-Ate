import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Day = new Schema(
  {
    creatorEmail: { type: String, required: true },
    date: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Day;