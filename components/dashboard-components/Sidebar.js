import React, { useContext } from "react";
import {
  AiFillHome,
  AiOutlineClockCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { FiDelete } from "react-icons/fi";
import { listPlayLists } from "../../src/graphql/queries";
import { useEffect } from "react";
import { API } from "aws-amplify";
// import { fetchSongs } from "./Songs";
import userContext from "../../src/context/userContext";

const Sidebar = ({
  toggleSidebar,
  setToggleSidebar,
  isActive,
  setIsActive,
  playList,
  setPlayList,
  setSongList,
}) => {
  const { userState } = useContext(userContext);

  const fetchPlayLists = async () => {
    try {
      const playListData = await API.graphql({
        query: listPlayLists,
      });

      const actualPlayList = playListData.data.listPlayLists.items;
      setPlayList(actualPlayList);
      console.log("play list", actualPlayList);
    } catch (error) {
      console.log("error on fetching playlist", error);
    }
  };

  const handlePlayListClick = async (item) => {
    try {
      // setSongList(item.songdatas.items.songData);
      // console.log("Playlist ", item);
      let playListSong = [];
      item.songdatas.items.map((song) => playListSong.push(song.songData));
      setSongList(playListSong);
      console.log("play list songs are", playListSong);
    } catch (error) {
      console.log(`error on fetching ${item.name}`, error);
    }
  };

  useEffect(() => {
    fetchPlayLists();
  }, []);

  return (
    <div
      className={`${
        toggleSidebar ? "block" : "hidden"
      } main-sidebar flex flex-col gap-5 bg-secondary-main py-10`}
    >
      <section className="flex items-center justify-between px-10">
        <h1
          className="text-white text-5xl font-bold lg:pb-5 cursor-pointer"
          onClick={() => {
            // fetchSongs();
            setIsActive("main");
          }}
        >
          Vocal
        </h1>
        <FiDelete
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="text-3xl lg:hidden"
        />
      </section>
      <section className="flex flex-col gap-3">
        <a
          className={`${isActive === "main" ? "nav-active" : ""} or-grad-btn`}
          onClick={() => setIsActive("main")}
        >
          <AiFillHome />
          <p>Home</p>
        </a>
        {/* <a
          className={`${
            isActive === "browse" ? "nav-active" : ""
          } or-grad-btn`}
        >
          <AiOutlineSearch />
          <p>Browse</p>
        </a> */}
      </section>
      <section className="flex flex-col gap-3">
        <p className="text-or-primary px-10 py-2 text-xl">Your library</p>
        <a
          className={`${
            isActive === "history" ? "nav-active" : ""
          } or-grad-btn`}
        >
          <AiOutlineClockCircle />
          <p>Recently played</p>
        </a>
        <a
          className={`${
            isActive === "favourites" ? "nav-active" : ""
          } or-grad-btn`}
        >
          <AiOutlineHeart />
          <p>Favourites</p>
        </a>
      </section>
      <section className="flex flex-col gap-3">
        <p className="text-or-primary px-10 py-2 text-xl">Playlists</p>
        {playList.length > 0 &&
          playList.map((item, idx) => (
            <a
              key={idx}
              className={`or-grad-btn`}
              onClick={() => handlePlayListClick(item)}
            >
              {/* {idx + 1} {"  "} */}
              {item.name}
            </a>
          ))}
        <button
          className="btn-outline mx-10"
          onClick={() => setIsActive("createplaylist")}
        >
          {/* <IoAddCircleOutline /> */}
          Add Playlist
        </button>
        {userState.userType === "artist" && (
          <button
            className="btn-outline mx-10"
            onClick={() => setIsActive("uploadsong")}
          >
            {/* <IoAddCircleOutline /> */}
            Upload Song
          </button>
        )}
      </section>
    </div>
  );
};

export default Sidebar;
