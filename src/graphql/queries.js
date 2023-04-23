/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
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
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        user_type
        genre_preference
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        total_likes
        total_play_count
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPlayList = /* GraphQL */ `
  query GetPlayList($id: ID!) {
    getPlayList(id: $id) {
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
export const listPlayLists = /* GraphQL */ `
  query ListPlayLists(
    $filter: ModelPlayListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        songdatas {
          items {
            songData {
              file_name
              song_name
              likes
              play_count
            }
          }
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
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
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        songdatas {
          items {
            songData {
              file_name
              song_name
              likes
              play_count
            }
          }
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSongData = /* GraphQL */ `
  query GetSongData($id: ID!) {
    getSongData(id: $id) {
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
export const listSongData = /* GraphQL */ `
  query ListSongData(
    $filter: ModelSongDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file_name
        song_name
        likes
        play_count
        artist_Id
        genres {
          items {
            genre {
              name
            }
          }
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPlayListSongDatas = /* GraphQL */ `
  query GetPlayListSongDatas($id: ID!) {
    getPlayListSongDatas(id: $id) {
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
export const listPlayListSongDatas = /* GraphQL */ `
  query ListPlayListSongDatas(
    $filter: ModelPlayListSongDatasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayListSongDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playListID
        songDataID
        playList {
          id
          name
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGenreSongDatas = /* GraphQL */ `
  query GetGenreSongDatas($id: ID!) {
    getGenreSongDatas(id: $id) {
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
export const listGenreSongDatas = /* GraphQL */ `
  query ListGenreSongDatas(
    $filter: ModelGenreSongDatasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenreSongDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        genreID
        songDataID
        genre {
          id
          name
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
