import React, { Component} from "react";
import "./modal.css";
class ModalClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  _onCancel = () => {
    this.props.onCancel();
  };

  componentDidMount() {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 27 && this.props.isVisible) {
        this._onCancel();
      }
    });
  }
  render() {
    let { isVisible } = this.props;
    let { _onCancel } = this;

    return (
      <>
        <div className={`tcl-modal-wrapper ${isVisible ? "show" : ""}`}>
          <div className="tcl-mask" onClick={_onCancel}></div>
          <div className="modal-content">
            <div className="tcl-modal-header">
              title
              <ion-icon name="close-outline" onClick={_onCancel}></ion-icon>
            </div>

            <div className="tcl-modal-body">body</div>
            <div className="tcl-modal-footer">footer</div>
          </div>
        </div>
      </>
    );
  }
}
export default ModalClass;
