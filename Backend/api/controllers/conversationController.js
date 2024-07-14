import ConversationModel from "../models/Conversation.js";

const ConversationController = {
  createConversation: async (req, res, next) => {
    try {
      const userId = req.body.userId;
      const type = req.body.type; // simulation or QandA
      const category = req.body.category;
      const transcript = req.body.transcript;

      const conversation = await ConversationModel.create({ userId, type, category, transcript });
      res.status(201).json(conversation);
    } catch (error) {
      next(error);
    }
  },
  getConversations: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const conversations = await ConversationModel.find({ userId });
      if (!conversations) return next(new Error("No conversations found"));
      res.status(200).json(conversations);
    } catch (error) {
      next(error);
    }
  }
}

export default ConversationController;
