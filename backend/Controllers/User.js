import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(201).send({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).send({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(400).send(error.message);
  }
};



