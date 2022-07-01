

function GalleryCard({ gallery_data }){

    const renderCard = gallery_data.map(obj => {
        return (
            <div className="gallery-img-wrapper">
                <h3 className="shingle-name">{obj.name}</h3>
                <img className="shingle-img" src={obj.image} alt={obj.name}/>
            </div>
        )
    })

    return (
        <div id="gallery-content-holder">
            {renderCard}
        </div>
    )



}

export default GalleryCard;