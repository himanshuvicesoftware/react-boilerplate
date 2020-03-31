import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as selectors from '../APIDISPLAY/editFormSelector'
import EditForm from "../APIDISPLAY/Editform";

const mapStateToProps = state => ({
  
formData: selectors.getForm(state)

})

class EditSubmitButton extends Component {
  submit = values => {
    
    window.alert(`Submitted Data:\n\n${JSON.stringify(values, null, 2)}`);
    
      debugger
      axios.post('https://8d381935.ngrok.io/api/Student').then(res => {
        console.log(res)
        debugger
      
      })
    
    


  };
  render() {
    return <EditForm onSubmit={this.submit} />;
  }
}
export default connect(mapStateToProps)(EditSubmitButton)

