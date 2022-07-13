import copper_turrent from "./images_ft/copper_turrent.JPG";
import black_shingles from "./images_ft/black_shingles.jpg"

function Services(){
    return(
        <div id="services">
            <img id="services-background-img" src={black_shingles} alt="black shingles" height="700px" width="1200px" />
            <div id="overlay-services-img"><h1>First Texas offers free estimates!</h1></div>
            <div id="free-estimate">
                <div id="estimate-img"><img id="copper-turret" src={copper_turrent} alt="copper turret" height="400px" width="550px"/></div>
                <p className="estimate-p">Contact us today to schedule your free roof inspection and estimate. We will complete an on-site assessment and provide you with a written estimate.
                <br></br><br></br>Transparency is important to us at First Texas, and we will define the steps and work necessary and provide you with an estimated 
                    cost of all work on the project.<br></br><br></br>
                    
                </p>
            </div>
        </div>
    )


}

export default Services;