import { useState } from "react";
import classes from './index.module.scss';
import Modal from "entities/Modal";
import { Props } from './model';

const ZoomInPhoto = ({ src, alt = '' }: Props) => {
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <img
                onClick={() => setIsShowModal(!isShowModal)}
                className={classes.zoom_out_photo}
                src={src}
                alt={alt}
            />
            {isShowModal &&
                <Modal setIsShowModal={setIsShowModal}>
                    <img
                        className={classes.zoom_in_photo}
                        src={src}
                        alt={alt}
                    />
                </Modal>}
        </>
    );
}

export default ZoomInPhoto;