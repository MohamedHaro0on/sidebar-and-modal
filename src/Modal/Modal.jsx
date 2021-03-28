import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';

import "./Modal.css";
const Modal = () => {
    const [isOpened, setOpened] = useState(false);

    const toggleModal = () => {
        setOpened(prevState => !prevState);
    }
    
    if (isOpened) {
        return (
            <>
                <div className="Layout" onClick={toggleModal} />
                <div className="Modal">
                    <header>
                        <button onClick={toggleModal} aria-label = "close Modal">  <FaTimes />   </button>
                    </header>
                    <main>
                        <h3> Modal Content !! </h3>
                    </main>
                </div>
            </>
        )
    }
    else {
        return (
            <button onClick={toggleModal} className="ModalBtn" aria-label = "Open Modal"> Show Modal </button>
        )
    }
}
export default Modal;