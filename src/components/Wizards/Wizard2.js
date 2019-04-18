import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATESTATE, UPDATEZIP} from '../../ducks/store';
import axios from 'axios'

class Wizard2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            store: store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                store: store.getState()
            })
        })
    }

    updateState = (value) => {
        store.dispatch({action: value, type: UPDATESTATE})
    }

    updateZip = (value) => {
        store.dispatch({action: value, type: UPDATEZIP})
    }

    addHome = (name, address, state, img, zip) => {
        axios.post('/api/posthome', {name, address, state, img, zip}).then(res => {
            alert('house has been added!')
            this.props.history.push('/')
        })
    }

    render() { 
        const {name, address, state, img, zip} = this.state.store
        return ( 
            <div>
                Wizard2
                State: <input onChange={(e) => this.updateState(e.target.value)}/>
                Zip: <input onChange={(e) => this.updateZip(e.target.value)}/>
                <Link to='/step1'><button>previous</button></Link>
                <button onClick={() => this.addHome(name, address, state, img, zip)}>ADD</button>
            </div>
        );
    }
}

export default Wizard2;