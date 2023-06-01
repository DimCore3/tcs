import { useState } from 'react';
import classes from './index.module.scss';
import Photos from 'entities/Photos';
import { ButtonsLeftRight } from 'shared';
import { ContentPhotoAlbum } from './model';

const PhotoAlbum = ({ content }: ContentPhotoAlbum) => {
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <div className={classes.photo_album_background}>
            <Photos images={content[pageIndex]} />
            <ButtonsLeftRight pageIndex={pageIndex} setPageIndex={setPageIndex} lastPage={content.length - 1} />
        </div>
    );
}

export default PhotoAlbum;