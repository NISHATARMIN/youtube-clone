import React from 'react';
import Navbar from './Navbar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}

export default App;
