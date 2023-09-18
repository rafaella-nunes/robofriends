import React, {Component} from "react";
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
//import { robots } from "./robots";
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !this.state.robots.length ?
             <h1>No robots here!</h1> :
        (
                <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox  searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots = {filteredRobots}/>
                </Scroll>
                </div>
            );
        }
    }

export default App;