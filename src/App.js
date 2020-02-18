import React, { useState } from 'react';
import Header from './components/header/header'
import './App.css';
import Page from './components/page/page';
import getPosts from './assets/posts'

function App() {

  const [posts, ] = useState(getPosts);

  return (
    <div className="App">
      <Header profilePic="https://avatars1.githubusercontent.com/u/19506171?s=460&v=4" username="Dev Sebastian" />
      <Page posts={posts} />
    </div>
  );
}

export default App;
