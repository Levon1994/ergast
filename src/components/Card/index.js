import React from 'react';
import {
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Card = ({ 
  url,
  style,
  givenName,
  familyName,
  nationality,
  dateOfBirth,
}) => {

  const onOpenUrl = () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <TouchableOpacity 
      onPress={() => onOpenUrl(url)}
      style={{ ...style, ...localStyles.main }}
    >
      <Text style={localStyles.text}>Name: {givenName} {familyName}, {nationality}</Text>
      <Text style={localStyles.text}>Date of birth: {dateOfBirth}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  main: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#ececec',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Card;
