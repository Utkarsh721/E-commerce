import { createSlice } from "@reduxjs/toolkit";
import bagImg from "../assets/bagpack-1.jpg";
import ShirtImg from "../assets/blcShirt-1.jpg";
import kurtaImg from "../assets/kurta-1.jpg";
import laptopImg from "../assets/laptop-1.jpg";
import mobileImg from "../assets/mobile-1.jpg";
import shoeImg from "../assets/shoe-1.jpg";
import tshirt from "../assets/t-shirt1.jpg";
import wshirt from "../assets/whiteshirt-1.jpg";
import album1 from "../assets/music 1.jpg";
import album2 from "../assets/music 2.jpg";
import album3 from "../assets/music 3.jpg";
import album4 from "../assets/music 4.jpg";
import album5 from "../assets/music 5.jpg";
import album6 from "../assets/music 6.jpg";
import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";
import tour4 from "../assets/tour4.jpg";
import tour5 from "../assets/tour5.jpg";

import bagImg from "../assets/bagpack-1.jpg";
import ShirtImg from "../assets/blcShirt-1.jpg";
import kurtaImg from "../assets/kurta-1.jpg";
import laptopImg from "../assets/laptop-1.jpg";
import mobileImg from "../assets/mobile-1.jpg";
import shoeImg from "../assets/shoe-1.jpg";
import tshirt from "../assets/t-shirt1.jpg";
import wshirt from "../assets/whiteshirt-1.jpg";
import album1 from "../assets/music 1.jpg";
import album2 from "../assets/music 2.jpg";
import album3 from "../assets/music 3.jpg";
import album4 from "../assets/music 4.jpg";
import album5 from "../assets/music 5.jpg";
import album6 from "../assets/music 6.jpg";
// import {
//   getAlbumData,
//   getMerchandiseData,
//   getOrderHistoryData,
// } from "./asyncDataReducer";

<<<<<<< HEAD
// import {
//   getAlbumData,
//   getMerchandiseData,
//   getOrderHistoryData,
// } from "./asyncDataReducer";

