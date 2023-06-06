import classes from './index.module.scss';
import { addPhotoToHandler } from 'shared';
import { Props } from './model'

const AddPhoto = ({ photosForEdit, setPhotosForEdit, children }: Props) => {
    return (
        <div className={classes.add_photo}>
            <input
                name=""
                id=""
                type="file"
                accept='image/*,.png,.jpg'
                onChange={(e) => addPhotoToHandler(e, photosForEdit, setPhotosForEdit)}
            />
            <p>{children}</p>
        </div>
    );
}

export default AddPhoto;