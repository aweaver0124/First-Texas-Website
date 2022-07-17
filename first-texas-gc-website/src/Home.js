import home_page_picture_1 from "./images_ft/home_page_picture_1.jpg";
import weaver_home from "./images_ft/weaver_home.jpg";
import hurst_home from "./images_ft/hurst_home.jpg";
import faith_assembly_roof from "./images_ft/faith_assembly_roof.JPG";
import zimmerman_home from "./images_ft/zimmerman_home.JPG"
import barner_home from "./images_ft/barner_home.JPG"
import in_progress_roof from "./images_ft/in_progress_roof.JPG";
import { NavLink } from "react-router-dom";



function Home(){


    return(
        <div id="home">
            <div id="info-banner">
                <p>Family Owned and Operated | BBB A+ Rating | Roofing, Siding, Gutters and More | Focused on Quality</p>
            </div>
            <div id='home-content'>
                <div id="shingles-img"> <img src={home_page_picture_1} alt="shingles" /> </div>
                <div id='home-content-info'>
                    <p className="co-name">First Texas General Contracting</p>
                    <p className="number"><a href="tel: 8179647620" className="white"> 817-964-7620</a></p>
                    <p className="serving">Serving Hood, Tarrant, and surrounding counties<br></br>
                        Located in Granbury, Texas</p>
                    <NavLink to="/contact"><button className="free-inspection">Free Inspection</button></NavLink>
                </div>
                <div>
                    <img id='bbb-logo' src='https://1000logos.net/wp-content/uploads/2017/11/BBB-logo.jpg' alt="bbb logo"></img>
                    <h2>Recent Work</h2>
                    <div id="recent-work-photos">
                        <div className="recent-work-wrapper"><img className="recent-work" src={weaver_home} alt='recent work'></img></div>
                        <div className="recent-work-wrapper"><img className="recent-work" src={hurst_home} alt='recent work'></img></div>
                        <div className="recent-work-wrapper"><img className="recent-work" src={faith_assembly_roof} alt='recent work'></img></div>
                        <div className="recent-work-wrapper"><img className="recent-work" src={zimmerman_home} alt='recent work'></img></div>
                        <div className="recent-work-wrapper"><img className="recent-work" src={barner_home} alt='recent work'></img></div>
                        <div className="recent-work-wrapper"><img className="recent-work" src={in_progress_roof} alt='recent work'></img></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;