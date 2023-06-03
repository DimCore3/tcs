import './styles/animation.scss';
import classes from './styles/index.module.scss';
import { Props } from './model';
import { ZoomInPhoto } from 'shared';
import { changePhoto, deletePhoto } from './helpers';

const Photos = ({ contentPhotoAlbum, moveDirection, pageIndex, setContentPhotoAlbum }: Props) => {
    return (
        <div className={classes.photo_container + ' ' + moveDirection}>
            {contentPhotoAlbum[pageIndex].map((photo, photoIndex) => (
                <div
                    onDrop={(e) => {
                        changePhoto([e.dataTransfer.getData("imgPath"), contentPhotoAlbum, pageIndex, photoIndex, setContentPhotoAlbum])
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDragStart={(e) => {
                        e.dataTransfer.setData("imgPath", String(e.currentTarget.children[0].children[0].getAttribute('src')))
                    }}
                    className={classes.photo_with_delete_icon} key={'photo_' + photoIndex}>
                    <ZoomInPhoto
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        key={'album_image_' + photoIndex}
                        isDeleted={contentPhotoAlbum[pageIndex][photoIndex].src === ''}
                    />
                    {contentPhotoAlbum[pageIndex][photoIndex].src !== '' &&
                        <div
                            onClick={() => deletePhoto([pageIndex, photoIndex, contentPhotoAlbum, setContentPhotoAlbum])}
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