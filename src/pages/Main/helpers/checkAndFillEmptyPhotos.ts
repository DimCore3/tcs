import { ContentPhotoAlbum } from '../model'
import fillEmptyPhotos from './fillEmptyPhotos'

type Props = [
    contentPhotoAlbum: ContentPhotoAlbum, 
    setContentPhotoAlbum: Function
]

export default function checkAndFillEmptyPhotos(...[contentPhotoAlbum, setContentPhotoAlbum]: Props) {
    contentPhotoAlbum.forEach((photoPage, index) => {
        if(photoPage.length < 6) {
            fillEmptyPhotos(contentPhotoAlbum, index, setContentPhotoAlbum);
        }
    });
}