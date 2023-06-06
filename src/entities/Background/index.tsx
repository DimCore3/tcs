import classes from './index.module.scss';
import { AddPhoto } from 'shared';
import { Props } from './model';

const Background = (props: Props) => {
    return (
        <div className={classes.background_content}>
            <AddPhoto photosForEdit={props.backgroundPhotosForEdit} setPhotosForEdit={props.setBackgroundPhotosForEdit}>Добавить фон для альбома</AddPhoto>
            {props.backgroundPhotosForEdit.map((imgPath, index) => (
                <img
                    // onClick={() => addPhotoToAlbum(imgPath, contentPhotoAlbum, setContentPhotoAlbum, pageIndex)}
                    src={imgPath ?? ''}
                    alt=""
                    key={index}
                    draggable
                // onDragStart={(e) => handleDrag(e, imgPath)}
                />
            ))}
        </div>
    );
}

export default Background;
