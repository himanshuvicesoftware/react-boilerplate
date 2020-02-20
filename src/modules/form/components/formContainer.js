import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addArticle } from '../../listDemo/listDemo.actions';
import Form from './form';

const mapDispatchToProps = {
    addArticle
}

class FormContainer extends Component {

    state = {
        value: ''
    }

    counter = 0;

    handleAddArticle = (event) => {
        const { addArticle } = this.props;
        event.preventDefault();
        addArticle({
            title: this.state.value,
            id: ++this.counter
        });
        this.setState({
            value: ''
        });
    }

    handleValueChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    render() {

        return (
            <Form addArticle={this.handleAddArticle} value={this.state.value} valueChange={this.handleValueChange} />
        );
    }

}

export default connect(null, mapDispatchToProps)(FormContainer);