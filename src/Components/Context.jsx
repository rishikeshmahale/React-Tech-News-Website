
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: "true",
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "setLoading" });

    try {
      const res = await fetch(url); 
      const data = await res.json();
      console.log(data);

      dispatch({
        type: "getStories",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  // To remove the Post

  const removePost = (post_ID) => {
    dispatch({ type: "Remove_Post", payload: post_ID });
  };

  // Search

  const searchPost = (searchQuery) => {
    dispatch({ type: "Search_Query", payload: searchQuery });
  };


  // Pagination

  const getPrevPage = () => {
    dispatch({ type: "Prev_Page" });
  }

  const getNextPage = () => {
    dispatch({ type: "Next_Page" });
  }


  // To call the API function

  useEffect(() => {

    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPage ,getNextPage }}>
      {children}
    </AppContext.Provider>
  );
};


// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
