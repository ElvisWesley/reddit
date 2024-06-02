import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/postsSlice';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.posts.comments);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;