import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import {
  getComment,
  listComments,
  listSongData,
} from "../../src/graphql/queries";
import userContext from "../../src/context/userContext";
import { useContext } from "react";
import {
  createComment,
  createPlayListSongDatas,
  updateSongData,
} from "../../src/graphql/mutations";
import { AiFillCaretUp } from "react-icons/ai";

const Songs = ({
  setSongName,
  playList,
  isAddPlayList,
  songId,
  setSongId,
  songList,
  setSongList,
  setAllSongs,
  setSongLike,
  songData,
  setSongData,
  // isLoading,
  // setIsLoading,
}) => {
  const { userState, setUserState } = useContext(userContext);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [isError, setIsError] = useState({
    isVulgar: false,
    isEmpty: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  // GraphQL Amplify API Call - OLD
  // const fetchSongs = async () => {
  //   try {
  //     const songData = await API.graphql({
  //       query: listSongData,
  //       authMode: "API_KEY",
  //     });
  //     const songList = songData.data.listSongData.items;
  //     setSongList(songList);
  //     setAllSongs(songList);
  //     setShowComments(true);
  //     console.log("song list", songList);
  //   } catch (error) {
  //     console.log("error on fetching songs", error);
  //   }
  // };

  const fetchSongs = async () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      genre: userState.userPreference,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      "<URL-ENDPOINT-TO-API>",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Get Recommended songs: ", result.recommendedSongs);
        setSongList(result.recommendedSongs);
        setAllSongs(result.recommendedSongs);
        setIsLoading(false);
        setShowComments(true);
      })
      .catch((error) => {
        console.log("error", error);
        // setIsLoading(false);
      });
  };

  const handleAddSongToPlayList = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const playListID = formProps.songs;
    try {
      const { data } = await API.graphql({
        query: createPlayListSongDatas,
        variables: {
          input: {
            playListID: playListID,
            songDataID: songId,
          },
        },
      });
      // const playId = data.createPlayListSongs.playlistId;
      // const songId = data.createPlayListSongs.songId;

      console.log("Song added to playlist");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentCheck = (e) => {
    e.preventDefault();

    if (comment === "") {
      setIsError({
        ...isError,
        isEmpty: true,
        isVulgar: false,
      });
      return -1;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      text: comment,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "<URL-API-ENDPOINT>",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Toxicity: ", result);
        
      })
      .catch((error) => console.log("error", error));

  };

  const postComment = async () => {
    await API.graphql({
      query: createComment,
      variables: {
        input: {
          content: comment,
          songId: songId,
        },
      },
    })
      .then((data) => {
        getAllComments();
        setComment("");
      })
      .catch((e) => console.log(e));
  };

  const getAllComments = async () => {
    const response = await API.graphql({
      query: listComments,
    });
    const allComments = response.data.listComments.items;
    setPostComments(allComments);
    // console.log(postComments);
  };

  const handleSongClick = async (song) => {
    setSongData({
      id: song.id,
      name: song.song_name,
      artistId: song.artist_Id,
      likes: song.likes,
    });
    setSongName(song.file_name);
    setSongId(song.id);
    let play_count = song.play_count;
    await API.graphql({
      query: updateSongData,
      variables: {
        input: {
          id: songId,
          play_count: play_count + 1,
        },
      },
    }).then((result) => {
      console.log(result);
      setSongLike(song.likes);
    });
  };

  useEffect(() => {
    if (userState.userPreference) fetchSongs();
    getAllComments();
  }, []);

  const cardColor = {
    pop: "green",
    rock: "red",
    genre1: "blue",
  };

  const color_array = ["green", "orange", "sky", "red", "yellow"];

  return (
    <div className="relative main-center bg-primary-main overflow-y-auto px-10 flex flex-col items-start justify-between gap-10">
      <section className="w-full flex flex-col justify-center gap-5 flex-wrap relative">
        <div>
          <h1 className="text-3xl">Tailored for you</h1>
          <h4 className="text-xl text-zinc-500">Based on your listening</h4>
        </div>
        <div className="w-full flex items-center gap-10 flex-wrap relative">
          {!songList && !isLoading ? (
            <h1 className="text-2xl text-or-primary">No songs found!</h1>
          ) : isLoading ? (
            <>
              <div className="cursor-pointer flex flex-col items-center gap-2">
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 p-10 hover:z-50 rounded-3xl transition-all cursor-pointer`}
                ></div>
                <div className="w-20 h-5 rounded-md bg-gray-400"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-center gap-2">
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 p-10 hover:z-50 rounded-3xl transition-all cursor-pointer`}
                ></div>
                <div className="w-20 h-5 rounded-md bg-gray-400"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-center gap-2">
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 p-10 hover:z-50 rounded-3xl transition-all cursor-pointer`}
                ></div>
                <div className="w-20 h-5 rounded-md bg-gray-400"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-center gap-2">
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 p-10 hover:z-50 rounded-3xl transition-all cursor-pointer`}
                ></div>
                <div className="w-20 h-5 rounded-md bg-gray-400"></div>
              </div>
            </>
          ) : (
            songList.map((song, idx) => (
              <div
                key={idx}
                onClick={() => handleSongClick(song)}
                className="cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 p-10 rounded-3xl ${
                    songId === song.id &&
                    "scale-75 rounded-3xl rotate-45 hue-rotate-30"
                  } hover:scale-75 hover:rounded-3xl hover:rotate-45 hover:hue-rotate-30 transition-all cursor-pointer`}
                ></div>
                <h1 className="text-lg font-semibold">{song.song_name}</h1>
                {/* <h2 className="text-3xl">{song.artist}</h2> */}
              </div>
            ))
          )}
        </div>
      </section>
      {songId !== 0 &&
        (showComments ? (
          <section className="w-full flex flex-col gap-4 p-5 rounded-t-lg bg-secondary-main border-2 border-b-0 border-or-primary">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl">Comments</h1>
              <h1
                onClick={() => setShowComments(false)}
                className="cursor-pointer text-xl mr-6"
              >
                X
              </h1>
            </div>
            <div className="max-h-[20rem] overflow-y-auto flex flex-col gap-3">
              {postComments.map((comment) => {
                return (
                  <>
                    {comment.songId === songId && (
                      <div
                        key={comment.id}
                        className="px-3 py-2 rounded-lg border-b-2 border-opacity-90"
                      >
                        <h3 className="font-semibold">{comment.user}</h3>
                        <p className="whitespace-normal">{comment.content}</p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <form
              className="w-full flex flex-col items-start gap-2"
              onSubmit={handleCommentCheck}
            >
              {isError.isEmpty && (
                <span className="text-red-600 font-semibold text-xl">
                  Please enter something
                </span>
              )}
              {isError.isVulgar && (
                <span className="text-red-600 font-semibold text-xl">
                  Vulgar comments cannot be posted on Vocal
                </span>
              )}
              <div className="w-full flex items-center gap-2">
                <input
                  className="w-full py-3 bg-white text-black px-3 rounded-md"
                  name="comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
                <button className="btn-outline">Comment</button>
              </div>
            </form>
          </section>
        ) : (
          <div
            className="w-full rounded-t-md h-6 bg-or-primary cursor-pointer flex items-center justify-center gap-2 font-semibold hover:h-8 transition-all"
            onClick={() => setShowComments(true)}
          >
            Comments
            <AiFillCaretUp className="text-2xl" />
          </div>
        ))}

      {isAddPlayList && (
        <section className="fixed bottom-28 right-32 bg-white p-5 rounded-md text-black">
          <form
            onSubmit={handleAddSongToPlayList}
            className="flex flex-col gap-3"
          >
            <label htmlFor="songs" className="text-xl font-semibold">
              Choose a PlayList:
            </label>
            <select
              name="songs"
              id="songs"
              className="cursor-pointer px-3 py-2 text-white"
            >
              {playList.map((item, idx) => (
                <option key={idx} name="playlist" value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button className="text-white bg-gray-700 px-5 py-2 rounded-md">
              Add to playlist
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Songs;
