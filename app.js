// TODO
/*
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList glist={['Coffee','Tea','Soda', 'Meat']} />
  </div>
);


var GroceryList = (props) => (
  <div>
    <li>{props.glist[0]}</li>
    <li>{props.glist[1]}</li>
    <li>{props.glist[2]}</li>
  </div>
);*/




/*var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);*/


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList glist={['Coffee','Tea','Soda', 'Meat']} />
  </div>
);

var GroceryList = (props) => (
  <div>
    <ul>
      {props.glist.map(glist => 
      <GroceryListItem glist={glist} />
      )}
    </ul>
  </div>
);


class GroceryListItem extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }


  onListItemHover(){
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var boldList = {
      'font-weight': this.state.done ? 'bold' : 'none'
    };
    
    return(
      <li style={boldList} onClick={this.onListItemHover.bind(this)}>{this.props.glist}</li>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));



