import classes from './index.module.scss';
import { Props } from './model';

const Modal = ({ setIsShowModal, children }: Props) => {

    return (
        <div className={classes.background_modal} onClick={() => setIsShowModal(false)}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;