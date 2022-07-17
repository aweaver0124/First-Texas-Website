import facebook_icon from "./images_ft/facebook_icon.png"


function Footer(){
    return(
        <div id="footer">
            <a href="tel: 8179647620"><p>817-964-7620</p></a>
            <p>douglasweaver@firsttexasgeneralcontracting.com</p>
            <a href="https://www.facebook.com/weaverdouglas1"><img src={facebook_icon} alt="facebook icon" height="50px" wdith="50px" /></a>
        </div>
    )
}

export default Footer;