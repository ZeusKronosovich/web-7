import React from 'react';
import GetForm from './GetForm.jsx';
import PostForm from './PostForm.jsx';
import QueryForm from './QueryForm.jsx'
import HelloForm from './HelloForm.jsx'
import './index.css'
function App() {
  return (
    <div class="container">
        <div class="quarter">
            <PostForm />
        </div>
        <div class="quarter">
            <GetForm />
        </div>
        <div class="quarter">
            <QueryForm />
        </div>
        <div class="quarter">
            <HelloForm />
        </div>
    </div>
  );
}

export default App;