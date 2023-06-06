import { Props } from './model';
import classes from './index.module.scss';
import { addPhotoToAlbum, clearAll } from './helpers';
import { AddPhoto } from 'shared';

const Gallery = (props: Props) => {
    function handleDrag(e: React.DragEvent, imgPath: string) {
        e.dataTransfer.setData("imgPath", imgPath);
    }

    return (
        <div className={classes.gallery}>
            <div className={classes.gallery_buttons}>
                <button onClick={() => clearAll(props.contentPhotoAlbum, props.setContentPhotoAlbum)}>Очистить</button>
            </div>
            <div className={classes.gallery_content}>
                <AddPhoto photosForEdit={props.galleryPhotosForEdit} setPhotosForEdit={props.setGalleryPhotosForEdit}>Добавить фото</AddPhoto>
                {props.galleryPhotosForEdit.map((imgPath, index) => (
                    <img
                        onClick={() => addPhotoToAlbum(imgPath, props.contentPhotoAlbum, props.setContentPhotoAlbum, props.pageIndex)}
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