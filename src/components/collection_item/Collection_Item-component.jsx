import React from 'react';

import './collection-item_style.scss';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/Cart-actions';
import CustomButton from '../custom-button/Custom-button_component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (  
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
)};

const mapDispatchToprops = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToprops)(CollectionItem);