import { useState } from 'react';
import classes from './index.module.scss';
import Photos from 'entities/Photos';
import { ButtonsLeftRight } from 'shared';
import { ContentPhotoAlbum } from './model';

const PhotoAlbum = ({ contentPhotoAlbum, setContentPhotoAlbum }: ContentPhotoAlbum) => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [moveDirection, setMoveDirection] = useState<'move_left' | 'move_right' | ''>('')

    return (
        <div className={classes.photo_album_background}>
            <Photos 
                moveDirection={moveDirection}
                pageIndex={pageIndex} 
                contentPhotoAlbum={contentPhotoAlbum} 
                setContentPhotoAlbum={setContentPhotoAlbum}
            />
            <ButtonsLeftRight 
                isDisabled={moveDirection !== ''} 
                pageIndex={pageIndex} 
                content={contentPhotoAlbum} 
                setMoveDirection={setMoveDirection}  
                setPageIndex={setPageIndex}
            />
        </div>
    );
}

export default PhotoAlbum;