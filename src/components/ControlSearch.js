import React, {useEffect, useState} from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function ControlSearch({searchText,onChangleSearchText}) {
  let [text, setText] = useState('');
  
  useEffect(() => {
    setText(searchText);
  }, [searchText])

  function handleChangeText(e){
    
      onChangleSearchText(e.target.value);
  }
  function handleChangeClear(){
    onChangleSearchText('');
  }
  return (
    <>
      <Col xs={12}>
        <InputGroup>
          <FormControl
            className="form-control"
            placeholder="Search for..."
            value={text}
            onChange={handleChangeText}
          />
          <InputGroup.Append>
            <Button className="btn btn-info" onClick={ () => handleChangeClear()}>Clear!</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </>
  );
}
