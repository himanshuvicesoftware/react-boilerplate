import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = {
    deleteArticle
}

const ConnectedList = (props) => {
    return (
        <ul>
            <li>Total Articles: {props.articles.length}</li>
            {
                props.articles.map(article => {
                    return <li key={article.id}>
                        {article.title}
                        <button onClick={() => {
                            props.deleteArticle(article.id)
                        }}>Remove article</button>
                    </li>
                })
            }
        </ul>
    );
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;