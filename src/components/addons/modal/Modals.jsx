import React,{useEffect, useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Modals = ({open,onCloseModal,children} ) => {

    // const [open, setOpen] = useState(false);
    // const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        {children}
      </Modal>
    </div>
  );
}

export default Modals