import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header'
import './App.css';
import Page from './components/page/page';

function App() {

  var posts = [
    {
      username: "Orla Finch",
      profilePicUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      date: "12 January at  10:02",
      body:  "Lectus quam id leo in vitae turpis massa sed elementum. Risus commodo viverra maecenas accumsan lacus vel facilisis. Facilisis magna etiam tempor orci. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.",
      imgUrls: ["https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    },
    {
      username: "Karen Castillo (Karie)",
      profilePicUrl: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9",
      message: "posted a job",
      date: "14 January at  10:32",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },{
      username: "Jamie Franco",
      profilePicUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      date: "7 January at  12:32",
      body:  "Lectus quam id leo in vitae turpis massa sed elementum. Risus commodo viverra maecenas accumsan lacus vel facilisis. Facilisis magna etiam tempor orci. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.",
      imgUrls: ["https://images.pexels.com/photos/3568543/pexels-photo-3568543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    },
    {
      username: "Max Norton",
      profilePicUrl: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",
      message: "posted on their wall",
      date: "7 December at  08:32",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet cursus sit. Varius sit amet mattis vulputate. Volutpat diam ut venenatis tellus in metus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Sed libero enim sed faucibus. Ullamcorper malesuada proin libero nunc consequat interdum. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Ac felis donec et odio pellentesque diam volutpat commodo. Eu scelerisque felis imperdiet proin. Vulputate mi sit amet mauris commodo quis imperdiet. Pretium lectus quam id leo in vitae turpis massa sed. Ridiculus mus mauris vitae ultricies leo. Adipiscing at in tellus integer feugiat scelerisque varius morbi. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Nisi vitae suscipit tellus mauris a diam maecenas sed. Sit amet commodo nulla facilisi nullam vehicula. Dictum non consectetur a erat nam. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Pretium nibh ipsum consequat nisl vel pretium lectus."
    },
    {
      username: "Martha Craig",
      profilePicUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "12 January at  12:32",
      body: "Lectus quam id leo in vitae turpis massa sed elementum. Risus commodo viverra maecenas accumsan lacus vel facilisis. Facilisis magna etiam tempor orci. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Purus semper eget duis at tellus at. Varius quam quisque id diam vel quam elementum. Sed lectus vestibulum mattis ullamcorper velit. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Velit scelerisque in dictum non. Varius quam quisque id diam vel quam. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan."
    },{
      username: "Dorothy Maldonado (Dorte)",
      profilePicUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50",
      date: "12 Jan",
      body:  "Lectus quam id leo in vitae turpis massa sed elementum. Risus commodo viverra maecenas accumsan lacus vel facilisis. Facilisis magna etiam tempor orci. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.",
      imgUrls: ["https://images.pexels.com/photos/3674877/pexels-photo-3674877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    },
    {
      username: "Maisy Humphrey",
      profilePicUrl: "https://randomuser.me/api/portraits/men/97.jpg",
      date: "7 January at  12:32",
      body: "Egestas dui id ornare arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Consequat id porta nibh venenatis cras sed. Vulputate eu scelerisque felis imperdiet proin fermentum. Dolor sit amet consectetur adipiscing elit. Varius morbi enim nunc faucibus a pellentesque sit. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Sed tempus urna et pharetra pharetra massa massa ultricies. Risus pretium quam vulputate dignissim suspendisse in est ante. Orci dapibus ultrices in iaculis. Justo nec ultrices dui sapien eget mi. Mattis aliquam faucibus purus in massa tempor. Elit at imperdiet dui accumsan. Feugiat nisl pretium fusce id velit ut. Libero nunc consequat interdum varius sit amet mattis. In pellentesque massa placerat duis ultricies lacus. Sed faucibus turpis in eu mi. Nullam eget felis eget nunc lobortis mattis aliquam. Dictum non consectetur a erat nam at lectus urna."
    },
    {
      username: "Tabitha Potter",
      profilePicUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDEyNTcxMV5BMl5BanBnXkFtZTcwNjM5ODQ2Ng@@._V1_UY256_CR10,0,172,256_AL_.jpg",
      date: "7 January at  12:32",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (
    <div className="App">
      <Header profilePic="https://avatars1.githubusercontent.com/u/19506171?s=460&v=4"  username="Dev Sebastian"/>
      <Page posts={posts} />
    </div>
  );
}

export default App;
