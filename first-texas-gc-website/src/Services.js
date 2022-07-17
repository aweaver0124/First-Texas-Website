import copper_turrent from "./images_ft/copper_turrent.JPG";
import black_shingles from "./images_ft/black_shingles.jpg"
import black_metal from "./images_ft/black_metal.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Services(){
    return(
        <div id="services">
            <div id="services-header">
                <img id="services-background-img" src={black_shingles} alt="black shingles" height="700px" width="1200px" />
                <div id="overlay-services-img"><h1>First Texas offers free estimates!</h1></div>
                <div id="free-estimate">
                    <div id="estimate-img"><img id="copper-turret" src={copper_turrent} alt="copper turret" height="400px" width="550px"/></div>
                    <p className="estimate-p">Contact us today to schedule your free roof inspection and estimate. We will complete an on-site assessment and provide you with a written estimate.
                    <br></br><br></br>Transparency is important to us at First Texas, and we will   define the steps and work necessary and provide you with an estimated 
                    cost of all work on the project.
                    <br></br><br></br>You can fill out the form on our <Link className="link" to="/contact" color="white">contact us</Link> page, or call us directly.
                    </p>
                </div>
            </div>
            <div id="services-main-wrapper">
                <div id="services-main">
                    <h1>What do we do?</h1>
                    <p className="services-info">First Texas General Contracting coordinates and executes the construction of certain home and commercial projects such as roofing, siding, and gutter installation, as well as other construction services.</p>
                    <p className="services-info">Our team will secure the required materials, oversee all projects, and act as the primary communicator between you and everyone involved during the duration of the project while demonstrating safe practices and meeting code requirements.</p>
                    <p className="services-info">If you believe you may have experienced storm-related damages, including, wind, hail, or water damages, schedule a free estimate today. Our team of experienced insurance adjusters will seek out damage and guide you through the insurance claims process. </p>
                </div> 
            </div>
            <h1 id="our-experts">Our roofing experts can provide you with the following quality services: </h1>
            <div id="services-list-wrapper">
                <ul>
                    <li className="list-item">Residential Roofing</li>
                    <li className="list-item">Commercial Roofing</li>
                    <li className="list-item">Free Estimates</li>
                    <li className="list-item">Roof Inspections</li>
                    <li className="list-item">Composition Roofs</li>
                    <li className="list-item">Metal Roofs</li>
                   
                </ul>
                <ul>
                    <li className="list-item">Insurance Claim Consultation</li>
                    <li className="list-item">Hail Damage</li>
                    <li className="list-item">Wind Damage</li>
                    <li className="list-item">Leak Repairs</li>
                    <li className="list-item">Gutter installation</li>
                    <li className="list-item">Siding installation</li>
                </ul>
                <div>
                    <img src={black_metal} alt="black-metal roof" height="350px" width="550px" />
                </div>
            </div>
            <Footer />
        </div>
    )


}

export default Services;