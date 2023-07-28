<<<<<<< HEAD
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.css";
=======
import * as React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { cartActions } from "../reducer/cartSlice";

const StorePage = () => {
  const merchandise = useSelector((state) => state.cart.merchandise);
  const albums = useSelector((state) => state.cart.albums);
  console.log(albums);
  const dispatch = useDispatch();

  const addMerchandiseToCart = (merchandise) => {
    dispatch(cartActions.addMerchandiseToCart(merchandise));
    // console.log(merchandise);
  };

  const addAlbumsClickHandler = (album) => {
    dispatch(cartActions.addAlbumsToCart(album));
    console.log(album);
  };
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723

function ProductCard() {
  const tours = useSelector((state) => state.cart.bandTourDetails);
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.genericsText}>The Generics</h1>
        <h3 className={styles.tourText}>Tours</h3>
      </div>
      <div className={styles.card}>
        {tours.map((tour) => (
          <div>
            <div className={styles.cardImage}>
              <img src={tour.tourImage} alt={tour.tourName} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.tourName}>{tour.tourName}</h3>
              <p className={styles.tourDescription}>{tour.tourDescription}</p>
              <p className={styles.tourDates}>
                <strong>Dates: </strong>
                {tour.tourStartDate}
              </p>
              <p className={styles.tourVenue}>
                <strong>Venue: </strong>
                {tour.tourLocation}
              </p>
              <button className={styles.tourButton}>Buy Tickets</button>
            </div>
          </div>
        ))}
<<<<<<< HEAD
      </div>
=======
      </Grid>
      <h1>Official Merchandise</h1>
      <Grid container spacing={2}>
        {merchandise.map((merchandise) => (
          <Grid sx={{ ml: 10, mt: 5 }} key={merchandise.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={merchandise.img}
                title="The Generics"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {merchandise.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography size="small">${merchandise.price}</Typography>
                <Button
                  size="small"
                  sx={{ ml: 25 }}
                  onClick={() => addMerchandiseToCart(merchandise)}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
>>>>>>> b15209e15e89d305bc89ffa2f0be8343866ee723
    </Fragment>
  );
}

export default ProductCard; 