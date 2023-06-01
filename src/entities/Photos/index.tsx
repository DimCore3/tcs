import classes from './index.module.scss';
import { Props } from './model';
import { ZoomInPhoto } from 'shared';

const Photos = ({ images }: Props) => {
    return (
        <div className={classes.photo_container}>
            {images.map((element, index) => (
                <ZoomInPhoto src={element.src} alt={element.alt ?? ''} key={'album_image' + index} />
            ))}
        </div>
    );
}

export default Photos;