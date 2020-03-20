import * as actionTypes from './listDemo.actionTypes.js';

export const addArticle = (article) => {
    return {
        type: actionTypes.ADD_ARTICLE,
        payload: article
    }
}

export const removeArticle = (id) => {
    debugger
    return {
        type: actionTypes.REMOVE_ARTICLE,
        payload: id
    }
}

export const editArticle = (article) => {
    debugger
    return{
        type: actionTypes.EDIT_ARTICLE,
        payload: article.title
    }
}

// export const editedArticle = (article) => {
//     debugger
//     return{
//         type:actionTypes.EDITED_ARTICLE,
//         payload: article
//     }
// }