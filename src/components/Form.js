import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index'

const mapDispatchToProps = {
    addArticle
}

class ConnectedForm extends React.Component {

    counter = 0;

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addArticle({
            id: ++this.counter,
            title: this.state.value
        });
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Article's name"
                    onChange={this.handleValueChange}
                />
                <input
                    type="submit"
                    value="Add article"
                />
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;