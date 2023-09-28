import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../reducer/cartSlice";
import {
  addAlbumAction,
  addMerchandiseAction,
  addOrderHistoryAction,
} from "../reducer/asyncDataReducer";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalMerPrice, setTotalMerPrice] = useState(0);
  const [totalAlbumPrice, setTotalalbumPrice] = useState(0);
  const orderList = useSelector((state) => state.cart.orderList);
  console.log(totalAlbumPrice);
  console.log(totalMerPrice);
  const userData = useSelector((state) => state.auth.userProfileData);
  const cartmerchandise = useSelector((state) => state.cart.cartmerchandise);
  const cartalbums = useSelector((state) => state.cart.cartalbums);
  console.log(cartalbums);

  const incrementMerchandise = (merchandise) => {
    dispatch(cartActions.addMerchandiseToCart(merchandise));
  };

  const decrementMerchandise = (merchandise) => {
    dispatch(cartActions.removeMechandiseFromCart(merchandise));
  };

  const incrementMusic = (album) => {
    dispatch(cartActions.addAlbumsToCart(album));
  };
  const decrementMusic = (album) => {
    dispatch(cartActions.remvoveAlbumsFromCart(album));
  };

  const storePageHandler = () => {
    navigate("/store");
  };

  const storeHandler = () => {
    navigate("/store");
  };

  useEffect(() => {
    if (cartmerchandise?.length > 0) {
      TotalAmountOfMerchandise();
    }
  }, [cartmerchandise]);

  useEffect(() => {
    if (cartalbums?.length > 0) {
      TotalAmountOfAlbum();
    }
  }, [cartalbums]);

  const TotalAmountOfMerchandise = () => {
    const totalAmountOfEachMerchandiseItem = cartmerchandise?.map(
      (merchandise) => {
        return merchandise.quantity * merchandise.price;
      }
    );
    const total = totalAmountOfEachMerchandiseItem?.reduce(
      (previous, current) => {
        return previous + current;
      }
    );
    setTotalMerPrice(total);
  };

  const TotalAmountOfAlbum = () => {
    const totalAmountOfEachAlbumItem = cartalbums.map((album) => {
      return album.quantity * album.price;
    });
    const total = totalAmountOfEachAlbumItem.reduce((previous, current) => {
      return previous + current;
    });

    setTotalalbumPrice(total);
  };

  const date = new Date(); // get current date and time
  const day = date.getDate(); // get day of the month (1-31)
  const month = date.toLocaleString("default", { month: "short" }); // get month abbreviation (Jan, Feb, etc.)
  const year = date.getFullYear(); // get four-digit year
  const hour = date.getHours(); // get hour (0-23)
  const minute = date.getMinutes(); // get minute (0-59)
  const ampm = hour >= 12 ? "P.M." : "A.M."; // determine AM/PM
  const hour12 = hour % 12 || 12; // convert to 12-hour format
  const time = `${hour12}:${minute}${ampm}`; // format time as "hh:mmAM/PM"
  const formattedDate = `${day} ${month} ${year} ${time}`; // format date as "day month year hh:mmAM/PM"

  const orderButtonClickHandler = (
    cartalbums,
    cartmerchandise,
    formattedDate,
    totalAlbumPrice,
    totalMerPrice
  ) => {
    dispatch(
      cartActions.orderNow({
        albums: cartalbums,
        mercandise: cartmerchandise,
        date: formattedDate,
        AlbumPrice: totalAlbumPrice,
        MerPrice: totalMerPrice,
      })
    );
    dispatch(
      addOrderHistoryAction({
        userLocalId: userData.localId,
        orderCart: {
          albums: cartalbums,
          mercandise: cartmerchandise,
          date: formattedDate,
          AlbumPrice: totalAlbumPrice,
          MerPrice: totalMerPrice,
        },
      })
    );
    dispatch(
      addMerchandiseAction({
        userLocalId: userData.localId,
        merchandiseCart: {},
      })
    );
    dispatch(
      addAlbumAction({
        userLocalId: userData.localId,
        albumCart: {},
      })
    );
    setTotalalbumPrice(0);
    setTotalMerPrice(0);
    navigate("/thankyoupage");
  };

  return (
    <div>
      {/* {cartAlbums.length === 0 && cartMerchandise.length === 0 ? (
        <div>
          <section
            className="h-100 h-custom"
            style={{ backgroundColor: "#d2c9ff" }}
          >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div
                    className="card card-registration card-registration-2"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">
                                Shopping Cart
                              </h1>
                            </div>
                            <hr className="my-4" />
                            <h3 className="fw-bold mb-5 text-black">
                              {" "}
                              Cart is Empty . Go to store page to add some items
                              &nbsp;
                              <button
                                style={{
                                  marginTop: "8px",
                                  margin: "auto",
                                  height: "35px",
                                  borderRadius: "5px",
                                  color: "green",
                                }}
                                onClick={storeHandler}
                              >
                                Visit our store
                              </button>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      (
      <div>
        {" "}
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "#d2c9ff" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 text-muted">
                              Total Items:-
                              {cartmerchandise?.length + cartalbums?.length}
                            </h6>
                          </div>
                          <hr className="my-4" />
                          <h3 className="fw-bold mb-5 text-black">
                            {" "}
                            Official Merchandise
                          </h3>
                          {cartmerchandise?.map((merchandise) => (
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={merchandise?.img}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">
                                  {merchandise?.title}
                                </h6>
                                {/* <h6 className="text-black mb-0">
                                  {merchandise.productDescription}
                                </h6> */}
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  onClick={() =>
                                    decrementMerchandise(merchandise)
                                  }
                                >
                                  -
                                </button>
                                {merchandise?.quantity}
                                <button
                                  onClick={() =>
                                    incrementMerchandise(merchandise)
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">
                                  ₹&nbsp;
                                  {merchandise?.quantity * merchandise?.price}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          ))}
                          <hr className="my-4" />
                          <h3 className="fw-bold mb-5 text-black">
                            {" "}
                            Official Music Album
                          </h3>
                          {cartalbums?.map((album) => (
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={album?.albumImg}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{album?.title}</h6>
                                {/* <h6 className="text-black mb-0">
                                  {album.albumYear}
                                </h6> */}
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button onClick={() => decrementMusic(album)}>
                                  -
                                </button>
                                {album?.quantity}
                                <button onClick={() => incrementMusic(album)}>
                                  +
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">
                                  ₹&nbsp;{album?.quantity * album?.price}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          ))}

                          <hr className="my-4" />
                          <div className="pt-5">
                            <h6 className="mb-0">
                              {/* <a
                                style={{ cursor: "pointer" }}
                                className="text-body"
                                onClick={storePageHandler}
                              >
                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                Back to shop
                              </a> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">
                            Bill details
                          </h3>

                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total amounts</h5>
                            <h5>₹ {totalMerPrice + totalAlbumPrice} </h5>
                          </div>
                          <hr className="my-4" />

                          <button
                            type="button"
                            className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                            onClick={() =>
                              orderButtonClickHandler(
                                cartalbums,
                                cartmerchandise,
                                formattedDate,
                                totalAlbumPrice,
                                totalMerPrice
                              )
                            }
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      )
    </div>
  );
};
export default Cart;
