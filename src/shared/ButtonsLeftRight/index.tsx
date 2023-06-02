import classes from './index.module.scss';
import { Props } from './model';

const ButtonsLeftRight = ({ pageIndex, switchPage, isDisabled }: Props) => {


    function getCurrentPages() {
        let result = (pageIndex * 2 + 1) + '-' + (pageIndex * 2 + 2);
        return result;
    }

    return (
        <div className={classes.buttons}>
            <button className={classes.prev} onClick={() => switchPage(pageIndex - 1, 'move_left')} disabled={isDisabled}><div /></button>
            <div className={classes.page_name}>{"Страница " + getCurrentPages()}</div>
            <button className={classes.next} onClick={() => switchPage(pageIndex + 1, 'move_right')} disabled={isDisabled}><div /></button>
        </div>
    );
}

export default ButtonsLeftRight;