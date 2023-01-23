import React from 'react'
import exportimg from '../../src/samples/export.gif'
import importimg from '../../src/samples/import.gif'

import exportdata from'../../src/samples/US_Export_Data.xlsx'
import importdata from'../../src/samples/US_Import_Data.xlsx'

export default function Product() {
    
   
  return (
    <div style={{overflow:"hidden"}}>
        <div className="container text-center py-5">
            <h3 className=''>GAIN AN UNFAIR ADVANTAGE THROUGH OUR US TRADE DATA REPORTS</h3>
            <p>
            US Import Export Data that we collect from the trusted authorities of the nation, government bodies, and other reliable institutions will help you to keep an eye on the latest trends and insights that are prevailing in the US market. Get access to new avenues and opportunities in the US market. The US Import Export Data that we provide will give you a wide-angle view of the spectrum of commodities that are imported to and exported from the United States to other nations.
            </p>
            <div className="row">
            <div  className="col-lg-6 pt-5 order-lg-1 order-2" data-aos="fade-right">
                <h3 data-aos="flip-up" >US Import Data</h3>
                <p data-aos="flip-down">
                Another type of database known as US Import Data or USA Import Data includes nearly every piece of information with detailed analysis related to the goods that are being imported into the nation. The major sources that help in the formation of US Import Data or USA Import Data are the shipments that are collected from different localities across the country via road, sea, or air. The details present in the US Import Data range from date, HS codes, and information about the product to the name of exporters, origin country, and quantity of each product.
                </p>
                <a href={importdata} download>
<button id='downloadbtn' className=" rounded-pill text-white " > DOWNLOAD SAMPLE</button>
</a>
            </div>
            <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-left">
            {/* <video className='w-100' autoPlay hidecontrols loop>
  <source src="https://cdn.dribbble.com/users/14268/screenshots/8921521/media/39b8b57d5971cc769c3ac7a99c80b150.mp4" type="video/mp4"/>
</video> */}
<img src={importimg} alt="" className="w-100" />
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 " data-aos="fade-right">
            {/* <video className='w-100' autoplay  hidecontrols loop>
  <source src={exportimg} type="video/mp4"/>
</video> */}
<img src={exportimg} alt="" className="w-100" />
                {/* <video autoPlay loop src="" className='w-100' alt="" /> */}
            </div>
            <div className="col-lg-6 py-5 my-5" data-aos="fade-left">
            <h3 data-aos="flip-up">USA Export Data</h3>
            <p data-aos="flip-down">
            Another set of databases popularly known as the USA Export Data or USA Export Data is provided by usimportdata to its clients which is equipped with information related to the goods that are shipped from the United States to different countries via sea, air, or road. Information fields that are present in this database range from date, product description, and HS code to the name of the importer, destination, and quantity of product being exported.
            </p>
<a href={exportdata} download>
            <button id='downloadbtn' className=" rounded-pill text-white " > DOWNLOAD SAMPLE</button>
            </a>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 pt-lg-5" data-aos="fade-right">
                <h3 data-aos="flip-up">Interactive Analytical Report</h3>
                <p data-aos="flip-down">
                One of our main USPs of all is that we are capable of providing customized reports to our clients so as to save their time and energy and encourage them to study only the piece of information that they are looking for. Analytical reports provided by us are highly informative in all areas with respect to complete information on products being imported or exported by the United States like the brand, type, model, quantity, etc. Our specialists, with complete dedication, prepare these reports and bring to you the most accurate and reliable US Analytical reports.
                </p>
                {/* <button id='downloadbtn' className=" rounded-pill text-white " > DOWNLOAD SAMPLE</button> */}


            </div>
            <div className="col-lg-6" data-aos="fade-left">
                <img src="https://media.istockphoto.com/id/1277581031/vector/road-transport-documents-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=v2I9JbAl54SKtWGWKmjnPvs5i340kMCudWdbUkpYNFk=" className='w-100' alt="" />
            </div>
            </div>
        </div>

    </div>
  )
}
