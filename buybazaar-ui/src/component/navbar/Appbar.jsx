import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const categories = ["Men", "Women", "Kids", "Home & Decor", "Electronics & Appliances", "Others"];
const settings = ["Login/Signup", "Cart", "Wishlist", "My orders", "Enquiry"];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "Shizuru, sans-serif",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textTransform: "uppercase", // Make the text uppercase
                color: "white",
                textDecoration: "none",
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>buybazaar</span>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1.5, display: { xs: "none",alignItems:"center", md: "flex" } }}>
            {categories.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>



          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" ,
              pl: 5,
              "& .MuiPaper-root": {
                borderRadius: "20px",
              },
            }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ borderRadius: "30px" }}>
                   <ListItemIcon>
                    {index === 0 && <AccountCircleIcon />}
                    {index === 1 && <ShoppingCartIcon />}
                    {index === 2 && <FavoriteIcon />}
                    {index === 3 && <AssignmentIcon />}
                    {index === 4 && <QuestionAnswerIcon />}
                  </ListItemIcon>
                  <Typography textAlign="center" sx={{borderRadius: "50px"}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* Expanded categories list for responsive */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {categories.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}

export default Appbar;
