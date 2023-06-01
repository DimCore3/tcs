import { useState } from "react";
import classes from './index.module.scss';
import Modal from "entities/Modal";

const PutInBasket = ({ children }: { children: string }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    function moveToBasket() {
        alert('Перешли в корзину');
        setIsShowModal(false);
    }

    return (
        <>
            <button onClick={() => setIsShowModal(!isShowModal)}>{children}</button>
            {isShowModal &&
                <Modal setIsShowModal={setIsShowModal}>
                    <div className={classes.modal_content}>
                        <div className={classes.top_panel}>
                            <h1>Продукт успешно добавлен в корзину</h1>
                        </div>
                        <div className={classes.bottom_panel}>
                            <button onClick={moveToBasket}>Перейти в корзину</button>
                        </div>
                    </div>
                </Modal>}
        </>
    );
}

export default PutInBasket;