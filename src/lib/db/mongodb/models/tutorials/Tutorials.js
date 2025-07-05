import mongoose from "mongoose";


const TutorialsModel = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: String, required: true },
  designBy: { type: String, required: true },
  developer: { type: String, required: true },
  description: { type: String, required: true },
  usedFor: { type: [String], default: [] },
  refrenceLink: { type: String, required: true },
  tutorialLink: { type: String, required: true },
  tags: { type: [String], default: [] },
  sidebar: [
    new mongoose.Schema({
      section: { type: String, required: true }, // e.g. "Basics", "OOPs & Interfaces"
      items: [
        new mongoose.Schema({
          key: { type: String, required: true }, // e.g. "introduction", "java-methods"
          title: { type: String, required: true }, // e.g. "Introduction to Java"
        }, { _id: false })
      ]
    }, { _id: false })
  ],
  chapters: {
    type: Map,
    of: new mongoose.Schema({
      title: { type: String, required: true },
      chapter_description: { type: String, required: true },
      content: { type: String }, // HTML/Markdown main content
      blocks: [
        new mongoose.Schema({
          heading: { type: String },
          text: { type: String },
          codeExamples: [
            new mongoose.Schema({
              language: { type: String },
              code: { type: String },
              explanation: { type: String },
            }, { _id: false })
          ],
          image: { type: String },
        }, { _id: false })
      ],
      images: [String],
      tips: [String],
      faqs: [
        new mongoose.Schema({
          question: { type: String },
          answer: { type: String },
        }, { _id: false })
      ]
    }, { _id: false })
  }
});

export default mongoose.models.tutorials || mongoose.model('tutorials', TutorialsModel);