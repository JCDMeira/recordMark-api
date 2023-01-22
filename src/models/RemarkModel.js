import mongoose from "mongoose";

const RemarkSchema = mongoose.Schema({
  time: { type: Number, required: true },
  time_to_string: { type: String, required: true },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  created_at: { type: Number, required: true },
  updated_at: { type: Number, required: true },
});

const ReemarkModel = mongoose.model("remark", RemarkSchema);
