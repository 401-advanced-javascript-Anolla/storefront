import React from 'react';
import { connect } from 'react-redux';
import { cartAction } from '../../store/cart';


const Products = (props) => {
  return (
    <>
      <h3>Products</h3>
      <div >
        {props.products.filter(allProducts => allProducts.category === props.categories.activeCategory )
          .map(product => {
            return (
              <>
                <div key={product.name}>
                  <h3>Product Name : {product.name}</h3>
                  <img src={`${product.image}`} alt='productImage' />
                  <p >Product Category : {product.category}</p>
                  <p >In Stock : {product.inStock}</p>
                  <p >Price : {product.price}</p>
                </div>
                <button onClick={() => props.cartAction(product)} >Add to Cart</button> 
                <button>View Details</button>
              </>
            );
          })}

      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories,
    products: state.products,
    cart:state.cart };
};

const mapDispatchToProps = { cartAction };

export default connect(mapStateToProps,mapDispatchToProps)(Products);