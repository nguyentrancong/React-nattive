import { isAddingFormReducer } from './addingFormReducer';
import { arrWordsReducer } from './arrayWordsReducer';
import { filterReducer } from './filterReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterReducer,
    isAdding: isAddingFormReducer,
})

export { reducer }