import React from 'react';
import { connect } from 'react-redux';
import { categoryAction } from '../../store/categories';

const Categories  = (props) => {
  return (
    <section>
      <ul>
        {props.categories.categories.map((category) => {
          return (
            <li key={category.name} onClick={() => props.categoryAction(category.name)}>
              {category.displayName}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories,
    products: state.products };
};

const mapDispatchToProps = { categoryAction };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);