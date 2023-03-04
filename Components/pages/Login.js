import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {theme} from '../core/theme';
import {useNavigation} from '@react-navigation/native';
import {CreatePartner} from '../../firebase/config';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [PasswordShow, setPasswordShow] = React.useState(true);



  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 35,
          fontFamily: 'Cochin',
          fontWeight: 'bold',
          marginBottom: 25,
        }}>
        Login
      </Text>
      <TextInput
        style={{width: '80%', marginBottom: 25}}
        label="User Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        secureTextEntry={PasswordShow}
        right={
          <TextInput.Icon
            value={Password}
            icon="eye"
            onPress={() =>
              PasswordShow === true
                ? setPasswordShow(false)
                : setPasswordShow(true)
            }
          />
        }
        style={{width: '80%', marginBottom: 25}}
        onChangeText={Password => setPassword(Password)}
      />
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          justifyContent: 'space-evenly',
        }}>
        <Button
          style={{margin: 5}}
          icon="login"
          mode="contained"
          onPress={() => CreatePartner({username, password})}>
          Login
        </Button>
        <Button
          style={{margin: 5}}
          icon="door"
          mode="outlined"
          onPress={() => navigation.navigate('Sign In')}>
          Sign In
        </Button>
        <Button
          style={{margin: 5}}
          icon="door"
          mode="outlined"
          onPress={() => navigation.navigate('OWAESignIn')}>
          OWAESignIn
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

