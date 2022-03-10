import {TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import CustomText from './CustomText';
import colors from 'util/color';
import Images from 'assets/images';
export const Album = props => {
  return (
    <TouchableOpacity
      onPress={() => props.skipTo(props.item)}
      style={styles.container}>
      <Image
        style={styles.image}
        source={
          props.item?.image ? {uri: props.item?.image} : Images.musicPlaceholder
        }
      />
      <View style={styles.textContainer}>
        <CustomText label={props.item?.title || 'Song Name'} />
        <CustomText
          fontSize={13}
          color={colors.grey}
          label={props.item?.artist || 'Artist'}
        />
        <CustomText
          fontSize={9}
          // eslint-disable-next-line react-native/no-inline-styles
          textStyle={{marginTop: 6}}
          color={colors.grey}
          label={props.item?.album || 'Album'}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '20@ms',
    borderBottomWidth: 1,
  },
  image: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: 7,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: '7@s',
  },
});
