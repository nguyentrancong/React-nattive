
import {
    SHOW_FORM_BUTTON,

} from './actionTypes';

const defaultValue = false

const isAddingFormReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SHOW_FORM_BUTTON: 
            return !state
        default:
            return state
    }
}

export {isAddingFormReducer}