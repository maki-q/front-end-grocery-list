import React from 'react';

const GroceryItem = (props) => (
  <li>
    <span
      onClick={() => props.focusIndividualGrocery(props.index)}
      style={{cursor: 'pointer'}}
    >
      {props.item.name} - {props.item.quantity}
    </span>
  </li>
)

export default GroceryItem;
