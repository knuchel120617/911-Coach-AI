import ConversationModel from "../models/Conversation.js";

const ConversationController = {
  createConversation: async (req, res, next) => {
    console.log('inside the create converstation')
    console.log('req', req)
    console.log('req.body', req.body)
    try {
      console.log('starting to create the conv')
      const userId = req.body.userId;
      const type = req.body.type; // simulation or QandA
      const category = req.body.category;
      const transcript = req.body.transcript;
      console.log("transcript", transcript);

      const conversation = await ConversationModel.create({ userId, type, category, transcript });
      console.log('added this conversation to database', conversation);
      res.status(201).json(conversation);
    } catch (error) {
      console.log('not able to add user to db', error);
      next(error);
    }
  },
  getConversations: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const conversations = await ConversationModel.find({ userId });
      console.log('conv found:', conversations);
      if (!conversations) return next(new Error("No conversations found"));
      res.status(200).json(conversations);
    } catch (error) {
      next(error);
    }
  }
}

export default ConversationController;