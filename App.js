// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Components/Screens/HomeScreen';
import DetailsScreen from './Components/Screens/Details';
import Login from './Components/pages/Login';
import OWAESignIn from './Components/pages/OWAESignIn.js';
import SIgnIn from './Components/pages/SIgnIn';
import Dashboard from './Components/pages/Dashboard';

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
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="OWAESignIn" component={OWAESignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
