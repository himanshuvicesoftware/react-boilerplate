import axios from "axios";
import { connect } from 'react-redux';
import * as selectors from './../displayTable/displayTable.selectors';
import React, { Component } from 'react';
import { addData } from '../displayTable/displayTable.actions';
import Display from './display' 

const mapDispatchToProps = {
    addData,
}

const mapStateToProps = (state) => ({
    data: selectors.dataDisplay(state),
});

class DisplayContainer extends Component {
    componentDidMount(){
        debugger
        axios.get("http://dummy.restapiexample.com/api/v1/employees").then(res => this.props.addData(res.data))
    }

    handleData = () => {
        const {addData} = this.props;
        debugger
        addData({
            // id: this.state.data.id,
            // employee_name : this.state.data.employee_name,
            // employee_salary : this.state.data.employee_salary,
            // employee_age : this.state.data.employee_age
        })
    }

    render() {
        console.log(this.props.data)
        return (
            <Display addData={this.handleData} data={this.props.data} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);