import React from 'react';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      groceries: props.groceriesData,
      itemName: '',
      quantity: '',
      selectedItem: 0,
      currentlySelecting: false
    }

    this.handleAddGrocery = this.handleAddGrocery.bind(this)
    this.focusIndividualGrocery = this.focusIndividualGrocery.bind(this)
  }

  // componentDidMount() {
  //   this.setState({
  //     Hello: 'World!'
  //   })
  // }

  focusIndividualGrocery(index) {
    this.setState({
      selectedItem: index,
      currentlySelecting: true,
    })
  }

  handleAddGrocery(event) {
    event.preventDefault();

    let newAddition = this.state.itemName.toLowerCase();
    let newState = [...this.state.groceries]
    let doesExist = false;

    //If we have an item focused
    if(this.state.currentlySelecting) {
      newState[this.state.selectedItem].name = newAddition;
      newState[this.state.selectedItem].quantity = Number(this.state.quantity);

      this.setState({
        groceries: newState,
        itemName: '',
        quantity: '',
        currentlySelecting: false
      });

    } else {

      //Add to the items quantity if it already exists on the list
      for(let i = 0; i < newState.length && !doesExist; i++) {
        if(newState[i].name === newAddition) {
          doesExist = true;
          newState[i].quantity += Number(this.state.quantity)
        }
      }

      //If item does not exist, just add to the grocery list
      if(!doesExist) {
        newState.push({
          name: newAddition,
          quantity: Number(this.state.quantity)
        })
      }

      this.setState({
        groceries: newState,
        itemName: '',
        quantity: '',
      });
    }
  }

  //Conditional rendering
  toggleSelectedItem() {
    if(this.state.currentlySelecting) {
      return (
        <div>
          <span>Currently editing: {this.state.groceries[this.state.selectedItem].name} - {this.state.groceries[this.state.selectedItem].quantity}</span>
          <br/>
          <br/>
        </div>
      )
    }
  }

  render() {
    console.log(this.state.groceries)
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        {this.toggleSelectedItem()}
        <form>
          <div style={{display: 'flex'}}>
            <label> Item
              <input
                onChange={(event) => this.setState({itemName: event.target.value})}
                name="item"
                value={this.state.itemName}
              />
            </label>
            <label> Quantity
              <input
                onChange={(event) => this.setState({quantity: event.target.value})}
                name="quantity"
                value={this.state.quantity}
              />
            </label>
            <button onClick={this.handleAddGrocery}>Add Grocery</button>
          </div>
          <GroceryList
            groceries={this.state.groceries}
            focusIndividualGrocery={this.focusIndividualGrocery}
          />
        </form>
      </div>
    );
  }
}




export default App;