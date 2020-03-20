import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addArticle } from '../../listDemo/listDemo.actions';
import * as selectors from '../../listDemo/listDemo.selectors';
import Form from './form';
// import { bindActionCreators } from 'redux';

// const mapStateToProps = state => ({
//     articles: selectors.getsavedArticle(state)
// });

const mapDispatchToProps = {
    addArticle,
}

const mapStateToProps = state => ( {
    selectedItem: selectors.setSelectedItem(state)
})

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
            value: ""
        });
    }

    // handleEditedArticle = (selectedItem) => {
    //     this.setState({
    //         value: this.state.selectedItem
    //     })
    // }

    componentDWillUpdate(prevState){
        
        
            this.setState({
                value: this.state.selectedItem
            })
        
    }

    handleValueChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <Form addArticle={this.handleAddArticle} value={this.state.value} valueChange={this.handleValueChange} editedArticle={this.handleEditedArticle}/>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);