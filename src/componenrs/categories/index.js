import React from 'react';
import { connect } from 'react-redux';
import { categoryAction } from '../../store/categories';

const Categories  = (props) => {
  return (
    <section>
      <ul>
        {props.storefront.categories.map((category) => {
          return (
            <li key={category.name} onClick={() => props.categoryAction(category.name)}>
              {category.name}
            </li>
          );
        })}
      </ul>
      {/* <button onClick={props.reset}>Reset</button> */}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { storefront: state.storefront };
};

const mapDispatchToProps = { categoryAction };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);