import React from 'react';
import "./App.css";
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import Stories from './Components/Stories';


const App = () => {


  return (
    <div className='App'>
      <h1>tech news website</h1>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}


export default App;