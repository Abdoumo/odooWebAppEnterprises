import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const OWAESignIn = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  async function signIn(email, password) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        onChangeText={(text) => {
          // Check if the text input matches an email format
          if (/^\S+@\S+\.\S+$/.test(text)) {
            setEmail(text);
          } else {
            setUsername(text);
          }
        }}
        value={email || username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button title="Sign In" onPress={() => signIn()} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default OWAESignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '80%',
  },
  error: {
    color: 'red',
    margin: 10,
  },
});
