import React, { Component } from 'react'

class Counter extends Component {

    // another life cycle hook
    componentDidUpdate(prevProps, prevState){
        //here we can compare old state with new state or old props with new props and if there is a change,
        // we can make ajax request to get new data from the server, if there are no changes perhaps, we 
        // don't want to make additional ajax request, this is optimization technique.
        console.log("prev Props", prevProps);
        console.log("prev State", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log("Counter - Unmount");
    }

render() {
    console.log("Counter - Rendered");

        return (
        <div className='row'>
            <div className="col-1"><span className={this.getBadgeClasses()}>{this.formatCount()}</span></div>
            <div className="col">
            
            <button 
            onClick={()=>this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>+</button>
            
            <button 
            onClick={()=> this.props.onDecrement(this.props.counter)} 
            className='btn btn-secondary btn-sm m-2' disabled={this.props.counter.value === 0 ? "disabled":""}>-</button>
            
            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm">x</button>

            </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-"; 
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;