import { PhotoAlbum, PhotoHandler } from "widgets";
import { ContentPhotoAlbum } from './model';
import { useEffect, useState } from "react";
import { checkAndFillEmptyPhotos } from "./helpers";

const Main = () => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [isHidePhotoAlbum, setisHidePhotoAlbum] = useState(false);
    const [contentPhotoAlbum, setContentPhotoAlbum] = useState<ContentPhotoAlbum>([[],[],[],[]]);

    useEffect(() => {
        checkAndFillEmptyPhotos(contentPhotoAlbum, setContentPhotoAlbum);
    }, [contentPhotoAlbum])

    return (
        <main>
            {!isHidePhotoAlbum &&
                <PhotoAlbum
                    contentPhotoAlbum={contentPhotoAlbum}
                    setContentPhotoAlbum={setContentPhotoAlbum}
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                />
            }
            <PhotoHandler
                isHidePhotoAlbum={isHidePhotoAlbum}
                setisHidePhotoAlbum={setisHidePhotoAlbum}
                contentPhotoAlbum={contentPhotoAlbum}
                setContentPhotoAlbum={setContentPhotoAlbum}
                pageIndex={pageIndex}
            />
        </main>
    );
}

export default Main;