// middleware that validates the token

import { admin } from "../config/firebase.js";

// token sent from the header in auth header
const verifyToken = (req, res, next) => {
  const idToken = req.headers.authorization

  if (!idToken) {
    return res.status(401).send({ message: "No token provided" })
  }

  if (idToken && idToken.split(" ")[0] !== "Bearer") {
    return res.status(401).send({ message: "Invalid token" })
  }

  const token = idToken.split(" ")[1]
  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken
      // Proceed to the next middleware or route handler

      next()
    })
    .catch((error) => {
      console.error("Error verifying token:", error)
      return res.status(403).send({ message: "Could not authorize" })
    })
}

export default verifyToken