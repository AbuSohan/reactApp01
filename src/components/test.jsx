import React, { Component } from 'react';

class TestCom extends Component {
    state = {
        count : this.props.value,
        imageUrl : "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3'],
    };
    style = {
        fontSize: 50,
        fontWeight: "bold",
    };

    // handleIncremetn() {
    //     console.log('Increment Clicked');
    // }

    handleIncremetn = product => {
        // console.log("Increment Clicked", this);
        //console.log(product);
        //this.props.count = 0; can't change the value of props
        this.setState({ count: this.state.count + 1 });
    }

    handleDecremetn = e => {
        // console.log("Increment Clicked", this);
        console.log(e);
        this.setState({ count: this.state.count - 1 });
    }

    doHandleIncrement = () => {
        this.handleIncremetn({id: 1});
    }

    render() { 
        console.log('props', this.props);
        let classes = this.getBadgeClasses();

        return (
            <div>
                {this.props.children}
                <img src={this.state.imageUrl} alt="" />
                <h1 style={this.style} className={classes}>{ this.formatCout() }</h1>
                <button 
                    onClick={this.doHandleIncrement} 
                    className="btn btn-success"
                >
                    Increment
                </button>
                <button 
                    onClick={ () => this.handleDecremetn({ id: 1})} 
                    className="btn btn-danger m-2"
                >
                    Decrement
                </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
                </ul>
            </div>
            );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCout() {
        const {count} = this.state;
        return count === 0 ? "zero" : <h1>{count}</h1>;
    }
}
 
export default TestCom;