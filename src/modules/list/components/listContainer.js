import { connect } from 'react-redux';
import * as selectors from '../../listDemo/listDemo.selectors';
import { removeArticle } from '../../listDemo/listDemo.actions';
import List from './list';
import React, { Component } from 'react';

const mapStateToProps = state => ({
    articles: selectors.getArticles(state)
});

const mapDispatchToProps = {
    removeArticle
}

class ListContainer extends Component {

    handleRemoveArticle = id => {
        const { removeArticle } = this.props;
        removeArticle(id);
    }

    render() {
        const { articles } = this.props;
        return (
            <List articles={articles} removeArticle={this.handleRemoveArticle} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);