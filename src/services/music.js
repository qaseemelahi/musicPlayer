import {API, requestGet} from '../api';
export const searchAlbum = async (
  searchText,
  page,
  setPage,
  setArtist,
  artist,
  setLoading,
) => {
  let param = {
    term: searchText,
    media: 'music',
    limit: 25,
  };
  if (page === 1) {
    setArtist([]);
  } else {
    param.offset = 25;
  }

  setLoading(true);
  try {
    const songs = await requestGet(API.SEARCH, param);
    if (songs?.results?.length > 0) {
      let tempDate = songs?.results?.map(item => ({
        id: item?.trackId,
        url: item?.previewUrl,
        image: item?.artworkUrl100,
        artist: item?.artistName,
        album: item?.collectionName,
        title: item?.trackName,
        collectionId: item?.collectionId,
      }));
      setArtist([...artist, ...tempDate]);
      setPage(prev => prev + 1);
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log('searchAlbum line 58', error);
  }
};

export const searchSongsByAlbum = async (id, setAlbumSong) => {
  let param = {
    id,
    entity: 'song',
  };
  const songs = await requestGet(API.LOOKUP, param);
  if (songs?.results?.length > 0) {
    let tempDate = songs?.results?.map(item => ({
      id: item?.trackId,
      url: item?.previewUrl,
      image: item?.artworkUrl100,
      artist: item?.artistName,
      album: item?.collectionName,
      title: item?.trackName,
    }));
    setAlbumSong(tempDate);
  }
};
