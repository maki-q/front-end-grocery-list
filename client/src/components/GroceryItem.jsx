import React from 'react';

const GroceryItem = ({focusIndividualGrocery, currentlyFocused, index, item}) => (
  <li>
    <span
      className="grocery-item"
      onClick={() => focusIndividualGrocery(index)}
      style={{fontWeight: currentlyFocused ? 'bold' : ''}} // Look up 'ternary operations'
    >
      {item.name} - {item.quantity}
    </span>
  </li>
)

export default GroceryItem;
