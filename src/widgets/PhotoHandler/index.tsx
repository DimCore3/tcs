import { useState } from "react";
import classes from './index.module.scss';
import { FullscreenButton, NavPanel } from "shared";
import Gallery from "entities/Gallery";
import { Props } from './model';

const PhotoHandler = ({ isHidePhotoAlbum, setisHidePhotoAlbum, contentPhotoAlbum, setContentPhotoAlbum, pageIndex }: Props) => {
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
                    && <Gallery contentPhotoAlbum={contentPhotoAlbum} setContentPhotoAlbum={setContentPhotoAlbum} pageIndex={pageIndex}/>
                }
                {panelNames[indexOpenedPanel] === 'Шаблоны'
                    && <h2>Шаблоны</h2>
                }
                {panelNames[indexOpenedPanel] === 'Фон'
                    && <h2>Фон</h2>
                }
            </div>
        </div>
    );
}

export default PhotoHandler;