import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartIcon = () => {
    return (
      <IconButton color="defult" aria-label="add to shopping cart">
  
      <ShoppingCartRoundedIcon/>
    </IconButton>
    )
  };
  
  export default CartIcon;