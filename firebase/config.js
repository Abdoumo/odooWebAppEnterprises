// Import the functions you need from the SDKs you need
import {SHA256} from 'crypto-js';
import {initializeApp} from 'firebase/app';
import {getDatabase, update, ref, set} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmnK327EeGetjMPZ_WcWurYGdxEZaIwzQ',
  authDomain: 'owae-d397a.firebaseapp.com',
  projectId: 'owae-d397a',
  storageBucket: 'owae-d397a.appspot.com',
  messagingSenderId: '382245839317',
  appId: '1:382245839317:web:a8e54b3705ae0d6a325d5c',
  measurementId: 'G-N57PSK5SX7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export function CreatePartner(props) {
  const username = props.username;
  const Password = props.Password;
  const Email = props.Email;
  const Phone = props.Phone;
  const Name = props.Name;
  const ImageUrl = props.ImageUrl;
  const hashedPassword = SHA256(Password).toString();
  set(ref(db, 'users/' + username), {
    username: username,
    Password: hashedPassword,
    Email: Email,
    Phone: Phone,
    Name: Name,
    ImageUrl: ImageUrl,
  })
    .then(() => alert('added'))
    .catch(err => alert(err));
}

export function UpdatePartner(props) {
  const username = props.username;
  const Password = props.Password;
  const Email = props.Email;
  const Phone = props.Phone;
  const Name = props.Name;
  const ImageUrl = props.ImageUrl;
  const hashedPassword = SHA256(Password).toString();
  update(ref(db, 'users/' + username), {
    username: username,
    Password: hashedPassword,
    Email: Email,
    Phone: Phone,
    Name: Name,
    ImageUrl: ImageUrl,
  })
    .then(() => alert('added'))
    .catch(err => alert(err));
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
