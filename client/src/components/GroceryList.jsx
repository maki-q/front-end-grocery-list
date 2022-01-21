import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({groceries, focusIndividualGrocery, currentlyFocused}) => (
  <ul className="groceries">
    {groceries.map(( item, index ) => //Why do we use map? How does React respond to it?
      <GroceryItem
        key={`grocery-item-${index}`}
        item={item}
        index={index}
        focusIndividualGrocery={focusIndividualGrocery}
        currentlyFocused={currentlyFocused === index}
        customProp
      />)}
  </ul>
);

export default GroceryList;