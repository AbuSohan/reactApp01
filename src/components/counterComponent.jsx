import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 1,
        imageUrl : "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3'],
    };

    handleIncrement() {
        console.log('Increment Cicked');
    }

    rederTags() {
        if (this.state.tags.length === 0) return <p>No tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
    }

    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.rederTags()}
            </div>
            );
    };

}
 
export default Counter;