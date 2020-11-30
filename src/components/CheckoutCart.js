import React from 'react';
import PropTypes from "prop-types";

function CheckoutCart(props){
  return(
    <React.Fragment>
      <h3>This is a checkout. Stickem up!</h3>
    </React.Fragment>
  );
}

CheckoutCart.propTypes = {
  checkoutCart: PropTypes.array
};


export default CheckoutCart;