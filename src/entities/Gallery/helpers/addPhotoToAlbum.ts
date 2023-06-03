import { Image } from '../model';

export default function addPhotoToAlbum(imgPath: string, contentPhotoAlbum: Image[][], setContentPhotoAlbum: Function, pageIndex: number) {
    let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
    for (let imageIndex in result[pageIndex]) {
        if (result[pageIndex][imageIndex].src === '') {
            result[pageIndex][imageIndex].src = imgPath;
            setContentPhotoAlbum(result);
            return
        }
    }
}