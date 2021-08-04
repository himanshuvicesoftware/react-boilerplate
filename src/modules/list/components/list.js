import React from 'react';

const List = ({ articles, removeArticle, editArticle }) => {
    return (
        <ul>
            <li>Total Articles: {articles.length}</li>
            { 
                articles.map(article => {
                    return (
                    <>  <ul>
                        <p>{article.title}</p>
                    <li key={article.id}>   
                    

                        <button onClick={() => {
                            debugger
                            removeArticle(article.id)
                        }}>Remove article</button>
                    </li>
                    <li key={article.title}>
                        <button onClick={() => {
                            debugger
                            editArticle(article)
                        }}>Edit Article</button>
                    </li>
                    </ul>
                    </>
                    );    
                })
              
            }
        </ul>
    );
}

export default List;