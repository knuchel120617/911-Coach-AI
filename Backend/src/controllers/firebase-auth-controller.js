import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth
} from '../config/firebase.js';

// mandatory auth object
const auth = getAuth();

class AuthController {
  registerUser(req, res, next) {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        req.userData = {
          email: req.body.email,
          name: req.body.name
        };
        console.log('user registered', userCredential);
        console.log('moving to next middleware');
        // move to the next middleware
        next();
        //res.send(userCredential);
      })
      .catch((error) => {
        res.status(401).send(error.message);
      });
  }
  loginUser(req, res, next) {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.getIdToken();  // Get the access token
      })
      .then((token) => {
        req.accessToken = token;  // Attach token to req object
        console.log('token', token);
        console.log('moving to next middleware');
        next();  // Move to the next middleware
      })
      .catch((error) => {
        res.status(401).send(error.message);
      });
  }
  logOutUser(req, res) {
    signOut(auth)
      .then(() => {
        res.send('User logged out');
      })
      .catch((error) => {
        res.send(error);
      });
  }
}

export default new AuthController;