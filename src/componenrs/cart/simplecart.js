import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  return (
    <>
      <h3>Cart</h3>
      <ul>
        {props.cart.products.map((productAdded) => {
          return (
            <li>
              {productAdded.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories,
    products: state.products,
    cart:state.cart };
};

export default connect(mapStateToProps)(Cart);