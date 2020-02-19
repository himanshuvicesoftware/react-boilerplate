import React from 'react';

const List = ({ articles, removeArticle }) => {
    return (
        <ul>
            <li>Total Articles: {articles.length}</li>
            {
                articles.map(article => {
                    return <li key={article.id}>
                        {article.title}
                        <button onClick={() => {
                            removeArticle(article.id)
                        }}>Remove article</button>
                    </li>
                })
            }
        </ul>
    );
}

export default List;