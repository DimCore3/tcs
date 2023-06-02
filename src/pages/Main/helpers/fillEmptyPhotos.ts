import { ContentPhotoAlbum } from '../model'
type Props = [
    contentPhotoAlbum: ContentPhotoAlbum,
    index: number,
    setContentPhotoAlbum: Function
]

export default function fillEmptyPhotos(...[contentPhotoAlbum, index, setContentPhotoAlbum]: Props) {
    let result = JSON.parse(JSON.stringify(contentPhotoAlbum));
    while (result[index].length < 6) {
        result[index].push({
            src: '',
            alt: '',
        })
    }
    setContentPhotoAlbum(result);
}