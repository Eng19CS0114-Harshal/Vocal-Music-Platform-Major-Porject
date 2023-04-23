import { API } from "aws-amplify";
import { createUserData } from "../../src/graphql/mutations";
import userContext from "../../src/context/userContext";
import { useContext, useEffect, useState } from "react";
import { updateUserData } from "../../src/graphql/mutations";
import { listUserData } from "../../src/graphql/queries";
import { AiFillEdit } from "react-icons/ai";

const Profile = () => {
  const { userState, setUserState } = useContext(userContext);
  const [isEdit, setIsEdit] = useState(false);
  let preference = [];

  const handleProfileComplete = async (e) => {
    e.preventDefault();
    const { target } = e;

    if (e.target.pop.checked) preference.push(e.target.pop.value);
    if (e.target.rock.checked) preference.push(e.target.rock.value);
    if (e.target.blues.checked) preference.push(e.target.blues.value);
    if (e.target.classical.checked) preference.push(e.target.classical.value);
    if (e.target.edm.checked) preference.push(e.target.edm.value);
    if (e.target.genre1.checked) preference.push(e.target.genre1.value);

    // API
    try {
      const { data } = await API.graphql({
        query: listUserData,
      });

      if (data.listUserData.items.length) {
        const updateID = data.listUserData.items[0].id;
        const updatedData = await API.graphql({
          query: updateUserData,
          variables: {
            input: {
              id: updateID,
              name: target.name.value,
              email: userState.userEmail,
              user_type: target.usertype.value,
              genre_preference: preference,
            },
          },
        });
        setUserState((prevState) => {
          return {
            ...prevState,
            userName: updatedData.data.updateUserData.name,
            userEmail: updatedData.data.updateUserData.email,
            userType: updatedData.data.updateUserData.user_type,
            userPreference: updatedData.data.updateUserData.genre_preference,
          };
        });
        console.log("updated");
        console.log(updatedData);
      } else {
        const createdData = await API.graphql({
          query: createUserData,
          variables: {
            input: {
              name: target.name.value,
              email: userState.userEmail,
              user_type: target.usertype.value,
              genre_preference: preference,
            },
          },
        });
        setUserState((prevState) => {
          return {
            ...prevState,
            userName: createdData.data.createUserData.name,
            userEmail: createdData.data.createUserData.email,
            userType: createdData.data.createUserData.user_type,
            userPreference: createdData.data.createUserData.genre_preference,
          };
        });
        console.log("created");
        console.log(createdData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative main-center bg-primary-main px-10 py-3 overflow-y-auto flex flex-col items-start gap-5">
      {(userState.userName == "") | isEdit ? (
        <>
          <h1 className="text-2xl underline mb-5">
            {userState.userName != ""
              ? "Update your profile"
              : "Complete your profile"}
          </h1>
          <form
            onSubmit={handleProfileComplete}
            className="flex flex-col gap-10"
          >
            <div className="w-full flex flex-col items-start">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-transparent hover:outline-none focus:outline-none border-b-2 p-2"
                defaultValue={userState.userName}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent hover:outline-none focus:outline-none border-b-2 p-2"
                defaultValue={userState.userEmail}
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <label htmlFor="email" className="font-semibold">
                User Type
              </label>
              <select
                name="usertype"
                defaultValue={userState.userType}
                className="w-3/5 rounded-md p-2"
              >
                <option value="user">user</option>
                <option value="artist">artist</option>
              </select>
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="email" className="font-semibold">
                Genre Preference
              </label>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="pop">Pop</label>
                <input type="checkbox" name="pop" value="pop" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="rock">Rock</label>
                <input type="checkbox" name="rock" value="rock" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="blues">Blues</label>
                <input type="checkbox" name="blues" value="blues" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="classical">Classical</label>
                <input type="checkbox" name="classical" value="classical" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="edm">EDM</label>
                <input type="checkbox" name="edm" value="edm" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="genre1">genre 1</label>
                <input type="checkbox" name="genre1" value="Genre 1" />
              </div>
            </div>
            <div className="flex justify-between gap-10">
              <input type="submit" value="Submit" className="btn-secondary" />
              <button className="btn-outline" onClick={() => setIsEdit(false)}>
                Discard changes
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-2xl underline mb-10">Your profile</h1>
          <div className="w-full flex justify-between pr-10">
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-thin">
                Name: <span className="font-thin">{userState.userName}</span>
              </h4>
              <h4 className="text-xl">Email: {userState.userEmail}</h4>
              <h4 className="text-xl">User type: {userState.userType}</h4>
              <h4 className="text-xl">User ID: {userState.userId}</h4>
            </div>
            <AiFillEdit
              className="text-2xl text-white cursor-pointer"
              onClick={() => setIsEdit(true)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
