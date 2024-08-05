import { Modal } from "antd";
import styles from './ModalShareNow.module.css';

interface ModalShareNowProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalShareNow({ selectedModal, closeSelectedModal }: ModalShareNowProps) {
    return (
        <Modal
            title="ModalShareNow"
            open={selectedModal === 'shareNow'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalShareNow} ModalShare`}
        >
        </Modal>
    );
}

export default ModalShareNow;