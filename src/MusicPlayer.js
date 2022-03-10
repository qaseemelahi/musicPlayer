import React, {useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {Search, ListView, Album, Song, Player} from 'components/atoms';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {searchAlbum, searchSongsByAlbum} from './services/music';

const HEIGHT = Dimensions.get('screen').height;
const MusicPlayer = () => {
  const [searchText, setSearchText] = useState('');
  const [artist, setArtist] = useState([]);
  const [albumSong, setAlbumSong] = useState([]);
  const [loading, setLoading] = useState(false);
  const [artWork, setArtWork] = useState('');
  const [page, setPage] = useState(1);
  const isPlay = usePlaybackState();
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({});
  };
  const searchAlbumService = () =>
    searchAlbum(searchText, page, setPage, setArtist, artist, setLoading);
  const setAlbumSongService = id => searchSongsByAlbum(id, setAlbumSong);
  useEffect(() => {
    setupPlayer();
  }, []);

  const togglePlayer = async playerState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playerState !== State.Paused) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    }
  };

  const skipTo = async item => {
    setAlbumSongService(item.collectionId);
    setArtWork(item.image);
    TrackPlayer.reset();
    await TrackPlayer.add(item);
    TrackPlayer.play();
  };
  const renderAlbum = ({item, index}) => {
    return <Album skipTo={skipTo} index={index} item={item} />;
  };
  const renderSong = ({item, index}) => {
    return <Song skipTo={skipTo} item={item} index={index} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.albumContainer}>
        <Search
          containerStyle={{marginHorizontal: scale(13)}}
          placeholder={'Search Artist'}
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={searchAlbumService}
        />
        <ListView
          onEndReached={searchAlbumService}
          loading={loading}
          onRefresh={searchAlbumService}
          data={artist}
          renderItem={renderAlbum}
        />
      </View>
      <View style={styles.songContainer}>
        <Player
          artWork={artWork}
          isPlay={isPlay !== State.Playing}
          setPlay={() => togglePlayer(isPlay)}
        />
        <ListView data={albumSong} renderItem={renderSong} />
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  albumContainer: {
    width: '40%',
    borderRightWidth: 2,
    paddingVertical: 20,
    height: HEIGHT,
  },
  songContainer: {
    width: '60%',
    padding: '20@ms',
    height: verticalScale(HEIGHT - 320),
  },
});
