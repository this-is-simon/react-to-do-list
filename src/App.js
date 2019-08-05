import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
    state = {
        item: '',
        listOfItems: []
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            item: '',
            listOfItems: [...this.state.listOfItems, this.state.item]
        })
    };

    onChange = (event) => {
        this.setState({item: event.target.value})
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.item} onChange={this.onChange}/>
                        <button>Click It</button>
                    </form>
                    <List listOfItems={this.state.listOfItems}/>
                </header>
            </div>
        );
    }
}

export default App;
