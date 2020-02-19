import * as actionTypes from './list.actionTypes.js';

export const addArticle = (article) => {
    return {
        type: actionTypes.ADD_ARTICLE,
        payload: article
    }
}

export const removeArticle = (id) => {
    return {
        type: actionTypes.REMOVE_ARTICLE,
        payload: id
    }
}