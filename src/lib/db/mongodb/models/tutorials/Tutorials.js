import mongoose from "mongoose";

const TutorialsModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
    },
    designBy: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    usedFor: {
        type: [String],
        default: [],
    },
    refrenceLink: {
        type: String,
        required: true
    },
    tutorialLink: {
        type: String,
        required: true
    }
})

export default mongoose.models.tutorials || mongoose.model('tutorials', TutorialsModel);