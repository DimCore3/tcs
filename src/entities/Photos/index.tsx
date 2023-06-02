import './styles/animation.scss';
import classes from './styles/index.module.scss';
import { Props } from './model';
import { ZoomInPhoto } from 'shared';

const Photos = ({ contentPhotoAlbum, moveDirection, pageIndex, setContentPhotoAlbum }: Props) => {

    function deletePhoto(photoIndex: number) {
        let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
        result[pageIndex][photoIndex].src = '';
        result[pageIndex][photoIndex].alt = '';
        setContentPhotoAlbum(result);
    }

    return (
        <div className={classes.photo_container + ' ' + moveDirection}>
            {contentPhotoAlbum[pageIndex].map((photo, photoIndex) => (
                <div className={classes.photo_with_delete_icon} key={'photo_' + photoIndex}>
                    <ZoomInPhoto
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        key={'album_image_' + photoIndex}
                        isDeleted={contentPhotoAlbum[pageIndex][photoIndex].src === ''}
                    />
                    {contentPhotoAlbum[pageIndex][photoIndex].src !== '' &&
                        <div
                            onClick={() => deletePhoto(photoIndex)}
                            className={classes.delete_photo}
                            key={'album_image_delete_' + photoIndex}
                        />
                    }
                </div>
            ))}
        </div>
    );
}

export default Photos;