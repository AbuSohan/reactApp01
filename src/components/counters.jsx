import React, { Component } from 'react';
import Counterr from './counter'

class Counters extends Component {
    
     
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return ( <div>
            <button
                onClick= {onReset} 
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {counters.map(counter => 
            <Counterr
             key={counter.id} 
             onDelete={onDelete}
             onIncrement={ onIncrement}
             counter={ counter } 
            //  value={counter.value} 
            //  id={counter.id}
            />
            )}
        </div> );
    };
};
 
export default Counters;