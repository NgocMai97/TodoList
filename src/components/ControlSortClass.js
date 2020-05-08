import React from "react";

import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { Sort } from "../constants";

export default class ControlSortClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sort: Sort,
    };
    this.onSelectDropdown = this.onSelectDropdown.bind(this)
   
  }
 
  onSelectDropdown = (key) =>{
    let [orderBy, orderDir] = key.split("-");
    this.props.onSelectSort(orderBy, orderDir);
    
  }
  render() {
    let { orderBy, orderDir } = this.props;
    
    return (
      <>
        <Col xs={12} lg={6}>
          <div className="form-group">
            <Dropdown onSelect={this.onSelectDropdown}>
              <Dropdown.Toggle
                className="btn btn-secondary dropdown-toggle"
                id="dropdownMenuButton"
              >
                Sort by
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="dropdownMenuButton" id="sortBy">
                {Sort.map((o, index) => {
                  return (
                    <Dropdown.Item
                      key={o.key}
                      eventKey={o.key}
                      active={`${orderBy}-${orderDir}` === o.key}
                    >
                      {o.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
              <Badge variant="success medium" className="badge-medium">
                {orderBy} {orderDir}
              </Badge>
            </Dropdown>
          </div>
        </Col>
      </>
    );
  }
}
