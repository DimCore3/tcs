import { useState } from 'react';
import classes from './index.module.scss';
import Photos from 'entities/Photos';
import { ButtonsLeftRight } from 'shared';
import { ContentPhotoAlbum } from './model';

const PhotoAlbum = ({ content }: ContentPhotoAlbum) => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [moveDirection, setMoveDirection] = useState<'move_left' | 'move_right' | ''>('')

    function switchPage(index: number, direction: 'move_left' | 'move_right') {
        const lastPage = content.length - 1;
        setMoveDirection(direction);

        setTimeout(() => {
            setMoveDirection('');

            if (index < 0) {
                setPageIndex(lastPage);
                return;
            };
            if (index > lastPage) {
                setPageIndex(0);
                return;
            };
            setPageIndex(index);
        }, 1000);
    }

    return (
        <div className={classes.photo_album_background}>
            <Photos images={content[pageIndex]} moveDirection={moveDirection} />
            <ButtonsLeftRight isDisabled={moveDirection !== ''} pageIndex={pageIndex} switchPage={switchPage} />
        </div>
    );
}

export default PhotoAlbum;