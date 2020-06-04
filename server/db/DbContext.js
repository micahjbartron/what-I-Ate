import mongoose from "mongoose";
import DaySchema from "../models/Day";
import ProfileSchema from "../models/Profile";

class DbContext {
  Day = mongoose.model("Day", DaySchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
