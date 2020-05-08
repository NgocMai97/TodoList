import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class ControlSearchClass extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      text: '',
    }
    this.handleChangeText = this.handleChangeText.bind(this)
   
  }
  
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.searchText !== this.state.text){
      //Perform some operation
      this.setState({text: nextProps.searchText});
     
    }
   
  }
  
  handleChangeText(e){
   this.props.onChangeSearchText(e.target.value);
 
  }
  handleChangeClear(){
    this.props.onChangeSearchText('');
  }
  render() {
    let {text} = this.state;
    return (
      <>
        <Col xs={12}>
          <InputGroup>
            <FormControl
              className="form-control"
              placeholder="Search for..."
              value={text}
              onChange={this.handleChangeText}
            />
            <InputGroup.Append>
              
              <Button
                className="btn btn-info"
                onClick={() => this.handleChangeClear()}
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
