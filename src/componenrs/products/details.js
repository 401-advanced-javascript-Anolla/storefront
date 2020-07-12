import React from 'react';
import { connect } from 'react-redux';

/////


const Products = (props) => {
  console.log('productttttttttts', props.storefront.products);
  console.log('props.activeCategoooooooory', props.storefront.activeCategory);


  return (
    <>
      <h3>Products</h3>
      <div >
        {props.storefront.products.filter(allProducts => allProducts.category === props.storefront.activeCategory )
          .map(product => {

            return (
              <div  key={product.name}>
                <h3>Product Name : {product.name}</h3>
                <img src={`${product.image}`} alt='productImage' />
                <p >Product Category : {product.category}</p>
                <p >In Stock : {product.inStock}</p>
                <p >Price : {product.price}</p>


              </div>
            );
          })}

      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { storefront: state.storefront };
};

export default connect(mapStateToProps)(Products);