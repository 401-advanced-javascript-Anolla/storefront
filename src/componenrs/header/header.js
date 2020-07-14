import React from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1>MY STORE</h1>
      <div>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/cart' > CART({props.cart.numOfitemsAdded})</NavLink>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);