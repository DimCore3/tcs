export type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    contentPhotoAlbum: Image[][];
    setContentPhotoAlbum: Function,
    pageIndex: number,
}