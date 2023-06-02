import { PhotoAlbum, PhotoHandler } from "widgets";
import { ContentPhotoAlbum } from './model';
import { useEffect, useState } from "react";
import { checkAndFillEmptyPhotos } from "./helpers";

const Main = () => {
    const [isHidePhotoAlbum, setisHidePhotoAlbum] = useState(false);
    const [contentPhotoAlbum, setContentPhotoAlbum] = useState<ContentPhotoAlbum>([
        [
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
            },
            {
                src: "https://www.safetechhardware.com/files/articles_img/38/test-key-0.png",
            },
            {
                src: '',
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
            },
            {
                src: "https://www.safetechhardware.com/files/articles_img/38/test-key-0.png",
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
            }
        ],
        [
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
            }
        ]
    ]);

    useEffect(() => {
        checkAndFillEmptyPhotos(contentPhotoAlbum, setContentPhotoAlbum);
    }, [contentPhotoAlbum])

    return (
        <main>
            {!isHidePhotoAlbum &&
                <PhotoAlbum 
                    contentPhotoAlbum={contentPhotoAlbum} 
                    setContentPhotoAlbum={setContentPhotoAlbum} 
                />
            }
            <PhotoHandler 
                isHidePhotoAlbum={isHidePhotoAlbum} 
                setisHidePhotoAlbum={setisHidePhotoAlbum}
                contentPhotoAlbum={contentPhotoAlbum} 
                setContentPhotoAlbum={setContentPhotoAlbum}    
            />
        </main>
    );
}

export default Main;