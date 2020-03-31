import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }
  
  if (!values.phoneNo) {
    errors.phoneNo = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  return errors;
};
const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} />
      {touched && <span className="text-danger">{error}</span>}
    </div>
  </div>
);
const EditForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Container>
      <Row>
        <Col></Col>

        <Col xs={3}>
          <Form border={1} onSubmit={handleSubmit}>
            <div>
              <table>
                <FormGroup>
                                   <tr>
                    
                    <Field
                      component={renderField}
                      label="Name"
                      type="text"
                      name="name"
                    />
                  </tr>
                
                </FormGroup>
                <FormGroup>
                 
                  <tr>
                    <br />
                    <Field
                      component={renderField}
                      label="Address"
                      name="address"
                      type="text"
                    />
                  </tr>
                 
                </FormGroup>
                <FormGroup>
                  
                  <tr>
                    <br />

                    <Field
                      component={renderField}
                      label="phoneNo"
                      name="phoneNo"
                      type="text"
                    />
                  </tr>
                </FormGroup>
                <FormGroup>
                
                  <tr>
                    <br />
                    <Field
                      component={renderField}
                      label="Country"
                      name="country"
                      type="text"
                    />
                  </tr>
                                 </FormGroup>

               
                <div>
                  <tr>
                    <Button variant="primary" type="submit" size="lg">
                      Submit
                    </Button>
                    <Button
                      variant="secondary"
                      type="Button"
                      onClick={reset}
                      size="lg"
                    >
                      Reset
                    </Button>
                  </tr>
                </div>
              </table>
            </div>
          </Form>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "storing",
  validate
})(EditForm);
