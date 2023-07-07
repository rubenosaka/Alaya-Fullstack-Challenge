import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material'
import { styled } from '@mui/system';
import { decodeAuthToken } from '../../Auth/Auth';

const StyledContainer = styled('div')(({ theme }) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
    },
  },
}));


const PostCreateWidget = ({ addPost }) => {
  const decodedToken = decodeAuthToken();
  const [state, setState] = useState({
    username: decodedToken?.userName ? decodedToken.userName : null
  });
 

  const submit = () => {
    if (state.username && state.title && state.content) {
      addPost(state);
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
        ...state,
        [evt.target.name]: value
    });
  };

  return (
    <StyledContainer className="d-flex flex-column my-4 w-100">
        <h3>Create new post</h3>
        <TextField variant="filled" label="Author name" name="username" onChange={handleChange} value={state.username} disabled={true}/>
        <TextField variant="filled" label="Post title" name="title" onChange={handleChange} />
        <TextField variant="filled" multiline rows="4" label="Post content" name="content" onChange={handleChange} />
        <Button className="mt-4" variant="contained" color="primary" onClick={() => submit()} disabled={!state.username || !state.title || !state.content}>
            Submit
        </Button>
    </StyledContainer>
  );
};

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PostCreateWidget;
