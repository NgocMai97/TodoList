import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class ControlSearch extends React.Component {
  
  render() {
    return (
      <>
        <Col xs={12}>
          <InputGroup>
            <FormControl
              className="form-control"
              placeholder="Search for..."
              //value={text}
              // onChange={handleChangeText}
            />
            <InputGroup.Append>
              
              <Button
                className="btn btn-info"
                //onClick={() => handleChangeClear()}
              >
                Clear!
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </>
    );
  }
}
