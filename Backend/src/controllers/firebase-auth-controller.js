import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth
} from '../config/firebase.js';

// mandatory auth object
const auth = getAuth();

class AuthController {
  registerUser(req, res) {
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
        res.send(error);
      });
  }
  loginUser(req, res) {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res.send(userCredential);
      })
      .catch((error) => {
        res.send(error);
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