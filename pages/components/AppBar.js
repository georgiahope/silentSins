import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import InstagramIcon from '@mui/icons-material/Instagram';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="fixed" sx={{backgroundColor: '#9f3133'}}>
      <Container maxWidth="xl" margin='0'>
        <Toolbar disableGutters>
        <Icon sx={{ display: { xs: 'none',md: 'flex' }, 
         width: 60,
         height:60,
         mr:0 }}>
        <img src="whiteRose.ico"/>
        </Icon>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monotone',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '.7rem',
              lineheight: '14',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Silent Sins
          </Typography>
            
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            
              <Button>
                <Typography
                component="a"
                href="../Products"
                sx={{
                  fontFamily: 'monotone',
                  textTransform: 'uppercase',
                  color: '#ffff'
                }}>
                  Products
                </Typography>
              </Button>
              
              <Button>
                <Typography
                component="a"
                href="../Lookbook"
                sx={{
                  fontFamily: 'monotone',
                  textTransform: 'uppercase',
                  color: '#ffff'
                }}>
                  Lookbook
                </Typography>
              </Button>

              <Button>
                <Typography
                component="a"
                href="../ContactUs"
                sx={{
                  fontFamily: 'monotone',
                  textTransform: 'uppercase',
                  color: '#ffff'
                }}>
                  Contact Us
                </Typography>
              </Button>
            
          </Box>
          
          <Box sx={{ flexGrow: 50, display: { xs: 'none', md: 'flex' } }}>

              <a href="https://www.instagram.com/mysilentsins/">
                <InstagramIcon/>
              </a>

          </Box>

          <Box>
            
              <a href="../checkout">
                <ShoppingCartSharpIcon/>
              </a>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
