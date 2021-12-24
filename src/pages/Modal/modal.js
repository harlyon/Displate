import React from "react";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  Title,
  CloseButton,
} from "../style";
import View from "../View/view";

const Modal = ({ currentItem, handleClose }) => {
  return (
    <ModalContainer>
      <ModalBody>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <ModalContent>
          <Title>{currentItem}</Title>
          <View name={currentItem} />
        </ModalContent>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
