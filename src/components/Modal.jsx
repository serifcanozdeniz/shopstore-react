const Modal = ({ children, close }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-2">
          {/* kapatma butonu */}

          <div className="d-flex justify-content-end">
            <button onClick={close}>X</button>
          </div>

          {/* ana içerik */}
          <div>{children}</div>

          {/* butonlar */}
          <div className="d-flex justify-content-end gap-3 mt-5">
            <button onClick={close} className="btn btn-danger">
              İptal
            </button>
            <button className="btn btn-success">Onayla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
