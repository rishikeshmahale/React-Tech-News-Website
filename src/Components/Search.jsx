import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
