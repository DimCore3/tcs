import { getCurrentPages, switchPage } from './helpers';
import classes from './index.module.scss';
import { Props } from './model';

const ButtonsLeftRight = ({ pageIndex, isDisabled, content, setMoveDirection, setPageIndex }: Props) => {

    return (
        <div className={classes.buttons}>
            <button
                onClick={() => switchPage(pageIndex - 1, 'move_left', content, setMoveDirection, setPageIndex)}
                className={classes.prev}
                disabled={isDisabled}>
                    <div />
            </button>
            <div className={classes.page_name}>{"Страница " + getCurrentPages(pageIndex)}</div>
            <button
                onClick={() => switchPage(pageIndex + 1, 'move_right', content, setMoveDirection, setPageIndex)}
                className={classes.next}
                disabled={isDisabled}>
                    <div />
            </button>
        </div>
    );
}

export default ButtonsLeftRight;