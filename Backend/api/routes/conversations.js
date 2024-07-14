import express from "express"
const conversationsRouter = express.Router()
import ConversationController from '../controllers/conversationController.js'
import verifyToken from '../middleware/index.js'


conversationsRouter.post('/', verifyToken, ConversationController.createConversation)
conversationsRouter.get('/:userId', verifyToken, ConversationController.getConversations)


export default conversationsRouter