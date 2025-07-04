import mongoose from "mongoose";

const TutorialsModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tutorialLink: {
        type: String,
        required: true
    }
})

export default mongoose.models.tutorials || mongoose.model('tutorials', TutorialsModel);