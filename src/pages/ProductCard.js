import * as React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.css";

import Grid from "@mui/material/Grid";

const ProductCard = () => {
  const tours = useSelector((state) => state.cart.bandTourDetails);

  return (
    <Fragment>
      <Grid>
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
        </div>
      </Grid>
    </Fragment>
  );
};
export default ProductCard;
