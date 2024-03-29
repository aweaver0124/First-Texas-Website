import GalleryCard from "./GalleryCard";
import gallery_image from "./images_ft/gallery_image.jpg"
import Footer from "./Footer";

function Gallery(){

    const gallery_data = [
            {
                id: 1,
                name: "Adobe Sunset",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_sequoia_armorshield-adobe_sunset.jpg"
            },
            {
                id: 2,
                name: "Appalachian Sky",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/tl-ah-appalachiansky_720.jpg"
            },
            {
                id: 3,
                name: "Autumn Brown",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_sequoia-autumn_brown.jpg"
            },
            {
                id: 4,
                name: "Barkwood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-barkwood.jpg"
            },
            {
                id: 5,
                name: "Birchwood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-birchwood.jpg"
            },
            {
                id: 6,
                name: "Biscayne Blue",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-biscayne_blue.jpg"
            },
            {
                id: 7,
                name: "Black Oak",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_canyon-black_oak.jpg"
            },
            {
                id: 8,
                name: "Castlewood Gray",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/woodland-castlewoodgrey_720.jpg"
            },
            {
                id: 9,
                name: "Cedar",
                image: "https://www.gaf.com/-/media/shingleswatches/1440swatches/grand_sequoia-cedar.jpg"
            },
            {
                id: 10,
                name: "Cedar Falls",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/tl-ah-cedarfalls_720.jpg"
            },
            {
                id: 11,
                name: "Cedarwood Abbey",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/1woodland-cedarwoodabbey_720.jpg"
            },
            {
                id: 12,
                name: "Charcoal",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-charcoal.jpg"
            },
            {
                id: 13,
                name: "Driftwood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-driftwood.jpg"
            },
            {
                id: 14,
                name: "Dusky Gray",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_sequoia_armorshield-dusky_gray.jpg"
            },
            {
                id: 15,
                name: "Fox Hollow Gray",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-fox_hollow_gray.jpg"
            },
            {
                id: 16,
                name: "Golden Harvest",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/tl-ah-goldenharvest_720.jpg"
            },
            {
                id: 17,
                name: "Hickory",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-hickory.jpg"
            },
            {
                id: 18,
                name: "Hunter Green",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-hunter_green.jpg"
            },
            {
                id: 19,
                name: "Mesa Brown",
                image: "https://www.gaf.com/-/media/shingleswatches/1440swatches/grand_sequoia-mesa_brown.jpg"
            },
            {
                id: 20,
                name: "Mission Brown",
                image: "https://www.gaf.com/-/media/shingleswatches/1440swatches/grand_canyon-mission_brown.jpg"
            },
            {
                id: 21,
                name: "Nantucket Morning",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/tl-ah-nantucketmorning_720.jpg"
            },
            {
                id: 22,
                name: "Oyster Gray",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-oyster_gray.jpg"
            },
            {
                id: 23,
                name: "Patriot Red",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-patriot_red.jpg"
            },
            {
                id: 24,
                name: "Pewter Gray",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-pewter_gray.jpg"
            },
            {
                id: 25,
                name: "Shakewood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-shakewood.jpg"
            },
            {
                id: 26,
                name: "Slate",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-slate.jpg"
            },
            {
                id: 27,
                name: "Stonewood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_canyon-stonewood.jpg"
            },
            {
                id: 28,
                name: "Storm Cloud",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/grand_canyon-storm_cloud.jpg"
            },
            {
                id: 29,
                name: "Weathered Wood",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-weathered_wood.jpg"
            },
            {
                id: 30,
                name: "Williamsburg Slate",
                image: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-williamsburg_slate.jpg"
            },
        ]
    

    return(
        <div id="gallery">
            <div id="gallery-banner">
                <div id='gallery-background'> <img id="gallery-header-img" src={gallery_image} alt="home header" width="1518px" height="900px"></img> </div>
                <div id="overlay-gallery-img"> 
                    <h1 id="gallery-h1">Gallery</h1>
                    <h4 id="gallery-h4">Unsure which shingle color you want?<br></br> Browse a few of our samples below to get an idea!</h4> 
                </div>
            </div>
            <div>
                <p id="gallery-disclaimer"> All shingles are subject to availability depending on your area. Ask your consultant to find out.</p>
                <GalleryCard gallery_data={gallery_data}/>
            </div>
            <div>
                <p id="ending-gallery-disclaimer">All samples taken from <a href="https://www.gaf.com/en-us/for-homeowners/gaf-style-guide">GAF My Roof</a> website, our primary vendor. </p>
            </div>

            <Footer />
        </div>
    )
}
export default Gallery;