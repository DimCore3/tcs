import PhotoAlbum from "entities/PhotoAlbum";

const Main = () => {
    const contentPhotoAlbum = [
        <div>page 1</div>,
        <div>page 2</div>,
        <div>page 3</div>,
    ];

    return (
        <main>
            <PhotoAlbum content={contentPhotoAlbum}/>
        </main>
    );
}

export default Main;