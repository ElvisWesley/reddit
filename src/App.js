import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Comments from './components/Comments';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <header>
        <h1>Reddit App</h1>
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<Comments />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;

