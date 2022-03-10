import {View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
export const Search = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput style={[styles.input, props.inputStyle]} {...props} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderWidth: 2,
    padding: '10@ms',
    borderColor: 'grey',
    borderRadius: 5,
  },
  input: {
    fontSize: '12@ms',
    padding: 0,
    margin: 0,
  },
});
