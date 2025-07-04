import mongoose from "mongoose";

const PillBar = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }
})

export default mongoose.models.PillBar || mongoose.model("PillBar", PillBar);