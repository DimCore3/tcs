import classes from './index.module.scss';
import { Props } from './model';

const NavPanel = ({ indexOpenedPanel, setIndexOpenedPanel, panelNames }: Props) => {
    return (
        <div className={classes.nav_panels}>
            {panelNames.map((e, index) => (
                <button 
                    className={indexOpenedPanel === index ? classes.nav_clicked : ''}
                    onClick={() => setIndexOpenedPanel(index)}
                    key={'nav_button_' + index
                }>{e}</button>
            ))}
        </div>
    );
}

export default NavPanel;