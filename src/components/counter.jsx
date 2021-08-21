import React, { Component } from 'react';

class Counterr extends Component {
    // state = {
    //     value : this.props.counter.value,
    // };

    // handleIncremetn = product => {
    //     this.setState({ value: this.state.value + 1 });
    // };

    render() { 
        return (
            <div>
                {/* <h1 className={this.getBadgeClasses()}>{ this.formatCout() }</h1> */}
                <span className={this.getBadgeClasses()}>{ this.formatCout() }</span>
                {/* <button 
                    onClick={this.handleIncremetn} 
                    className="btn btn-success"
                >
                    Increment
                </button> */}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-success"
                >
                    Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
            );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += this.state.value === 0 ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCout() {
        // const {value} = this.state;
        const {value} = this.props.counter;
        return value === 0 ? "zero" : <h1>{value}</h1>;
    }
}
 
export default Counterr;