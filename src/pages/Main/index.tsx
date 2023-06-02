import { PhotoAlbum, PhotoHandler } from "widgets";
import { ContentPhotoAlbum } from './model';

const Main = () => {
    const contentPhotoAlbum: ContentPhotoAlbum = [
        [
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
                alt: "Image 1"
            },

            {
                src: "https://www.safetechhardware.com/files/articles_img/38/test-key-0.png",
                alt: "Image 2"
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
                alt: "Image 3"
            },
            {
                src: "https://www.safetechhardware.com/files/articles_img/38/test-key-0.png",
                alt: "Image 2"
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
                alt: "Image 3"
            }
        ],
        [
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
                alt: "Image 4"
            },
            {
                src: "https://acniowa.com/wp-content/uploads/2016/03/test-image.png",
                alt: "Image 5"
            }
        ]
    ];

    return (
        <main>
            <PhotoAlbum content={contentPhotoAlbum} />
            <PhotoHandler />
        </main>
    );
}

export default Main;