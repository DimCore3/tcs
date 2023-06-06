export default function addPhotoToHandler(event: React.ChangeEvent<HTMLInputElement>, photosForEdit: string[], setPhotosForEdit: Function) {
    let result: string[] = JSON.parse(JSON.stringify(photosForEdit));
    let reader = new FileReader()
    const { files } = event.target;
    const selectedFiles = files as FileList;
    if (selectedFiles?.[0]) {
        reader.readAsDataURL(selectedFiles?.[0])
        reader.onload = function () {
            result.push(reader.result as string);
            setPhotosForEdit(result);
        };
    }
}