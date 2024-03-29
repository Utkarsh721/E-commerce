import * as React from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../reducer/authSlice";
import { Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartActions } from "../reducer/cartSlice";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userProfileData);
  const cartmerchandise = useSelector((state) => state.cart.cartmerchandise);
  const cartBandAlbums = useSelector((state) => state.cart.cartalbums);
  console.log(cartmerchandise, cartBandAlbums);

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
  const homePageHandler = () => {
    navigate("/");
  };
  const aboutPageHandler = () => {
    navigate("/about");
    handleCloseNavMenu();
  };
  const signinPageHandler = () => {
    navigate("/login");
  };
  const userLogoutHandler = () => {
    dispatch(authActions.userLogout());
    dispatch(cartActions.userLogOut());
    navigate("/");
  };
  const storePageHandler = () => {
    navigate("/store");
  };
  const cartPageHandler = () => {
    navigate("/cart");
  };

  const userProfileHandler = () => {
    navigate("/profile");
  };

  const orderHistoryHandler = () => {
    navigate("/orderHistory");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={homePageHandler}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={storePageHandler}>
                <Typography textAlign="center">Store</Typography>
              </MenuItem>
              <MenuItem onClick={aboutPageHandler}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-commerce
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={homePageHandler}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={storePageHandler}
            >
              Store
            </Button>
            <Button
              onClick={aboutPageHandler}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userData !== undefined ? (
              <Grid sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    width: 70,
                    height: 30,
                    backgroundColor: "#c2c2a3",
                    border: "0px",
                    borderRadius: "15px",
                    mt: "5px",
                    mr: "5px",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={cartPageHandler}
                >
                  <Badge
                    badgeContent={
                      cartmerchandise?.length + cartBandAlbums?.length
                    }
                    color="success"
                  >
                    <ShoppingCartIcon sx={{ margin: "auto", ml: "8px" }} />
                  </Badge>
                  <Typography
                    sx={{
                      margin: "auto",
                      color: "white",
                      cursor: "pointer",
                      mr: "15px",
                    }}
                  >
                    Cart
                  </Typography>
                </Box>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
              </Grid>
            ) : (
              <Grid>
                <Typography
                  sx={{ color: "white", cursor: "pointer" }}
                  onClick={signinPageHandler}
                >
                  Sign In
                </Typography>{" "}
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}

            <Menu
              sx={{ mt: "45px" }}
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={userProfileHandler} textAlign="center">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={orderHistoryHandler} textAlign="center">
                  Order History
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={userLogoutHandler}>
                  Log out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
