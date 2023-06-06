type Image = {
    src: string,
    alt?: string,
}

export type Props = {
    pageIndex: number,
    content: Image[][],
    isDisabled: boolean
    setMoveDirection: Function,
    setPageIndex: Function,
}

export type SwitchPageType = [
    index: number, 
    direction: 'move_left' | 'move_right', 
    content: Image[][], 
    setMoveDirection: Function, 
    setPageIndex: Function,
]