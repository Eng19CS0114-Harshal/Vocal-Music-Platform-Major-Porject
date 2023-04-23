import React, { useState, useContext } from "react";
import authContext from "../../src/context/authContext";
import { BiSearch, BiLogOut } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { API, Auth, graphqlOperation } from "aws-amplify";
import Loader from "../utils-components/Loader";
import userContext from "../../src/context/userContext";
import { getSearchSongData, listSongData } from "../../src/graphql/queries";

const Navbar = ({
  toggleSidebar,
  setToggleSidebar,
  isActive,
  setIsActive,
  songList,
  setSongList,
  allSongs,
  setAllSongs,
}) => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const [isLoading, setIsLoading] = useState();
  const { userState, setUserState } = useContext(userContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSignOut = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signOut();
      setIsAuth(false);
      setIsLoading(false);
      console.log("User signed out");
    } catch (error) {
      setIsLoading(false);
      console.log("error signing out: ", error);
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSongList(
      allSongs.filter((song) => song.song_name.includes(searchQuery))
    );
    console.log(allSongs);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main-navbar flex items-center justify-between bg-primary-main px-10 py-5">
          <AiOutlineMenu
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className="lg:hidden"
          />

          <div className="w-3/4 flex items-center gap-10">
            {/* <h1 className="text-white font-bold">Navbar</h1> */}
            {isActive == "profile" ? (
              <h1 className="text-or-primary text-4xl ">Settings</h1>
            ) : (
              <form
                className="relative w-3/4 text-or-primary"
                onSubmit={handleSearchSubmit}
              >
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-5 py-3 rounded-3xl w-full border-2 border-or-primary outline-or-primary bg-transparent text-white"
                  type="text"
                  name="songName"
                  placeholder="Search song"
                />
                <BiSearch
                  className="absolute right-5 top-3 text-3xl cursor-pointer"
                  onClick={handleSearchSubmit}
                />
              </form>
            )}
          </div>
          <div className="flex items-center gap-7 md:px-10">
            <div className="md:flex hidden items-center gap-7">
              <FiSettings
                className="text-2xl cursor-pointer"
                onClick={() => setIsActive("profile")}
              />
              <BiLogOut
                className="text-3xl cursor-pointer"
                onClick={handleSignOut}
              />
            </div>

            {userState.userName ||
            userState.genre_preference ||
            userState.email ||
            userState.user_type ? (
              <h4 className="md:text-xl cursor-pointer">
                {userState.userName.split(/ (.*)/)[0]}
              </h4>
            ) : (
              <button
                className="btn-outline whitespace-nowrap"
                onClick={() => setIsActive("profile")}
              >
                Complete your profile
              </button>
            )}
            {/* <b>{isAuth ? "Authorized" : "Unauthorized"}</b>{" "} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
