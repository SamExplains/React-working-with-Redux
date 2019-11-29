import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Songlist from "./components/Songlist";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="App ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <Songlist/>
        </div>
        <div className="column eight wide">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;
