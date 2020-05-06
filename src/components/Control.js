import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ControlSort from "./ControlSort";
import ControlSearch from "./ControlSearch";
import ControlAdd from "./ControlAdd";

export default function Control({onSelectSort, onChangeAddNewTask, onChangleSearchText, searchText, orderBy, orderDir}) {
  let injectedProps = {
    orderBy, 
    orderDir, 
    onSelectSort
  }
 
  return (
    <>
      <Row>
        <Col xs={12} lg={6}>
          <Row>
            <ControlSort {...injectedProps}/>
            <ControlSearch searchText={searchText} onChangleSearchText={onChangleSearchText}/>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <ControlAdd onChangeAddNewTask={onChangeAddNewTask}/>
        </Col>
      </Row>
    </>
  );
}
