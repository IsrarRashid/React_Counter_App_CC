import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import React,{Component} from 'react';

class App extends Component {
  state = { counters : [
    {id: 1, value: 4},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0},
] };

constructor(){
  super();
  // console.log("App - Constructor", this.props);  // here it will return undefined because you need to pass props in parameter of constructor and super
  console.log("App - Constructor");
}

componentDidMount(){  // this method is called after our component is rendered into the dom and it is the perfect place to make ajax calls to get data from the server
  // Ajax Call
  console.log("App - Mounted");
}

  render() {
    
    console.log("App - Rendered");

    let handleDelete= counterId =>{
      const counters = this.state.counters.filter(c=>c.id !==counterId);
      this.setState({counters: counters});
      this.setState({counters});
  };
  let handleReset = () =>{
      const counters = this.state.counters.map(c=>{
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };
  let handleIncrement = counter =>{
      const counters =[...this.state.counters];   //cloning counters array
      
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});  
  };

  let handleDecrement = counter =>{
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }
  
    return (
      <React.Fragment>
    <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
    <main className='container'>
      <Counters
      counters = {this.state.counters} 
      onReset={handleReset} 
      onIncrement={handleIncrement} 
      onDelete={handleDelete}
      onDecrement={handleDecrement} //conceptually our counters component is raising an event "onDecrement" and app component is handling the event using this event handler "handleDecrement", this is the actual concept, the implementatio in react is using props to pass function references.
       />
    </main>
    </React.Fragment>
    );
  }
}
 
export default App;
