import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Calendar Modal"
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <h1>Hello World</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
        cumque expedita maiores nemo amet quidem consectetur quo aspernatur
        nesciunt harum. Ipsam eum unde corrupti consequatur, perferendis
        officiis accusamus ut eius?
      </p>
    </Modal>
  );
};
