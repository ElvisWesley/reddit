import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(term));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        placeholder="Search subreddit"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;