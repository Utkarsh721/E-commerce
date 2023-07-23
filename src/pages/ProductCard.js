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
  const albums = useSelector((state) => state.cart.album);
  console.log(albums)
  const dispatch = useDispatch();

  const addMerchandiseToCart = (merchandise) => {
    dispatch(cartActions.addMerchandiseToCart(merchandise));
    // console.log(merchandise);
  };

  const addAlbumsClickHandler = (album) => {
    dispatch(cartActions.addAlbumsToCart(album));
    console.log(album);
  };

  return (
    <Fragment>
      <h1>Music</h1>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid sx={{ ml: 10, mt: 5 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={album.img}
                title={album.title}
              />
              <CardActions>
                <Typography size="small">Artist - The Generics</Typography>
                <br />
                <Button
                  size="small"
                  sx={{ ml: 8 }}
                  onClick={() => addAlbumsClickHandler(album)}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
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
                <Typography size="small">
                  ${merchandise.price}
                </Typography>
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
    </Fragment>
  );
};
export default StorePage;
