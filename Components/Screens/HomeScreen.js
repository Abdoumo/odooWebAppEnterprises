import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Chip} from 'react-native-paper';
import DropDown from './dropDown';
import Feather from 'react-native-vector-icons/Feather';

const options = [
  {id: 1, title: 'Artec', link: 'https://artec-int.com'},
  {id: 2, title: 'Pips', link: 'https://pips.artec-int.com/'},
  {id: 3, title: 'Facebook', link: 'https://fb.com'},
];
const listOfClients = ['Nour', 'Hougra', 'Hagar'];
function HomeScreen({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', paddingBottom: 5}}>
        Please Choose Your Company
      </Text>
      <DropDown items={options} />
      <Feather
        onPress={() => navigation.navigate('Login Panel')}
        name="settings"
        style={{
          color: 'black',
          fontSize: 50,
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}
      />
    </View>
  );
}

export default HomeScreen;
