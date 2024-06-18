import React from 'react';
import Post from './components/Post';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <Post />
      {/* Pass the postId prop dynamically based on your application logic */}
      <Comment postId={1} />
    </div>
  );
}

export default App;
