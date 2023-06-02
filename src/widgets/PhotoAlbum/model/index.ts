type Image = {
    src: string,
    alt?: string,
}

export type ContentPhotoAlbum = {
    contentPhotoAlbum: Image[][],
    setContentPhotoAlbum: Function
    pageIndex:number,
    setPageIndex: Function,
};