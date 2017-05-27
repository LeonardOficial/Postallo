import React from "react";

var Modal = ({children}) => {
  return(
    <div className="modal">
      <div className="modal-header">
        <button className="btn btn-default">
          &times;
        </button>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer">
        <button className="btn btn-default" data-dismiss="modal">
          cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;



