import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

function DetailsScreen({route, navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: otherParam.title,
    });
  }, []);
  const {itemId, otherParam} = route.params;
  console.log(otherParam, 'link');
  return <WebView source={{uri: otherParam?.link}} />;
}

export default DetailsScreen;
