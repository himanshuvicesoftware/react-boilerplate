import { connect } from 'react-redux'
import * as selectors from './listDemo/listDemo.selectors'
import React, { Component } from 'react'
import axios from 'axios'
import ApiDisplay from './apiDisplay'
import { apiDataItem } from './listDemo/listDemo.actions'

const mapDispatchToProps = {
  apiDataItem
}

const mapStateToProps = state => ({
  data: selectors.getApiItem(state)
})

class ApiToShow extends Component {
  componentDidMount() {
    debugger
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res)
      this.props.apiDataItem(res.data)
    })
  }

  render() {
    debugger
    const { apiDataItem } = this.props

    return <ApiDisplay data={this.props.data} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiToShow)
