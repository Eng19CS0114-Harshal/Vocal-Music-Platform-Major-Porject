import React, { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";

import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsShuffle,
  BsFillPlusCircleFill,
  BsArrowRepeat,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { updateSongData } from "../../src/graphql/mutations";
import { getArtist, listArtists } from "../../src/graphql/queries";

const Playback = ({
  songName,
  playList,
  setPlayList,
  isAddPlayList,
  setIsAddPlayList,
  songId,
  songLike,
  setSongLike,
  songData,
}) => {
  const getUrl = async () => {
    const fileAccessUrl = await Storage.get(songName);
    return fileAccessUrl;
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [artists, setArtists] = useState([
    {
      name: "",
      id: "",
    },
  ]);

  let audioTune = new Audio();
  getUrl()
    .then((res) => {
      console.log("song url ", res);
      audioTune = new Audio(res);
    })
    .catch((e) => {
      console.log(e);
    });

  // useEffect(() => {
  //   audioTune.load();
  // }, []);

  const playSound = () => {
    audioTune.play();
  };

  // pause audio sound
  const pauseSound = () => {
    audioTune.pause();
  };

  // const toggleSong = async () => {
  //   if (isPlaying) {
  //     audio.pause();
  //     console.log("Paused...");
  //     setIsPlaying(false);
  //     return;
  //   }

  //   try {
  //     await audio.play();
  //     console.log("Playing...");
  //     setIsPlaying(true);
  //   } catch (err) {
  //     console.log("Failed to play..." + err);
  //     setIsPlaying(false);
  //   }
  // };

  const handleSongLike = async () => {
    await API.graphql({
      query: updateSongData,
      variables: {
        input: {
          id: songId,
          likes: songLike + 1,
        },
      },
    }).then((result) => console.log(result));
    console.log("liked");
  };

  const handleGetArtist = async () => {
    await API.graphql({
      query: listArtists,
    })
      .then((response) => {
        console.log(response);
        // setArtists({
        //   name: response.listArtists
        // })
        artistName += response;
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleGetArtist();
  }, []);

  return (
    <div className="main-playbar flex items-center gap-10 w-full bg-white px-10 py-3">
      <div className="flex items-center gap-5 w-1/4">
        <div className="w-14 h-14 rounded-full bg-green-50"></div>
        <div className="flex flex-col text-gray-700">
          <h2 className="font-bold">{songData.name}</h2>
          <h4>{songData.artistId}</h4>
        </div>
      </div>
      <div className="flex items-center gap-3 w-1/12">
        <BsFillCaretLeftFill className="text-black" />
        {/* {isPlaying ? (
          <BsFillPauseCircleFill className="text-black" onClick={pauseSound} />
        ) : (
          <BsFillPlayCircleFill className="text-black" onClick={playSound} />
        )} */}
        <input
          type="button"
          className="text-black"
          value="Play"
          onClick={playSound}
        ></input>
        <input
          type="button"
          className="text-black"
          value="Pause"
          onClick={pauseSound}
        ></input>
        <BsFillCaretRightFill className="text-black" />
      </div>
      <div className="flex items-center gap-4 w-1/2 text-black">
        <p>0:00</p>
        <div className="playbar w-full h-1 bg-black rounded-md"></div>
        <p>3:30</p>
      </div>

      <div
        className={`p-3 cursor-pointer border-b-2 ${"border-transparent"} transition-all`}
        onClick={() => setIsAddPlayList(true)}
      >
        <BsFillPlusCircleFill color="black" />
      </div>

      <div className="flex items-center justify-end gap-3 w-1/12">
        <div
          className={`p-3 cursor-pointer border-b-2 ${
            isShuffle ? "border-black" : "border-transparent"
          } transition-all`}
          onClick={handleSongLike}
        >
          <AiOutlineHeart className="text-black" />
        </div>
        <div
          className={`p-3 cursor-pointer border-b-2 ${
            isShuffle ? "border-black" : "border-transparent"
          } transition-all`}
          onClick={() => setIsShuffle(!isShuffle)}
        >
          <BsShuffle color={isShuffle ? "#181E30" : "black"} />
        </div>
        <div
          className={`p-3 cursor-pointer border-b-2 ${
            isRepeat ? "border-black" : "border-transparent"
          } transition-all`}
          onClick={() => setIsRepeat(!isRepeat)}
        >
          <BsArrowRepeat color={isRepeat ? "#181E30" : "black"} />
        </div>
      </div>
    </div>
  );
};

export default Playback;
