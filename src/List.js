import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.listOfItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
}

export default List;
