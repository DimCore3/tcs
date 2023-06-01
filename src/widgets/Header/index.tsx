import { PutInBasket } from 'features';
import classes from './index.module.scss';

const Header = () => {

    return (
        <header>
            <div className={classes.left_side}>
                <h1>Мой проект</h1>
                <div className={classes.description}>
                    <p>Размер 400x200 мм <br />&#40;В развороте&#41;</p>
                </div>
            </div>
            <div className={classes.right_side}>
                <PutInBasket>В корзину 1180.00 ₽</PutInBasket>
            </div>
        </header>
    );
}

export default Header;