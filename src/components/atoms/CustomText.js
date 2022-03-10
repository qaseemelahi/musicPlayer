import React from 'react';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
const CustomText = props => {
  return (
    <View style={[props.container]}>
      <Text
        style={[
          props.textStyle,
          {
            fontSize: moderateScale(props.fontSize || 14),
            color: props.color || 'black',
          },
        ]}>
        {props.label}
      </Text>
    </View>
  );
};

export default CustomText;
