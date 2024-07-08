import express from "express"
//import listEndpoints from "express-list-endpoints"
import cors from "cors"


// import routers



const app = express()


const port = process.env.PORT || 3004


// ---------------- CORS ------------------

const corsOptions = {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }
}

app.use(express.json())
app.use(cors(corsOptions))


// app.user (route, router)


// ---------------- DATABASE ------------------

// setting up database connection