import React, { useContext, useEffect, useState } from "react";
import authContext from "../../src/context/authContext";
import userContext from "../../src/context/userContext";
import Songs from "../../components/dashboard-components/Songs";
import { Auth } from "aws-amplify";
import { API } from "aws-amplify";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Playback from "./Playback";
import Profile from "./Profile";
import { listUserData } from "../../src/graphql/queries";
import { listGenres } from "../../src/graphql/queries";
import UploadSong from "./UploadSong";
import CreatePlayList from "./PlayList";
import SongLoader from "../utils-components/SongLoader";

const Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [isActive, setIsActive] = useState("main");
  const [songName, setSongName] = useState("");
  const [isAddPlayList, setIsAddPlayList] = useState(false);
  const [songId, setSongId] = useState(0);
  const [genre, setGenre] = useState([]);
  const [userState, setUserState] = useState({
    userId: "",
    userEmail: "",
    userName: "",
    userType: "",
  });
  const [songList, setSongList] = useState([]);
  const [songData, setSongData] = useState({
    id: "",
    name: "",
    artistId: "",
    likes: 0,
  });
  const [playList, setPlayList] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [songLike, setSongLike] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    setIsLoading(true);
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    setUserState((prevState) => {
      return {
        ...prevState,
        userEmail: authenticatedUser.attributes.email,
      };
    });

    await API.graphql({
      query: listUserData,
    })
      .then((response) => {
        console.log("User list data: ", response.data.listUserData.items);
        if (response.data.listUserData.items.length > 0) {
          setUserState((prevState) => {
            return {
              ...prevState,
              userId: response.data.listUserData.items[0].id,
              userName: response.data.listUserData.items[0].name,
              userType: response.data.listUserData.items[0].user_type,
              userPreference:
                response.data.listUserData.items[0].genre_preference,
            };
          });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("User list data error: ", error);
        setIsLoading(false);
      });
  };

  const getGenres = async () => {
    await API.graphql({
      query: listGenres,
      authMode: "API_KEY",
    })
      .then((response) => {
        console.log("Genre list data: ", response.data.listGenres.items);
        setGenre(response.data.listGenres.items);
      })
      .catch((error) => console.log("Genre list error: ", error));
  };

  useEffect(() => {
    getUser();
    getGenres();
  }, []);

  return (
    <userContext.Provider value={{ userState, setUserState }}>
      {isLoading ? (
        <SongLoader />
      ) : (
        <main
          className={`main-layout ${!toggleSidebar && "main-layout-hide"} ${
            !songName && "main-layout-none"
          } bg-primary-main`}
        >
          <Navbar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            isActive={isActive}
            setIsActive={setIsActive}
            songList={songList}
            setSongList={setSongList}
            allSongs={allSongs}
            setAllSongs={setAllSongs}
          />
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            isActive={isActive}
            setIsActive={setIsActive}
            playList={playList}
            setPlayList={setPlayList}
            setSongList={setSongList}
          />
          {isActive == "main" && (
            <Songs
              setSongName={setSongName}
              isAddPlayList={isAddPlayList}
              playList={playList}
              songId={songId}
              setSongId={setSongId}
              songList={songList}
              setSongList={setSongList}
              setAllSongs={setAllSongs}
              setSongLike={setSongLike}
              songData={songData}
              setSongData={setSongData}
              // isLoading={isLoading}
              // setIsLoading={setIsLoading}
            />
          )}
          {songName && (
            <Playback
              songName={songName}
              songId={songId}
              isAddPlayList={isAddPlayList}
              setIsAddPlayList={setIsAddPlayList}
              playList={playList}
              setPlayList={setPlayList}
              songLike={songLike}
              setSongLike={setSongLike}
              songData={songData}
            />
          )}
          {isActive == "profile" && <Profile />}
          {isActive == "createplaylist" && <CreatePlayList />}
          {isActive === "uploadsong" && <UploadSong genre={genre} />}
        </main>
      )}
    </userContext.Provider>
  );
};

export default Dashboard;
