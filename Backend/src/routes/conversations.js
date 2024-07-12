import express from "express"
const conversationsRouter = express.Router()
// import ConversationController


conversationsRouter.post('/', verifyToken, ConversationController.createConversation)



export default conversationsRouter