import classes from './index.module.scss';

const FullscreenButton = ({action} : {action: React.MouseEventHandler<HTMLDivElement>}) => {
    return (
        <div
            onClick={action}
            className={classes.full_size_button}>
                <img src={require('./assets/fullscreen.svg').default} alt="" />
            Развернуть
        </div>
    );
}

export default FullscreenButton;