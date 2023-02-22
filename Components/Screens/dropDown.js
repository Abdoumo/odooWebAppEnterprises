import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
Feather.loadFont();

const DropDown = props => {
  const navigation = useNavigation();
  // to edit the async and await for the api https://github.com/onmotion/react-native-autocomplete-dropdown
  const items = props.items;
  const [selectedItem, setSelectedItem] = useState('');
  function OnItemSelect({event}) {
    console.log(event, 'dsf');
    navigation.navigate('WEBAPP', {otherParam: event});
    // console.log('object');
  }

  return (
    <View>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        textInputProps={{
          placeholder: 'Type 3+ letters (Amo...)',
          autoCorrect: false,
          autoCapitalize: 'none',
          style: {
            borderRadius: 25,
            backgroundColor: '#383b42',
            color: '#fff',
            minWidth: '77%',
            paddingLeft: 18,
          },
        }}
        onSubmit={event =>
          navigation.navigate('WEBAPP', {
            itemId: 86,
            otherParam: event,
          })
        }
        onChangeText={event =>
          // navigation.navigate('WEBAPP', {
          //   itemId: 86,
          //   otherParam: event,
          // })
          console.log('object 1 1 1 ')
        }
        onSelectItem={event =>
          event !== null && navigation.navigate('WEBAPP', {otherParam: event})
        }
        dataSet={items}
        rightButtonsContainerStyle={{
          right: 8,
          height: 30,

          alignSelf: 'center',
        }}
        inputContainerStyle={{
          backgroundColor: '#383b42',
          borderRadius: 25,
        }}
        suggestionsListContainerStyle={{
          backgroundColor: '#383b42',
        }}
        // containerStyle={{ flexGrow: 1, flexShrink: 1 }}
        renderItem={(item, text) => (
          <Text style={{color: '#fff', padding: 15}}>{item.title}</Text>
        )}
        ChevronIconComponent={
          <Feather name="chevron-down" size={20} color="#fff" />
        }
        ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
        closeOnBlur={true}
        // inputHeight={50}
        // showChevron={false}
        // showClear={false}
      />
    </View>
  );
};

export default DropDown;
