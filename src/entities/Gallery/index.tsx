import { clearAll } from './helpers';
import classes from './index.module.scss';
import { Props } from './model';

const Gallery = ({ contentPhotoAlbum, setContentPhotoAlbum }: Props) => {
    return (
        <div className={classes.gallery}>
            <div className={classes.gallery_buttons}>
                <button onClick={() => clearAll(contentPhotoAlbum, setContentPhotoAlbum)}>Очистить</button>
            </div>
            <p>Галерея</p>
        </div>
    );
}

export default Gallery;