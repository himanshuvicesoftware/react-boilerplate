import { connect } from 'react-redux'
import * as selectors from '../displayDemo/displayDemo.selectors'
import React, { Component } from 'react'
import axios from 'axios'
import ApiDisplay from '../APIDISPLAY/apiDisplay'
import  {apiDataItem} from '../displayDemo/displayDemo.actions'

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
      console.log(res.data,"console")
      debugger
      this.props.apiDataItem(res.data)
    })
  }
  /*
  editApi=id =>{
    const selectedUser = this.props.data.find(each => each.id === id);

    this.setState({
      user_id: selectedUser.id,
      name: selectedUser.name,
      username: selectedUser.username,
    email: selectedUser.email,
    address:selectedUser.address.city
    });

    const user_id = selectedUser.id;
    const user_name = selectedUser.name;
    const user_username = selectedUser.username;
    const user_email = selectedUser.email;
    const user_address=selectedUser.address.city
    const eData = { user_id, user_name,user_username, user_email,user_address };

    this.props.userEdit(eData);
  }
    */
  render() {
    debugger
  console.log(this.props.data,"fdfdf")
    return (<div><ApiDisplay data={this.props.data}
      // editApi={this.editApi}
    />
    </div>
    );
  }
}
    
  
export default connect(mapStateToProps, mapDispatchToProps)(ApiToShow)
