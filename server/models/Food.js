import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Food = new Schema(
  {
    creatorEmail: { type: String, required: true },
    date: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Food.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});



// Create models for Food and Log
//  - day: {
// 	date: STRING
// 	creatorEmail: STRING
//    }
//   (add the virtual Creator like in the values example)
//  - food: {
//        day: ObjectId, ref: "day"
//        name: STRING
//        CALS: Number
// 	....
// 	creatorEmail
//     }
export default Food;