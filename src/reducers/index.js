import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types';

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    else if (action.type === REMOVE_ARTICLE) {
        return {
            ...state,
            articles: state.articles.filter(article => article.id !== action.id)
        };
    }
    return state;
}

export default rootReducer;