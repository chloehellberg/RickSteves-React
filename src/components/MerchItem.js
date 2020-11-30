import React from 'react';
import PropTypes from "prop-types";

function MerchItem(props){
  const thisNotStolenFromSkaTune = {
    background: "#36cfb6",
    color: "#000000",
    fontFamily: "Lexend-Exa",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.5em",
    position: "relative"
  }
  return(
    <React.Fragment>
      <div class="product-list-item-container">
        <img class="product-list-image-container" src={props.image}></img>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.quantity}</h3>
        <button onClick = {() => props.whenMerchClicked(props.id)}>Details</button>
        {/* <button class="btn">Details</button> */}
      </div>
    </React.Fragment>
  );
}

MerchItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.string.isRequired,
  image: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default MerchItem;