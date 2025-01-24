import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function handleClose() {
    setOpenModal(false);
  }
  return (
    <div>
      {openModal ? null : (
        <button type="button" onClick={handleOpenModal}>
          Open modal
        </button>
      )}
      {openModal ? (
        <Modal
          header={<h1>Header Custom</h1>}
          body={<p>Body Custom</p>}
          onCloce={handleClose}
          footer={<p>Footer Custom</p>}
        />
      ) : null}
    </div>
  );
}
