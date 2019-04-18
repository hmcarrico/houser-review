import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homes: []
        }
    }
    componentDidMount(){
        this.getHomes()
    }

    getHomes = () => {
        axios.get('/api/gethomes').then(res => {
            console.log(res.data)
            this.setState({
                homes: res.data
            })
        })
    }

    deleteHome = (homeId) => {
        axios.delete(`/api/deletehome?id=${homeId}`).then(res => {
            this.getHomes()
        })
    }
    render() { 
        const homes = this.state.homes.map(home => {
            return <div>
                <h2>{home.name}</h2>
                {home.address}
                <img src={home.img} />
                {home.state}
                {home.zip}
                <button onClick={() => this.deleteHome(home.id)}>Delete</button>
            </div>
        })
        return ( 
            <div>
                Dashboard
                <Link to='/step1'><button>Add Home</button></Link>
                {homes}
            </div>
        );
    }
}

export default Dashboard;