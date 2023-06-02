type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    isHidePhotoAlbum: boolean,
    setisHidePhotoAlbum: Function
    contentPhotoAlbum: Image[][];
    setContentPhotoAlbum: Function,
    pageIndex: number,
}