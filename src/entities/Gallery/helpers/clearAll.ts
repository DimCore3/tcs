import { Image } from '../model';

export default function clearAll(contentPhotoAlbum: Image[][], setContentPhotoAlbum: Function) {
    let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
    result.forEach((album: Image[]) => {
        album.forEach((photo: Image) => {
            photo.src = '';
            photo.alt = '';
        });
    });
    setContentPhotoAlbum(result);
}