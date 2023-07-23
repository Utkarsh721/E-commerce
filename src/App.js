import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Login from "./pages/Login";
import ProductCard from "./pages/ProductCard";
import Cart from "./pages/Cart";
import Profile from "./pages/profile";
import UpdateProfile from "./pages/upadateProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "./reducer/asyncAuthReducer";
import {
  addAlbumAction,
  addMerchandiseAction,
  addOrderHistoryAction,
  getAlbumData,
  getMerchandiseData,
  getOrderHistoryData,
} from "./reducer/asyncDataReducer";

function App() {
  const cart = useSelector((state) => state.cart);
  const cartBandMerchandise = useSelector(
    (state) => state.cart.cartBandMerchandise
  );
  const cartBandAlbums = useSelector((state) => state.cart.cartBandAlbums);
  const cartOrderHistory = useSelector((state) => state.cart.orderList);
  const userData = useSelector((state) => state.auth.userProfileData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);

  useEffect(() => {
    if (cart.cartChanged) {
      dispatch(
        addMerchandiseAction({
          userLocalId: userData.localId,
          merchandiseCart: cartBandMerchandise,
        })
      );
      dispatch(
        addAlbumAction({
          userLocalId: userData.localId,
          albumCart: cartBandAlbums,
        })
      );
      dispatch(
        addOrderHistoryAction({
          userLocalId: userData.localId,
          orderCart: cartOrderHistory,
        })
      );
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);
  useEffect(() => {
    if (userData) {
      dispatch(getMerchandiseData(userData.localId));
      dispatch(getAlbumData(userData.localId));
      dispatch(getOrderHistoryData(userData.localId));
    }
  }, [userData]);


  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route  exact path="/" element={<ProductCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
    
      </Routes>

      <Footer />
    </Fragment>
  );
};

export default App;