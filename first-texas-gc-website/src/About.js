import shingles_about from "./images_ft/shingles_about.jpg"
import man_and_son from "./images_ft/man-and-son.jpg"
import dad_ft from "./images_ft/dad_ft.jpg"
import tom from "./images_ft/tom.jpg";

function About(){
    return(
        <div id="about-us">
            <div id="about-banner">
                <div id="about_background"><img id="about-us-header-img" src={shingles_about} alt="shingles header" width="1522px" height="325px"></img></div>
                <div id="overlay-about-img"><h1>ABOUT US</h1></div>
            </div>
            <div id="about-main-content">
                <img id="company-pic" src={man_and_son} alt="dad and tom" height="350px" width="490px"></img>
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
                <div className="team-member-wrapper">
                    <div className="individual-team-member">
                        <img className="team-member" src={dad_ft} alt="owner"></img>
                        <h2>Douglas Weaver</h2>
                        <p>Douglas Weaver is the owner and operator of all business affairs for First Texas. He began roofing in 1978 serving various different companies. His experience includes, roof installation, framing, stone masonry, 
                            and general handywork and construction. In 1996, Douglas founded his own general construction company, First Texas General Contracting. The business has continued to grow and prosper since. In 2005, Douglas became 
                            an insurance adjuster alongside his roofing company, and with hard work and integrity became RJMW claim service’s adjuster of the year in 2011. He is thoroughly familiar with all aspects of the insurance claims 
                            industry and will ensure customers receive the most amicable settlement for storm-related damages.</p>
                    </div>
                    <div id="thomas" className="individual-team-member">
                        <img className="team-member" src={tom} alt="manager"></img>
                        <h2>Thomas Weaver</h2>
                        <p>Thomas Weaver is the sales manager for First Texas serving under his father, Douglas Weaver. Thomas has a background in general construction working as a framer and roofer in 2018, as well as a finance degree 
                            from Texas State University. He has been a key individual at First Texas bringing in over half of all roof sales and providing excellent customer service. Thomas also works as an independent insurance adjuster 
                            possessing knowledge of the insurance claims industry and will ensure the best settlement for clients of First Texas General Contracting.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;