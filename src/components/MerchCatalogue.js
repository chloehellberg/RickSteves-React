import React from 'react';
import PropTypes from "prop-types";
import MerchItem from "./MerchItem";
import Scarf from "./../../src/Img/scarf.png";
import Hat from "./../../src/Img/hat.png"
import Photo from "./../../src/Img/photo.jpg"



// const MerchCatalogueItems = [
//   {
//     name : "Scarf",
//     description : "Soft and fuzy",
//     quantity : 4,
//     image: Scarf ,
//     id: 1
//   },
//   {
//     name: "Hat",
//     description:"It covers your head ",
//     quantity : 16,
//     image: Hat,
//     id: 2
//   },
//   {
//     name : "Profile picture",
//     description : "Put this on your mantle",
//     quantity : 23,
//     image: Photo,
//     id: 3
//   }
// ]



function MerchCatalogue(props){
  return(
    <React.Fragment>
      <h3>Placeholder catalogue</h3>
      {props.merchItemList.map((merchItem) =>
      <MerchItem 
        whenMerchClicked = {props.onMerchSelection}
        name = {merchItem.name}
        description = {merchItem.description}
        quantity = {merchItem.quantity}
        image = {merchItem.image}
        id = {merchItem.id}
        key = {merchItem.id}/>
      )}
      
    </React.Fragment>
  );
}

MerchCatalogue.propTypes = {
  merchItemList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};


export default MerchCatalogue;