import {TouchableOpacity, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from 'assets/images';
import React from 'react';

export const Player = ({isPlay, setPlay,artWork}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignSelf: 'center'}}>
      <Image
        style={styles.image}
        source={artWork ? {uri: artWork} : Images.musicPlaceholder}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={() => setPlay()}>
        <Image
          style={[styles.image, styles.imageLogo]}
          source={isPlay ? Images.play : Images.pause}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  image: {
    width: '90@ms',
    height: '90@ms',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  imageLogo: {
    width: '30@ms',
    height: '30@ms',
    alignSelf: 'center',
    marginVertical: '10@ms',
  },
});
