import { useState } from 'react';
import classes from './index.module.scss';
import { ButtonsLeftRight } from 'shared';
import { Props } from './model';

const PhotoAlbum = ({ children }: Props) => {
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <div className={classes.photo_album_background}>
            <div className={classes.photo_album}>
                {children}
            </div>
            <ButtonsLeftRight pageIndex={pageIndex} setPageIndex={setPageIndex} lastPage={5} />
        </div>
    );
}

export default PhotoAlbum;