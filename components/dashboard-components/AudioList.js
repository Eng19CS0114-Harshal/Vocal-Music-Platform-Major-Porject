import React, { useEffect } from "react";

const AudioList = ({ songList, artistList }) => {
  useEffect(() => {
    return () => {
      console.log(artistList[0], songList);
    };
  }, []);

  return (
    <>
      {/* <h1>{songList}</h1> */}
      {songList.map((item, idx) => {
        return (
          <>
            <audio key={item.key} controls>
              <source src={item} type="audio/mpeg" />
            </audio>
            <p>{artistList[0]}</p>
          </>
        );
      })}
    </>
  );
};

export default AudioList;
