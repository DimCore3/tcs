import './styles/animation.scss';
import classes from './styles/index.module.scss';
import { Props } from './model';
import { ZoomInPhoto } from 'shared';

const Photos = ({ images, moveDirection }: Props) => {
    return (
        <div className={classes.photo_container + ' ' + moveDirection}>
            {images.map((element, index) => (
                <ZoomInPhoto src={element.src} alt={element.alt ?? ''} key={'album_image' + index} />
            ))}
        </div>
    );
}

export default Photos;