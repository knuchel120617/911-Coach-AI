import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  transcript: {
    type: [{
      content: { type: String, required: true },
      timestamp: { type: Date, required: true }
    }],
    required: true
  },
  metadata: {
    createdAtT: { type: Date, required: true, default: Date.now }
  }
})

const User = mongoose.model('Conversation', conversationSchema);

export default Conversation;