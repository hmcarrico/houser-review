import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    state: '',
    zip: '',
    img: ''
}

export const UPDATENAME = 'UPDATENAME';
export const UPDATEADDRESS = 'UPDATEADDRESS';
export const UPDATEIMAGE = 'UPDATEIMAGE';
export const UPDATESTATE = 'UPDATESTATE';
export const UPDATEZIP = 'UPDATEZIP';

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATENAME:
            return {
                ...state,
                name: action.payload
            }
        case UPDATEADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case UPDATEIMAGE:
            return {
                ...state,
                img: action.payload
            }
        case UPDATESTATE:
            return {
                ...state,
                state: action.payload
            }
        case UPDATEZIP:
            return {
                ...state,
                zip: action.payload
            }
        default: return state
    }
}

export default createStore(reducer);