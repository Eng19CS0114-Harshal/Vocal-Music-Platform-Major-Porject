import React from "react";
import { API } from "aws-amplify";
import { createUser } from "../../src/graphql/mutations";

function complete() {
  const handleProfileComplete = async (e) => {
    e.preventDefault();
    const { target } = e;
    // API
    const { data } = await API.graphql({
      query: createUser,
      variables: {
        input: {
          name: target.name.value,
          email: target.email.value,
          user_type: target.usertype.value,
        },
      },
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleProfileComplete}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <select name="usertype">
        <option value="user">user</option>
        <option value="artist">artist</option>
      </select>
      <input type="submit" value="submit" />
    </form>
  );
}

export default complete;
