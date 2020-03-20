import { connect } from 'react-redux';
import * as selectors from '../../listDemo/listDemo.selectors';
import { removeArticle,editArticle } from '../../listDemo/listDemo.actions';
import List from './list';
import React, { Component } from 'react';

const mapStateToProps = (state) => ({
    articles: selectors.getArticles(state),
});

const mapDispatchToProps = {
    removeArticle,
    editArticle
}

class ListContainer extends Component {

    handleRemoveArticle = id => {
        debugger
        const { removeArticle } = this.props;
        removeArticle(id);
    }

    handleEditArticle = (article) =>{
        debugger
        const { editArticle} = this.props;
        
        editArticle(article);
        console.log(article,"sssssssss")
    }

    render() {
        const { articles } = this.props;
        debugger
        return (
            <List articles={articles} removeArticle={this.handleRemoveArticle} editArticle={this.handleEditArticle} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);