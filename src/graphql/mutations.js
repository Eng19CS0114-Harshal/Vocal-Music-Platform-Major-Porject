/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
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
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
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
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createPlayList = /* GraphQL */ `
  mutation CreatePlayList(
    $input: CreatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    createPlayList(input: $input, condition: $condition) {
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
export const updatePlayList = /* GraphQL */ `
  mutation UpdatePlayList(
    $input: UpdatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    updatePlayList(input: $input, condition: $condition) {
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
export const deletePlayList = /* GraphQL */ `
  mutation DeletePlayList(
    $input: DeletePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    deletePlayList(input: $input, condition: $condition) {
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
export const deleteGenre = /* GraphQL */ `
  mutation DeleteGenre(
    $input: DeleteGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    deleteGenre(input: $input, condition: $condition) {
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
export const deleteSongData = /* GraphQL */ `
  mutation DeleteSongData(
    $input: DeleteSongDataInput!
    $condition: ModelSongDataConditionInput
  ) {
    deleteSongData(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePlayListSongDatas = /* GraphQL */ `
  mutation DeletePlayListSongDatas(
    $input: DeletePlayListSongDatasInput!
    $condition: ModelPlayListSongDatasConditionInput
  ) {
    deletePlayListSongDatas(input: $input, condition: $condition) {
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
export const deleteGenreSongDatas = /* GraphQL */ `
  mutation DeleteGenreSongDatas(
    $input: DeleteGenreSongDatasInput!
    $condition: ModelGenreSongDatasConditionInput
  ) {
    deleteGenreSongDatas(input: $input, condition: $condition) {
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
export const createGenre = /* GraphQL */ `
  mutation CreateGenre(
    $input: CreateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    createGenre(input: $input, condition: $condition) {
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
export const updateGenre = /* GraphQL */ `
  mutation UpdateGenre(
    $input: UpdateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    updateGenre(input: $input, condition: $condition) {
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
export const createSongData = /* GraphQL */ `
  mutation CreateSongData(
    $input: CreateSongDataInput!
    $condition: ModelSongDataConditionInput
  ) {
    createSongData(input: $input, condition: $condition) {
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
export const updateSongData = /* GraphQL */ `
  mutation UpdateSongData(
    $input: UpdateSongDataInput!
    $condition: ModelSongDataConditionInput
  ) {
    updateSongData(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      songId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlayListSongDatas = /* GraphQL */ `
  mutation CreatePlayListSongDatas(
    $input: CreatePlayListSongDatasInput!
    $condition: ModelPlayListSongDatasConditionInput
  ) {
    createPlayListSongDatas(input: $input, condition: $condition) {
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
export const updatePlayListSongDatas = /* GraphQL */ `
  mutation UpdatePlayListSongDatas(
    $input: UpdatePlayListSongDatasInput!
    $condition: ModelPlayListSongDatasConditionInput
  ) {
    updatePlayListSongDatas(input: $input, condition: $condition) {
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
export const createGenreSongDatas = /* GraphQL */ `
  mutation CreateGenreSongDatas(
    $input: CreateGenreSongDatasInput!
    $condition: ModelGenreSongDatasConditionInput
  ) {
    createGenreSongDatas(input: $input, condition: $condition) {
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
export const updateGenreSongDatas = /* GraphQL */ `
  mutation UpdateGenreSongDatas(
    $input: UpdateGenreSongDatasInput!
    $condition: ModelGenreSongDatasConditionInput
  ) {
    updateGenreSongDatas(input: $input, condition: $condition) {
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
