import { API, Storage } from "aws-amplify";
import React from "react";
import {
  createGenreSongDatas,
  createSongData,
} from "../../src/graphql/mutations";
import { fetchSongs } from "./Songs";

const UploadSong = ({ genre }) => {
  const handleUploadSong = async (e) => {
    e.preventDefault();
    const { target } = e;
    const audio = document.getElementById("file-upload").files[0];
    console.log("file-name ", audio.name);
    console.log("song-name ", target.songName.value);
    let selectedGenre = genre.find((o) => o.name === target.genres.value);
    console.log("genres ", selectedGenre.name);

    try {
      await API.graphql({
        query: createSongData,
        variables: {
          input: {
            file_name: audio.name,
            song_name: target.songName.value,
            likes: 0,
            play_count: 0,
            // TODO - fix artist upload by setting actual artist data
            // artist_Id: userState.userId,
            artist_Id: 6789,
          },
        },
      })
        .then((response) => console.log("Song create data: ", response))
        .catch((error) => console.log(error));

      await API.graphql({
        query: createGenreSongDatas,
        variables: {
          input: {
            genreID: selectedGenre.id,
            songDataID: data.createSongData.id,
          },
        },
      })
        .then((response) => console.log("Genre added data:", response))
        .catch((error) => console.log(error));

      // TODO - fix S3 upload issue
      await Storage.put(audio.name, audio, {
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        metadata: { artist: target.artistName.value },
      })
        .then((response) => console.log("S3 upload data: ", response))
        .catch((error) => console.log(error));

      fetchSongs();
    } catch (error) {
      console.log("Error in creating song ", error);
    }
  };

  return (
    <div className="relative main-center bg-primary-main px-10 py-3 overflow-y-auto flex flex-col items-start gap-5">
      <h1 className="text-2xl underline mb-10">Upload Song</h1>
      <form onSubmit={handleUploadSong} className="flex flex-col gap-10">
        <div className="w-full flex flex-col items-start">
          <label htmlFor="filename" className="font-semibold">
            Upload audio file
          </label>
          <input
            type="file"
            name="filename"
            id="file-upload"
            accept=".mp3"
            className="w-full bg-transparent py-2 cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="songName" className="font-semibold">
            Enter song name
          </label>
          <input
            type="text"
            name="songName"
            placeholder="Enter song name"
            className="w-full bg-transparent hover:outline-none focus:outline-none border-b-2 p-2"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="artistName" className="font-semibold">
            Enter artist name
          </label>
          <input
            type="text"
            name="artistName"
            placeholder="Enter artist name"
            className="w-full bg-transparent hover:outline-none focus:outline-none border-b-2 p-2"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <label htmlFor="artistName" className="font-semibold">
            Select song genre
          </label>
          <select name="genres" className="p-2 mt-2">
            {genre.map((item, idx) => {
              return (
                <option key={idx} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between gap-10">
          <input type="submit" value="Submit" className="btn-secondary" />
        </div>
      </form>
    </div>
  );
};

export default UploadSong;
