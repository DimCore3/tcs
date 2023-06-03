export type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    contentPhotoAlbum: Image[][],
    moveDirection: 'move_left' | 'move_right' | '',
    pageIndex: number,
    setContentPhotoAlbum: Function,
}

export type ChangePhotoType = [
    imgPath: string,
    contentPhotoAlbum: Image[][],
    pageIndex: number,
    photoIndex: number,
    setContentPhotoAlbum: Function
]

export type DeletePhotoType = [
    pageIndex: number,
    photoIndex: number,
    contentPhotoAlbum: Image[][],
    setContentPhotoAlbum: Function,
]