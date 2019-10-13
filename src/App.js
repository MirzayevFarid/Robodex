import React, { Component }from 'react';
import {CardList} from "./components/card-list/cardList-component";
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
          <h1 className='header'>ROBODEX</h1>
          <input className='search-box' onChange={input => {
            this.setState({searchField: input.target.value})
          }} type='search' placeholder='Search Name'/>
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}
export default App;
