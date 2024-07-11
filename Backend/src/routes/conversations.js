import express from "express"
import ConversationController from '../controllers/conversationController.js'
import verifyToken from '../middleware/index.js'

const conversationsRouter = express.Router()

conversationsRouter.post('/', verifyToken, ConversationController.createConversation)
conversationsRouter.get('/:userId', verifyToken, ConversationController.getConversations)

export default conversationsRouter