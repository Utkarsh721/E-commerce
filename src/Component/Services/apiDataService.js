import axios from "axios";

class apiDataServices {
  static getInstance() {
    return new apiDataServices();
  }

  postMerchandiseData = async (data) => {
    console.log(data);
    try {
      const response = await axios.put(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${data.userLocalId}/merchandise.json`,
        data.merchandiseCart
      );
    } catch {
      console.log("error in merchandise post");
    }
  };

  postAlbumData = async (data) => {
    try {
      const response = await axios.put(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${data.userLocalId}/album.json`,
        data.albumCart
      );
    } catch {
      console.log("error in album post");
    }
  };

  postOrderHistoryData = async (data) => {
    console.log(data);
    const date = new Date();
    try {
      const response = await axios.post(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${data.userLocalId}/order.json`,

        data.orderCart
      );
    } catch {
      console.log("error in orderHistory post");
    }
  };

  getMerchandiseData = async (localId) => {
    try {
      const response = await axios.get(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${localId}/merchandise.json`
      );
      return response.data;
    } catch {
      console.log("error in get merchandise data");
    }
  };

  getAlbumData = async (localId) => {
    try {
      const response = await axios.get(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${localId}/album.json`
      );
      return response.data;
    } catch {
      console.log("error in get album data");
    }
  };

  getOrderData = async (localId) => {
    try {
      const response = await axios.get(
        `https://e-commerce-4d77a-default-rtdb.firebaseio.com/${localId}/order.json`
      );
      return response.data;
    } catch {
      console.log("error in get order data");
    }
  };
}

export const apiDataService = apiDataServices.getInstance();
