import { DeletePhotoType } from '../model';

export default function deletePhoto([pageIndex, photoIndex, contentPhotoAlbum, setContentPhotoAlbum]: DeletePhotoType) {
    let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
    result[pageIndex][photoIndex].src = '';
    result[pageIndex][photoIndex].alt = '';
    setContentPhotoAlbum(result);
}
