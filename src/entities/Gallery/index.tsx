import { useState } from 'react';
import { addPhotoToAlbum, addPhotoToHandler, clearAll } from './helpers';
import classes from './index.module.scss';
import { Props } from './model';

const Gallery = ({ contentPhotoAlbum, setContentPhotoAlbum, pageIndex }: Props) => {
    const [photosForEdit, setPhotosForEdit] = useState<string[]>([]);

    function handleDrag(e: React.DragEvent, imgPath: string) {
        e.dataTransfer.setData("imgPath", imgPath);
    }

    return (
        <div className={classes.gallery}>
            <div className={classes.gallery_buttons}>
                <button onClick={() => clearAll(contentPhotoAlbum, setContentPhotoAlbum)}>Очистить</button>
            </div>
            <div className={classes.gallery_content}>
                <div className={classes.add_photo}>
                    <input
                        name=""
                        id=""
                        type="file"
                        accept='image/*,.png,.jpg'
                        onChange={(e) => addPhotoToHandler(e, photosForEdit, setPhotosForEdit)}
                    />
                    <p>Добавить фотографию</p>
                </div>
                {photosForEdit.map((imgPath, index) => (
                    <img
                        onClick={() => addPhotoToAlbum(imgPath, contentPhotoAlbum, setContentPhotoAlbum, pageIndex)}
                        src={imgPath ?? ''}
                        alt=""
                        key={index}
                        draggable
                        onDragStart={(e) => handleDrag(e, imgPath)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;