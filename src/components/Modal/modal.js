import React, { useEffect, useCallback, useState } from "react";
import "./modal.css";
import Button from "../Button/button";
function Modal({ title, children,isLoading, onCancel, isVisible,taskDelete, handleTaskDelete }) {
 
  useEffect(() => {
    if (isVisible) {
      document.querySelector("body").classList.add("tcl-open-modal");
    } else {
      document.querySelector("body").classList.remove("tcl-open-modal");
    }
  }, [isVisible]);

  const _onCancel = useCallback(() => {
    if (onCancel && typeof onCancel === "function") {
      onCancel();
    }
  }, [onCancel]);
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 27 && isVisible) {
        _onCancel();
      }
    });
  }, [_onCancel,isVisible]);
  return (
    <div className={`tcl-modal-wrapper ${isVisible ? "show" : ""} `}>
      {/* template string CS6 */}
      <div className="tcl-mask" onClick={_onCancel}></div>
      <div className="modal-content">
        
          <div className="tcl-modal-header">
            {title}
            <ion-icon name="close-outline" onClick={_onCancel}>X</ion-icon>
          </div>
        

        <div className="tcl-modal-body">{children}</div>
        <div className="tcl-modal-footer">
          <div>
            <button onClick={_onCancel}>Quay lại</button>
            <button onClick={() => handleTaskDelete(taskDelete)}>Lưu</button>
            <Button 
              loading={isLoading}
              className={'buttonLoading'}
              onClick={
                () => handleTaskDelete(taskDelete)
              }
            >
              Cancel
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
