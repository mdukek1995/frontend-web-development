import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super();
        this.name = props.name;
    }
    render() {
        const styles = {
            fontSize: '2em'
        }
        return (
           // <h1>{this.name}</h1>
           <h1 className="my-heading" style={styles}>Hello {this.name}!</h1>
        );
    }
}