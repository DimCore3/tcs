type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    images: Image[],
    moveDirection: 'move_left' | 'move_right' | '',
}