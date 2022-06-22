import shingles_about from "./images_ft/shingles_about.jpg"
import man_and_son from "./images_ft/man_and_son.jpg"
import dad_in_kilt from "./images_ft/dad_in_kilt.jpg"
import tom from "./images_ft/tom.jpg";

function About(){
    return(
        <div id="about-us">
            <div id="about-banner">
                <div id="about_background"><img id="about-us-header-img" src={shingles_about} alt="shingles header" width="1536px" height="325px"></img></div>
                <div id="overlay-about-img"><h1>ABOUT US</h1></div>
            </div>
            <div id="about-main-content">
                <img id="company-pic" src={man_and_son} alt="dad and tom" height="300px" width="350px"></img>
                <div id="about-paragraphs-wrapper">
                    <p id="main-about-info">First Texas General Contracting is a residential and commercial construction company focused on roofing, 
                    siding, gutters, and more. Based out of Granbury, Texas, we have served, Hood County, Tarrant County, 
                    Dallas County and other surrounding counties for the past 25 years. We pride ourselves on quality workmanship, 
                    professionalism, and customer satisfaction.</p>
                    <p className="light">First Texas has a team of highly experienced roofers on staff that guarantee fine work in a timely matter.</p>
                    <p className="light">With experienced insurance adjusters on staff, First Texas ensures customers receive fair claim settlements. First Texas will serve as your ally in any disputes between a customer and their insurance companies.</p>
                </div>
            </div>
            <div id="our-team">
                <h1 className="team">Our Team</h1>
                <div className="team-member-wrapper">
                    <img className="team-member" src={dad_in_kilt} alt="owner"></img>
                    <img className="team-member" src={tom} alt="manager"></img>
                </div>
            </div>
        </div>
    )
}

export default About;