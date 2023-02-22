import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Linking} from 'react-native';
import {Button} from 'react-native-paper';

const SIgnIn = () => {
  return (
    <View style={styles.container}>
      <Button
        style={{ margin: 5 }}
        icon="phone"
        mode="outlined"
        onPress={() => Linking.openURL(`tel:+213541885897`)}>
        Call us In Our hot line
      </Button>
      <Button
        style={{ margin: 5 }}
        icon="email"
        mode="outlined"
        onPress={() => Linking.openURL(`mailto:bedoushop@gmail.com`)}>
        Send Email Now
      </Button>
    </View>
  );
};

export default SIgnIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
