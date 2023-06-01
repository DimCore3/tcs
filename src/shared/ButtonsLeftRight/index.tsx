import classes from './index.module.scss';
import { Props } from './model';

const ButtonsLeftRight = ({ pageIndex, setPageIndex, lastPage }: Props) => {
    function switchPage(index: number) {
        if (index < 0) {
            setPageIndex(lastPage);
            return;
        };
        if (index > lastPage) {
            setPageIndex(0);
            return;
        };
        setPageIndex(index);
    }

    function getCurrentPages() {
        let result = (pageIndex * 2 + 1) + '-' + (pageIndex * 2 + 2);
        return result;
    }

    return (
        <div className={classes.buttons}>
            <button className={classes.prev} onClick={() => switchPage(pageIndex - 1)}><div /></button>
            <div className={classes.page_name}>{"Страница " + getCurrentPages()}</div>
            <button className={classes.next} onClick={() => switchPage(pageIndex + 1)}><div /></button>
        </div>
    );
}

export default ButtonsLeftRight;