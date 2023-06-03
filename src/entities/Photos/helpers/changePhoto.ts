import { ChangePhotoType } from '../model';

export default function changePhoto([imgPath, contentPhotoAlbum, pageIndex, photoIndex, setContentPhotoAlbum]: ChangePhotoType) {
    let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
    result[pageIndex][photoIndex].src = imgPath;
    result[pageIndex][photoIndex].alt = '';
    setContentPhotoAlbum(result);
}