import React from "react";

class HeaderClass extends React.Component {
    render(){
        return (
            <>
                <div className="page-header">
                    <h1>
                    Project 01 - ToDo List <small>ReactJs</small>
                    </h1>
                    <hr className="my-4" />
                </div>
            </>
        );
    }
  
}
export default HeaderClass;