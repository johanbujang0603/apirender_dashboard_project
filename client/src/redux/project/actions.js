import {
    PROJECT_ADD_ITEM,
    PROJECT_ADD_ITEM_SUCCESS,
    PROJECT_ADD_ITEM_ERROR,
} from '../actions';
  
export const addProjectItem = (item) => ({
    type: PROJECT_ADD_ITEM,
    payload: item,
});

export const addProjectItemSuccess = (items) => ({
    type: PROJECT_ADD_ITEM_SUCCESS,
    payload: items,
});
  
export const addProjectItemError = (error) => ({
    type: PROJECT_ADD_ITEM_ERROR,
    payload: error,
});
