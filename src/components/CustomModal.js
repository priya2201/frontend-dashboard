import React from "react";
import { Modal } from "antd";
export const CustomModal = (props) => {
  const { title, open, hideModal, performAction } = props;
  return (
    <Modal
      title="Confirmation"
      open={open}
      okText="Ok"
      cancelText="cancel"
      onOk={performAction}
      oncancel={hideModal}
    >
      <p>{title}</p>
    </Modal>
  );
};

export default CustomModal;