const data = [
  {
    id: 1,
    title: "Bag",
    img: bagImg,
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    title: "Shirt",
    img: ShirtImg,
    price: 499,
    quantity: 1,
  },
  {
    id: 3,
    title: "Kurta",
    img: kurtaImg,
    price: 629,
    quantity: 1,
  },
  {
    id: 4,
    title: "Laptop",
    img: laptopImg,
    price: 45000,
    quantity: 1,
  },
  {
    id: 5,
    title: "Mobile",
    img: mobileImg,
    price: 15000,
    quantity: 1,
  },
  {
    id: 6,
    title: "Shhoe",
    img: shoeImg,
    price: 2199,
    quantity: 1,
  },
  {
    id: 7,
    title: "T-Shirt",
    img: tshirt,
    price: 555,
    quantity: 1,
  },
  {
    id: 8,
    title: "Shirt",
    img: wshirt,
    price: 299,
    quantity: 1,
  },

=======
const data = [
  {
    id: 1,
    title: "Bag",
    img: bagImg,
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    title: "Shirt",
    img: ShirtImg,
    price: 499,
    quantity: 1,
  },
  {
    id: 3,
    title: "Kurta",
    img: kurtaImg,
    price: 629,
    quantity: 1,
  },
  {
    id: 4,
    title: "Laptop",
    img: laptopImg,
    price: 45000,
    quantity: 1,
  },
  {
    id: 5,
    title: "Mobile",
    img: mobileImg,
    price: 15000,
    quantity: 1,
  },
  {
    id: 6,
    title: "Shhoe",
    img: shoeImg,
    price: 2199,
    quantity: 1,
  },
  {
    id: 7,
    title: "T-Shirt",
    img: tshirt,
    price: 555,
    quantity: 1,
  },
  {
    id: 8,
    title: "Shirt",
    img: wshirt,
    price: 299,
    quantity: 1,
  },

>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
  {
    id: 11,
    title: "Mobile",
    img: mobileImg,
    price: 17588,
    quantity: 1,
  },
];

const album = [
  {
    id: 13,
<<<<<<< HEAD
    titleA: "Album 1",
    ImgA: album1,
    priceA: 2500,
=======
    title: "Album 1",
    img: album1,
    price: 2500,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    quantity: 1,
  },
  {
    id: 14,
<<<<<<< HEAD
    titleA: "Album 2",
    ImgA: album2,
    priceA: 2499,
=======
    title: "Album 2",
    img: album2,
    price: 2499,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    quantity: 1,
  },
  {
    id: 15,
<<<<<<< HEAD
    titleA: "Album 3",
    ImgA: album3,
    priceA: 599,
=======
    title: "Album 3",
    img: album3,
    price: 599,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    quantity: 1,
  },
  {
    id: 16,
<<<<<<< HEAD
    titleA: "Album 4",
    ImgA: album4,
    priceA: 1500,
=======
    title: "Album 4",
    img: album4,
    price: 1500,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    quantity: 1,
  },
  {
    id: 17,
<<<<<<< HEAD
    titleA: "Album  5",
    ImgA: album5,
    priceA: 6500,
=======
    title: "Album  5",
    img: album5,
    price: 6500,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    quantity: 1,
  },
  {
    id: 18,
<<<<<<< HEAD
    titleA: "Album 6",
    ImgA: album6,
    priceA: 5100,
    quantity: 1,
  },
];
const tourDetails = [
  {
    id: "001",
    tourName: "Summer Tour 2023",
    tourImage:tour1,
    tourStartDate: "June 1, 2023",
    tourEndDate: "August 31, 2023",
    tourLocation: "Various locations",
    tourDescription:
      "Join us for our biggest tour yet! We'll be playing in cities across the country, bringing our latest music and a high-energy live show to audiences everywhere. Don't miss it!",
  },
  {
    id: "002",
    tourName: "Fall Tour 2023",
    tourImage:tour2,
    tourStartDate: "September 15, 2023",
    tourEndDate: "November 30, 2023",
    tourLocation: "Various locations",
    tourDescription:
      "We're hitting the road again this fall for another round of shows. Get ready for an unforgettable live experience as we perform our most beloved songs and some new surprises too.",
  },
  {
    id: "003",
    tourName: "Winter Tour 2024",
    tourImage:tour3,
    tourStartDate: "January 15, 2024",
    tourEndDate: "March 31, 2024",
    tourLocation: "Various locations",
    tourDescription:
      "We're heating things up this winter with a tour that will take us to some of the most iconic venues in the country. Come out and celebrate the season with us!",
  },
  {
    id: "004",
    tourName: "Autum Tour 2023",
    tourImage:tour4,
    tourStartDate: "June 3, 2023",
    tourEndDate: "August 29, 2023",
    tourLocation: "Various locations",
    tourDescription:
      " High-energy live show to audiences everywhere. Don't miss it!",
  },
 {
  id: "005",
  tourName: "Spring Tour 2023",
  tourImage:tour5,
  tourStartDate: "July5, 2023",
  tourEndDate: "August 15, 2023",
  tourLocation: "Various locations",
  tourDescription:
    " Bringing our latest music and a high-energy live show to audiences everywhere. Don't miss it!",
},
=======
    title: "Album 6",
    img: album6,
    price: 5100,
    quantity: 1,
  },
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    albums: album,
    bandTourDetails: tourDetails,
    merchandise: data,
    cartmerchandise: [],
    cartalbums: [],
    cartChanged: false,
    orderList: [],
  },

  reducers: {
    addMerchandiseToCart(state, action) {
      const merchandise = action.payload;
      state.cartChanged = true;
      const existingMerchandise = state.cartmerchandise.find(
        (item) => item.id === merchandise.id
      );
      // console.log(existingMerchandise);
      if (!existingMerchandise) {
        state.cartmerchandise.push({
          id: merchandise.id,
          title: merchandise.title,
          price: merchandise.price,
          quantity: 1,
          img: merchandise.img,
        });
      } else {
        // const existingMerchandiseIdx = state.cartBandMerchandise.findIndex(
        //   (item) => item.id === existingMerchandise.id
        // );
        existingMerchandise.quantity++;
        // existingMerchandise.productPrice += merchandise.productPrice;
      }
      // console.log(state.cartBandMerchandise);
    },
    removeMechandiseFromCart(state, action) {
      state.cartChanged = true;
      const merchandise = action.payload;
      if (merchandise.quantity > 1) {
        const merchandiseIdx = state.cartmerchandise.findIndex(
          (item) => item.id === merchandise.id
        );
        state.cartmerchandise[merchandiseIdx].quantity--;
        // state.cartBandMerchandise[merchandiseIdx].price =
        // existingMerchandise.price -= merchandise.price;
      } else {
        state.cartmerchandise = state.cartmerchandise.filter(
          (item) => item.id !== merchandise.id
        );
      }
    },
    addAlbumsToCart(state, action) {
      const album = action.payload;
      state.cartChanged = true;

      // console.log(album);
      const existingAlbum = state.cartalbums.find(
        (item) => item.id === album.id
      );
      // console.log(existingMerchandise);
      if (!existingAlbum) {
        state.cartalbums.push({
          id: album.id,
<<<<<<< HEAD
          title: album.titleA,
          price: album.priceA,
=======
          title: album.title,
          price: album.price,
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
          quantity: 1,
        });
      } else {
        // const existingAlbumIdx = state.cartBandAlbums.findIndex(
        //   (item) => item.id === existingAlbum.id
        // );
        existingAlbum.quantity++;
        // existingMerchandise.productPrice += merchandise.productPrice;
      }
      // console.log(state.cartBandAlbums);
    },

    remvoveAlbumsFromCart(state, action) {
      state.cartChanged = true;
      const album = action.payload;
      if (album.quantity > 1) {
        const albumIdx = state.cartalbums.findIndex(
          (item) => item.id === album.id
        );
        state.cartalbums[albumIdx].quantity--;
        // state.cartBandMerchandise[merchandiseIdx].price =
        // existingMerchandise.price -= merchandise.price;
      } else {
        state.cartalbums = state.cartalbums.filter(
          (item) => item.id !== album.id
        );
      }
    },

    orderNow(state, action) {
      const response = action.payload;
      // console.log(response);
      state.orderList.push(response);
      state.cartalbums = [];
      state.cartmerchandise = [];
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getMerchandiseData.fulfilled, (state, action) => {
    //   const response = action.payload.merchandise;
    //   state.cartmerchandise = response;
    //   state.cartChanged = false;
    // });
    // builder.addCase(getAlbumData.fulfilled, (state, action) => {
    //   const response = action.payload.album;
    //   state.cartalbums = response;
    //   state.cartChanged = false;
    // });
    // builder.addCase(getOrderHistoryData.fulfilled, (state, action) => {
    //   const response = action.payload.order;
    //   state.orderList = response;
    //   state.cartChanged = false;
    // });
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;