import { SwitchPageType } from '../model';

export default function switchPage(...[index, direction, content, setMoveDirection, setPageIndex]: SwitchPageType) {
    const lastPage: number = content.length - 1;
    setMoveDirection(direction);

    setTimeout(() => {
        setMoveDirection('');

        if (index < 0) {
            setPageIndex(lastPage);
            return;
        };
        if (index > lastPage) {
            setPageIndex(0);
            return;
        };
        setPageIndex(index);
    }, 1000);
}