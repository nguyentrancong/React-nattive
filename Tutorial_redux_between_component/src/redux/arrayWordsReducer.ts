import {
    TOGGLE_SHOW_HIDE, 
    TOGGLE_MEMORIZED_FORGET,
    ADD_NEW_WORD,
} from './actionTypes';
import { arrWords } from '../data';

const defaultValue = arrWords

const arrWordsReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_HIDE:
            return state.map(e => {
                    if (e.id === action.id) {
                        return {...e, isShow: !e.isShow}
                    } else {
                        return e
                    }
                })

        case TOGGLE_MEMORIZED_FORGET: 
            return state.map(e => {
                    if (e.id === action.id) {
                        return {
                            ...e,
                            memorized: !e.memorized
                        }
                    } else {
                        return e
                    }
                })
        
        case ADD_NEW_WORD:
            return [action.item].concat(state)
        
        default:
            return state
    }
}

export {arrWordsReducer};