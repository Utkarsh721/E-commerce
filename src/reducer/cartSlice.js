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
    title: "Album 1",
    img: album1,
    price: 2500,
    quantity: 1,
  },
  {
    id: 14,
    title: "Album 2",
    img: album2,
    price: 2499,
    quantity: 1,
  },
  {
    id: 15,
    title: "Album 3",
    img: album3,
    price: 599,
    quantity: 1,
  },
  {
    id: 16,
    title: "Album 4",
    img: album4,
    price: 1500,
    quantity: 1,
  },
  {
    id: 17,
    title: "Album  5",
    img: album5,
    price: 6500,
    quantity: 1,
  },
  {
    id: 18,
    title: "Album 6",
    img: album6,
    price: 5100,
    quantity: 1,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    albums: album,
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
          title: album.title,
          price: album.price,
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
