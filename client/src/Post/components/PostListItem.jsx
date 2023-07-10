import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { decodeAuthToken } from '../../Auth/Auth';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function PostListItem({ post, onDelete }) {
  const decodedToken = decodeAuthToken();
  const [state] = useState({
    email:  decodedToken?.email ? decodedToken.email : null
  });
 
 
  return (
    <Card className="w-100 my-4">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link to={`/posts/${post.cuid}/${post.slug}`} >
            {post.title}
          </Link>
        </Typography>
        <Typography component="p" className="mt-3">
          {post.content}
        </Typography>
        <Typography color="textSecondary" component="p" className="mt-3 font-italic">
          From {post.email}
        </Typography>
      </CardContent>
      {state.email && post.email === state.email && <CardActions>
        <Button size="small" color="secondary" onClick={onDelete}>
          Delete post
        </Button>
      </CardActions>}
    </Card>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    email:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
