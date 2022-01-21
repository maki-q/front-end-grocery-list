import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <ul className="groceries">
    {props.groceries.map(( item, index ) =>
      <GroceryItem
        key={`grocery-item-${index}`}
        item={item}
        index={index}
        focusIndividualGrocery={props.focusIndividualGrocery}
      />)}
  </ul>
);

export default GroceryList;