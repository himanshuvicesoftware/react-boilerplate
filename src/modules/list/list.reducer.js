import * as actionTypes from './list.actionTypes';

const initialState = {
    articles: [
        { title: "Some Title", id: 3 }
    ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        case actionTypes.REMOVE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;

