import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ControlSortClass from "./ControlSortClass";
import ControlSearchClass from "./ControlSearchClass";
import ControlAddClass from "./ControlAddClass";

class ControlClass extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
        let {orderBy, orderDir, onSelectSort,onChangeAddNewTask}  = this.props;
        let injectedControl = {
            orderBy, 
            orderDir,
            onSelectSort,
            onChangeAddNewTask,
        }
        return(
            <>
                <Row>
                    <Col xs={12} lg={6}>
                    <Row> 
                        <ControlSortClass {...injectedControl}/>
                        <ControlSearchClass />
                    </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                    <ControlAddClass onChangeAddNewTask={onChangeAddNewTask}/>
                    </Col>
                </Row>
            </>
        )
    }
}
export default ControlClass;