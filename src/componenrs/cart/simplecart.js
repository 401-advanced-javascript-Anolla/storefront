import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  return (
    <>
      <h3>Cart</h3>
      {/* <div >
            return (
              <button>Buy</button>
            );
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories,
    products: state.products };
};

export default connect(mapStateToProps)(Cart);