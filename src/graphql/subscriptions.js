/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onCreateUserData(filter: $filter, owner: $owner) {
      id
      name
      email
      user_type
      genre_preference
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onUpdateUserData(filter: $filter, owner: $owner) {
      id
      name
      email
      user_type
      genre_preference
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onDeleteUserData(filter: $filter, owner: $owner) {
      id
      name
      email
      user_type
      genre_preference
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onCreateArtist(filter: $filter, owner: $owner) {
      id
      name
      total_likes
      total_play_count
      songs {
        items {
          id
          file_name
          song_name
          likes
          play_count
          artist_Id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onUpdateArtist(filter: $filter, owner: $owner) {
      id
      name
      total_likes
      total_play_count
      songs {
        items {
          id
          file_name
          song_name
          likes
          play_count
          artist_Id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist(
    $filter: ModelSubscriptionArtistFilterInput
    $owner: String
  ) {
    onDeleteArtist(filter: $filter, owner: $owner) {
      id
      name
      total_likes
      total_play_count
      songs {
        items {
          id
          file_name
          song_name
          likes
          play_count
          artist_Id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlayList = /* GraphQL */ `
  subscription OnCreatePlayList(
    $filter: ModelSubscriptionPlayListFilterInput
    $owner: String
  ) {
    onCreatePlayList(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlayList = /* GraphQL */ `
  subscription OnUpdatePlayList(
    $filter: ModelSubscriptionPlayListFilterInput
    $owner: String
  ) {
    onUpdatePlayList(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlayList = /* GraphQL */ `
  subscription OnDeletePlayList(
    $filter: ModelSubscriptionPlayListFilterInput
    $owner: String
  ) {
    onDeletePlayList(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onCreateGenre(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onUpdateGenre(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre(
    $filter: ModelSubscriptionGenreFilterInput
    $owner: String
  ) {
    onDeleteGenre(filter: $filter, owner: $owner) {
      id
      name
      songdatas {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSongData = /* GraphQL */ `
  subscription OnCreateSongData(
    $filter: ModelSubscriptionSongDataFilterInput
    $owner: String
  ) {
    onCreateSongData(filter: $filter, owner: $owner) {
      id
      file_name
      song_name
      likes
      play_count
      artist_Id
      genres {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      playlists {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          songId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSongData = /* GraphQL */ `
  subscription OnUpdateSongData(
    $filter: ModelSubscriptionSongDataFilterInput
    $owner: String
  ) {
    onUpdateSongData(filter: $filter, owner: $owner) {
      id
      file_name
      song_name
      likes
      play_count
      artist_Id
      genres {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      playlists {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          songId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSongData = /* GraphQL */ `
  subscription OnDeleteSongData(
    $filter: ModelSubscriptionSongDataFilterInput
    $owner: String
  ) {
    onDeleteSongData(filter: $filter, owner: $owner) {
      id
      file_name
      song_name
      likes
      play_count
      artist_Id
      genres {
        items {
          id
          genreID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      playlists {
        items {
          id
          playListID
          songDataID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          songId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlayListSongDatas = /* GraphQL */ `
  subscription OnCreatePlayListSongDatas(
    $filter: ModelSubscriptionPlayListSongDatasFilterInput
    $owner: String
  ) {
    onCreatePlayListSongDatas(filter: $filter, owner: $owner) {
      id
      playListID
      songDataID
      playList {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlayListSongDatas = /* GraphQL */ `
  subscription OnUpdatePlayListSongDatas(
    $filter: ModelSubscriptionPlayListSongDatasFilterInput
    $owner: String
  ) {
    onUpdatePlayListSongDatas(filter: $filter, owner: $owner) {
      id
      playListID
      songDataID
      playList {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlayListSongDatas = /* GraphQL */ `
  subscription OnDeletePlayListSongDatas(
    $filter: ModelSubscriptionPlayListSongDatasFilterInput
    $owner: String
  ) {
    onDeletePlayListSongDatas(filter: $filter, owner: $owner) {
      id
      playListID
      songDataID
      playList {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGenreSongDatas = /* GraphQL */ `
  subscription OnCreateGenreSongDatas(
    $filter: ModelSubscriptionGenreSongDatasFilterInput
    $owner: String
  ) {
    onCreateGenreSongDatas(filter: $filter, owner: $owner) {
      id
      genreID
      songDataID
      genre {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGenreSongDatas = /* GraphQL */ `
  subscription OnUpdateGenreSongDatas(
    $filter: ModelSubscriptionGenreSongDatasFilterInput
    $owner: String
  ) {
    onUpdateGenreSongDatas(filter: $filter, owner: $owner) {
      id
      genreID
      songDataID
      genre {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGenreSongDatas = /* GraphQL */ `
  subscription OnDeleteGenreSongDatas(
    $filter: ModelSubscriptionGenreSongDatasFilterInput
    $owner: String
  ) {
    onDeleteGenreSongDatas(filter: $filter, owner: $owner) {
      id
      genreID
      songDataID
      genre {
        id
        name
        songdatas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songData {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          nextToken
        }
        playlists {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
