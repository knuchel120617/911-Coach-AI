import mongoose from "mongoose"

const transcriptSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    enum: ['user', 'ai']
  },
  comment: {
    type: String,
    required: true
  }
})

const conversationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  //id: {
  //  type: mongoose.Schema.Types.ObjectId,
  //  required: true
  //},
  type: {
    type: String,
    required: true,
    enum: ['simulation', 'QAndA']
  },
  category: {
    type: String,
    required: true
  },
  transcript: {
    type: [transcriptSchema],
    required: true
  },
  metadata: {
    createdAtT: { type: Date, required: true, default: Date.now }
  }
})

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;