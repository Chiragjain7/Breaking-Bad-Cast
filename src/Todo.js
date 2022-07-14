import React from 'react'

export class Todo extends React.Component {
    componentDidMount() {
        // setInterval(() => {
           
        // }, 1000);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    render() {
        console.log('render called');
        return (<div>...</div>);
    }
}