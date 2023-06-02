type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    contentPhotoAlbum:Image[][],
    moveDirection: 'move_left' | 'move_right' | '',
    pageIndex: number,
    setContentPhotoAlbum: Function,
}