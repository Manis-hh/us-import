import React from 'react'
import {motion} from "framer-motion"

import exportdata from'../../src/samples/US_Export_Data.xlsx'
import importdata from'../../src/samples/US_Import_Data.xlsx'
export default function Products(props) {
    return (
        <div style={{overflow:"hidden"}}>
            <div className="container py-5 text-center">
                <h3 id='darkgradient2' className='py-2' >DOWNLOAD SAMPLE</h3>
                <a href={props.download} download>
                <motion.button style={{zIndex:"9"}} title='click to download sample' whileInView={{rotateX:[0,40,0]}} transition={{ duration:4,repeat:Infinity,easings:'linear',repeatType:'loop',repeatDelay:0}} className='p-5' id={props.ibtn} >DOWNLOAD SAMPLES</motion.button>
                <p className='mt-n4' style={{marginTop:'-15px' ,zIndex:"2" }}>click here</p>
                </a>
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div className="card mb-3" data-aos="fade-down-right" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                {/* <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                </div> */}
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title1}</h5>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <p className="card-text"><small className="text-muted">
                                        {props.para1}
                                            </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3" data-aos="fade-down-left" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title2}</h5>
                                        <p className="card-text"><small className="text-muted">{props.para2}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card mb-3" data-aos="zoom-in" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                        
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title3}</h5>
                                    <p className="card-text"><small className="text-muted">{props.para3}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

 
                </div>
            </div>
            <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div className="card mb-3" data-aos="fade-up-right" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title4}</h5>
                                        <p className="card-text"><small className="text-muted">{props.para4}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3" data-aos="fade-up-left" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title5}</h5>
                                        <p className="card-text"><small className="text-muted">{props.para5}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
        </div>
        </div>
    )
}
Products.defaultProps={
    download:"/static/media/US_Import_Data.206912abd7fda561b7ec.xlsx",
    ibtn:"importbtn",
    title1:"UNITED STATES IMPORT STATISTICS",
   para1:"Over a period of 5 years, import fluctuation is observed in the United States where a rise in imports was observed from the year 2017 to 2018 (USD 2.4 to USD 2.6 trillion), then there was a decline in the total value of imports in the year 2019 and 2020 (USD 2.5 to USD 2.4 trillion), which was followed by a rise in the year 2021 (USD 2.937 trillion).",
   title2:"MAJOR IMPORT PRODUCTS OF THE US",
   para2:"As per the US Import Data for the year 2021, the United States imported numerous products and commodities from the world. Amongst them, the nation mainly imported machinery and spare parts (USD 428 billion), and Four-wheelers, especially cars (USD 283 billion), followed by mineral fuels and oils (USD 223 billion), medicaments (USD 149 billion), and plastic items (USD 82 billion). ",
   title5:"MAJOR IMPORT ACCOMPLICES OF THE UNITED STATES",
   para5:"As far as the year 2021 is concerned, the United States performed trade with many nations, but the major import partners of the US as listed in the US Import Data were China (541 billion), followed by Mexico (USD 388 billion), then Canada (USD 365 billion), Japan (USD 139 billion), and Germany (USD 138 billion).",
   title4:"WORLD IMPORT RANKING",
   para4:"The United Nations is considered the world’s superpower. In terms of imports also the country is at the top, securing the 1st position in total imports across the globe with imports amounting to USD 2.93 trillion. This data is released by US Import Data for the year 2021. It is estimated that the imports will grow in the future due to ever-increasing population and demands.",
   title3:"USA IS THE LARGEST IMPORTER OF?",
   para3:"Till the year 2021, the US Import Data revealed that the nation was the world’s biggest importer of four-wheelers especially cars, machinery items, and medicaments. The country has been ahead of all nations in total imports of these commodities by a huge margin. It is clearly observed that the demand for these products is much more than their production in the domestic market of the United States."
}