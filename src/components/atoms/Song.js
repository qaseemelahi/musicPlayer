/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {ScaledSheet} from 'react-native-size-matters';

export const Song = props => {
  return (
    <TouchableOpacity
      onPress={() => props.skipTo(props?.item)}
      style={[styles.container, props.index === 0 && {borderTopWidth: 1}]}>
      <CustomText
        label={
          (props?.item?.title || 'Song') +
          ' in ' +
          (props?.item?.album || 'album')
        }
      />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingVertical: '15@ms',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingHorizontal: '30@ms',
  },
});
