import { useState } from "react";
import classes from './index.module.scss';
import { FullscreenButton, NavPanel } from "shared";
import Gallery from "entities/Gallery";
import { Props } from './model';

const PhotoHandler = ({ isHidePhotoAlbum, setisHidePhotoAlbum, contentPhotoAlbum, setContentPhotoAlbum }: Props) => {
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
                <FullscreenButton action={() => setisHidePhotoAlbum(!isHidePhotoAlbum)} />
                {panelNames[indexOpenedPanel] === 'Галерея'
                    && <Gallery contentPhotoAlbum={contentPhotoAlbum} setContentPhotoAlbum={setContentPhotoAlbum}/>
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