import React,{Suspense} from "react";
import { Fragment, useEffect  } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer"; 
import Home from "./pages/Home";
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
import OrderHistory from "./pages/OrderHistory";
import FinalOrder from "./pages/FinalOrder";
const Header =React.lazy(() => import("./Component/Header"));
  const About =React.lazy(() => import("./pages/About"));

function App() {
  const cart = useSelector((state) => state.cart);
  const cartmerchandise = useSelector(
    (state) => state.cart.cartmerchandise
  );
  const cartalbums = useSelector((state) => state.cart.cartalbums);
  const orderList = useSelector((state) => state.cart.orderList);
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
          merchandiseCart: cartmerchandise,
        })
      );
      dispatch(
        addAlbumAction({
          userLocalId: userData.localId,
          albumCart: cartalbums,
        })
      );
      dispatch(
        addOrderHistoryAction({
          userLocalId: userData.localId,
          orderCart: orderList,
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
       <Suspense fallback={<p className="loading">Loading .....</p>}></Suspense>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<ProductCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/thankyoupage" element={<FinalOrder />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
