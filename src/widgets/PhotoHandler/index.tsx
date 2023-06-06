import { useState } from "react";
import classes from './index.module.scss';
import { FullscreenButton, NavPanel } from "shared";
import Gallery from "entities/Gallery";
import Templates from "entities/Templates";
import Background from "entities/Background";
import { Props } from './model';

const PhotoHandler = ({ isHidePhotoAlbum, setisHidePhotoAlbum, contentPhotoAlbum, setContentPhotoAlbum, pageIndex }: Props) => {
    const [indexOpenedPanel, setIndexOpenedPanel] = useState<number>(0);
    const [galleryPhotosForEdit, setGalleryPhotosForEdit] = useState<string[]>([]);
    const [backgroundPhotosForEdit, setBackgroundPhotosForEdit] = useState<string[]>([]);
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
                    && <Gallery
                        galleryPhotosForEdit={galleryPhotosForEdit}
                        setGalleryPhotosForEdit={setGalleryPhotosForEdit}
                        contentPhotoAlbum={contentPhotoAlbum}
                        setContentPhotoAlbum={setContentPhotoAlbum}
                        pageIndex={pageIndex}
                    />
                }
                {panelNames[indexOpenedPanel] === 'Шаблоны'
                    && <Templates />
                }
                {panelNames[indexOpenedPanel] === 'Фон'
                    && <Background backgroundPhotosForEdit={backgroundPhotosForEdit} setBackgroundPhotosForEdit={setBackgroundPhotosForEdit} />
                }
            </div>
        </div>
    );
}

export default PhotoHandler;