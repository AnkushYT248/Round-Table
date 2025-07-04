import mongoose from "mongoose"

const navItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }
});

const navCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    items: [navItemSchema],
});

export default mongoose.models.NavCategory || mongoose.model("NavCategory", navCategorySchema);