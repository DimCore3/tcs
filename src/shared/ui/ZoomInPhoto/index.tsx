import { useState } from "react";
import classes from './index.module.scss';
import Modal from "entities/Modal";
import { Props } from './model';

const ZoomInPhoto = ({ isDeleted, src, alt = '' }: Props) => {
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <div className={isDeleted ? `${classes.zoom_out_photo} ${classes.deleted}` : classes.zoom_out_photo}>
                {!isDeleted &&
                    <img
                        onClick={() => { if (!isDeleted) setIsShowModal(!isShowModal) }}
                        src={src}
                        alt={alt}
                    />
                }

            </div>
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