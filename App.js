// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Components/Screens/HomeScreen';
import DetailsScreen from './Components/Screens/Details';
import Login from './Components/Screens/Login';
import SIgnIn from './Components/Screens/SIgnIn';

const Stack = createNativeStackNavigator();

function App() {
  // const navigation = useNavigation();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     // headerShown: false,
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="odoo Web App Entreprise" component={HomeScreen} />
        <Stack.Screen name="WEBAPP" component={DetailsScreen} />
        <Stack.Screen name="Login Panel" component={Login} />
        <Stack.Screen name="Sign In" component={SIgnIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
