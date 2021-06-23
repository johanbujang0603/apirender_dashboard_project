import {
    PROJECT_ADD_ITEM,
    PROJECT_ADD_ITEM_SUCCESS,
    PROJECT_ADD_ITEM_ERROR,
} from '../actions';
  
const INIT_STATE = {
    allProjectItems: null,
    curProjectItem: null,
    projectItems: null,
    error: '',
    searchKeyword: '',
    orderColumn: null,
    loading: false,
    selectedItems: [],
};
  
export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case PROJECT_ADD_ITEM:
            return { ...state, loading: false };

        case PROJECT_ADD_ITEM_SUCCESS:
            return {
                ...state,
                loading: true,
                curProjectItem: action.payload,
            };

        case PROJECT_ADD_ITEM_ERROR:
            return { ...state, loading: true, error: action.payload };
        
        default:
            return { ...state };
    }
};
