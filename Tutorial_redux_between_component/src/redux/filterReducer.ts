import {
    FILTER_MEMORIZED, 
    FILTER_SHOW_ALL, 
    FILTER_NEED_PRACTICE, 
} from './actionTypes';

const SHOW_ALL = 'SHOW_ALL';
const MEMORIZED = 'MEMORIZED';
const NEED_PRACTICE = 'NEED_PRACTICE';


const filterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case FILTER_SHOW_ALL:
            return SHOW_ALL
        
        case FILTER_MEMORIZED:
            return MEMORIZED

        case FILTER_NEED_PRACTICE: 
            return NEED_PRACTICE

        default: 
            return state
    }
}

export {filterReducer}