const reducer = (state, action) => {
    switch (action.type) {
      case "setLoading":
        return {
          ...state,
          isLoading: true,
        };
  
      case "getStories":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
          nbPages : action.payload.nbPages
        };
  
      case "Remove_Post":
        return {
          ...state,
          hits: state.hits.filter((currElem) => {
            return currElem.objectID !== action.payload;
          }),
        };
      
      case "Search_Query": 
        return{
          ...state,
          query : action.payload,
        }
      
      case "Next_Page":
  
        let nextPage = state.page + 1
  
        if (nextPage >= state.nbPages) {
          nextPage = 0
        }
  
        return {
          ...state,
          page: nextPage,
        }
      
      case "Prev_Page": 
        
        let prevPage = state.page - 1
  
        if (prevPage <= 0) {
          prevPage = 0;
        }
  
        return {
          ...state,
          page : prevPage,
        }
  
      default: {
      }
    }
  
    return state;
  };
  
  export default reducer;
  