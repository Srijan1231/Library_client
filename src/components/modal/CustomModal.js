import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { setModalShow } from "../../system/systemSlice";

export function CustomModal({ children, modalTitle }) {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.system);

  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(setModalShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
