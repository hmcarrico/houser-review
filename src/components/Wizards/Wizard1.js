import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import store, {UPDATENAME, UPDATEADDRESS, UPDATEIMAGE} from '../../ducks/store';

class Wizard1 extends Component {
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

    updateName = (value) => {
        store.dispatch({payload: value, type: UPDATENAME})
    }

    updateAddress = (value) => {
        store.dispatch({payload: value, type: UPDATEADDRESS})
    }

    updateImage = (value) => {
        store.dispatch({payload: value, type: UPDATEIMAGE})
    }

    render() { 
        console.log(this.state.store)
        return ( 
            <div>
                name: <input onChange={(e) => this.updateName(e.target.value)}/>
                address: <input onChange={(e) => this.updateAddress(e.target.value)}/>
                img: <input onChange={(e) => this.updateImage(e.target.value)}/>
                <Link to='/step2'><button>NEXt</button></Link>
            </div>
        );
    }
}

export default Wizard1;