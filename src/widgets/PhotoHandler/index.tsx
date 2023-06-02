import { useState } from "react";
import classes from './index.module.scss';
import { NavPanel } from "shared";

const PhotoHandler = () => {
    const [indexOpenedPanel, setIndexOpenedPanel] = useState<number>(0);
    const panelNames: string[] = [
        'Галерея',
        'Шаблоны',
        'Фон'
    ]

    return (
        <div>
            <NavPanel
                indexOpenedPanel={indexOpenedPanel}
                setIndexOpenedPanel={setIndexOpenedPanel}
                panelNames={panelNames}
            />
            <div className={classes.handler_panel}>
                {panelNames[indexOpenedPanel] === 'Галерея'
                    && <p>Галерея</p>
                }
                {panelNames[indexOpenedPanel] === 'Шаблоны'
                    && <p>Шаблоны</p>
                }
                {panelNames[indexOpenedPanel] === 'Фон'
                    && <p>Фон</p>
                }
            </div>
        </div>
    );
}

export default PhotoHandler;