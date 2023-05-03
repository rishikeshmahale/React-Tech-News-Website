import React from "react";
import { useGlobalContext } from "./Context";
import LoadingAnimation from "./Loading";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="stories-div">
          {hits.map((currPost) => {
            const { title, url, author, objectID, num_comments } = currPost;

            return (
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author}</span> | <span>{num_comments} </span>
                  comments
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#" onClick={() => removePost(objectID)}>Remove</a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Stories;