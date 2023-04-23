import { API } from "aws-amplify";
import { createPlayList } from "../../src/graphql/mutations";

const CreatePlayList = () => {
  const handlePlayListSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    // API
    try {
      const { data } = await API.graphql({
        query: createPlayList,
        variables: {
          input: {
            name: target.name.value,
          },
        },
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative main-center bg-primary-main px-10 py-3 overflow-y-auto flex flex-col items-start gap-5">
      <h1 className="text-2xl underline mb-10">Create Playlist</h1>
      <form onSubmit={handlePlayListSubmit} className="flex flex-col gap-10">
        <div className="w-full flex flex-col items-start">
          <label htmlFor="name" className="font-semibold">
            Playlist name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter playlist name"
            className="w-full bg-transparent hover:outline-none focus:outline-none border-b-2 p-2"
          />
        </div>
        <div className="flex justify-between gap-10">
          <input type="submit" value="Submit" className="btn-secondary" />
        </div>
      </form>
    </div>
  );
};

export default CreatePlayList;
