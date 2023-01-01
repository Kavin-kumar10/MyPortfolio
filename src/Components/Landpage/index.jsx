import React from "react";
import { LandpageImg } from "../../Assets";

const Landpage = () =>{
    return(
        <div className="Landpage" id="Home">
            <div className="Landpage__content">
                <div>
                        <h1 data-aos = "zoom-out">UI/UX</h1>
                        <h1 data-aos = "zoom-out" data-aos-delay = "100"><span>Designer</span> & Developer</h1>
                </div>
                <div>
                    <h3
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                    >Kavin_10</h3>
                    
                </div>
            </div>
            <div className="Landpage__img"
                data-aos="fade-in"
                data-aos-anchor="#example-anchor"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
            >
                <img src={LandpageImg} alt="Landpage" />
            </div>
        </div>
    )
}

export default Landpage