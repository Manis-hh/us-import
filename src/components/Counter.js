import React from 'react'
import {motion} from 'framer-motion'
export default function Counter() {
    return (
        <>
        <div className="container pt-5
    mt-5
    text-center  ">
              <motion.h3 drag="x" dragConstraints={{left:5,right:5}} initial={{opacity:0,x:0}} whileInView={{opacity:100,x:0}} transition={{type:"spring",bounce:1 , stiffness:800,damping:10}} className='text-uppercase display-4 fw-bold'>Showcasing the current scenario of the US Trade </motion.h3>
              <p>As a subsidiary of TradeImeX Info Solution Pvt. Ltd., usimportdata is one of the most reliable knowledge and insight bases where you will get each and every detail related to US Trade Data along with USA Export Data and US Import Data and other related information. From the initial days of the establishment of TradeImeX till date, we have served more than 5000 clients by providing them with the most accurate trade data of 70+ nations including US Trade Data and helped them generate potential leads for their business and grow unconventionally in the international market.  </p>
            </div>
            <div className="container" id='countercontainer'>
                <div className="row justify-content-center">
                    <div className="col-lg-2">
                        <hr />
                    </div>
                </div>
                <div className="row  justify-content-lg-around text-center" style={{ backgoundColor: "" }}>
                    <div className=" col-10 mx-4    p-5 mb-5   rounded" id='countercard'>
                        <h3> </h3>
                        <div className="row">
                        <div className="col-lg-3">
                            <img src="https://cdn.dribbble.com/users/198345/screenshots/6039750/render.gif" alt="" width="120%" />
                        </div>
                        <div className="col-lg-9">
                        <h6>DATA INFORMATION SYSTEM</h6>
                        <p>
                        US Trade Data is dependent on various factors such as Bills of Lading, import-export docs, invoices, and other relevant documents. We make sure that the data we extract from various sources is accurate and authentic. After this process, we formulate the same in our database. The same process is followed while designing Global Trade Data or Import Export Data from any country.
                        </p>
                        </div> 
                        </div>
                    
                    </div>
                    <div className=" col-10 mx-4    p-5 mb-5   rounded" id='countercard'>
                        <h3> </h3>
                        
                        <div className="row">
                        <div className="col-lg-3">
                            <img src="https://cdn.dribbble.com/users/198345/screenshots/6039750/render.gif" alt="" width="120%" />
                        </div>
                        <div className="col-lg-9">
                        <h6>RELIABLE DATA SOURCES</h6>
                        <p>
                        There are some trusted and genuine institutions from where we extract accurate US Trade Data which is accompanied by US Import Data and USA Export Data like information derived from customs, government bodies, and other institutions.
                        </p>
                        </div>
                        </div>
                    </div>
                    <div className=" col-10 mx-4    p-5 mb-5   rounded" id='countercard'>
                        <h3> </h3>
                        
                        <div className="row">
                        <div className="col-lg-3">
                            <img src="https://cdn.dribbble.com/users/198345/screenshots/6039750/render.gif" alt="" width="120%" />
                        </div>
                        <div className="col-lg-9">
                        <h6>JAW-DROPPING ROI</h6>
                        <p>
                        A trader who is targeting the US market should avail of our services as this small investment of yours will drive you super amazing profits in the future. We are so sure about this as the contents of US Trade Data like USA Export Data and US Import Data will give you super amazing knowledge that too at a very cost-effective price which is capable to boost your profits and expand market coverage. Not only US trade data, but we provide all types of databases including Global Trade Data and Import Export data of any country at a very pocket-friendly price.
                        </p>
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
