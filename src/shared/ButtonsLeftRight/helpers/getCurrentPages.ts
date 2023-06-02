export default function getCurrentPages(pageIndex: number) {
    let result = (pageIndex * 2 + 1) + '-' + (pageIndex * 2 + 2);
    return result;
}