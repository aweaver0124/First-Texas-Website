

function GalleryCard({ gallery_data }){

    const renderCard = gallery_data.map(obj => {
        return (
            <div>
                <h3 className="shingle-name">{obj.name}</h3>
                <img className="shingle-img" src={obj.image} alt={obj.name}/>
            </div>
        )
    })

    return (
        <div>
            {renderCard}
        </div>
    )



}

export default GalleryCard;