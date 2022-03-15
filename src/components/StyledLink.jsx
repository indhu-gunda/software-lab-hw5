import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'white',
  fontSize: '20px',
  '&:hover': {
    color: 'yellow',
    borderBottom: '1px solid white',
  },
}));

export default StyledLink;
