import React from 'react'
import {motion} from 'framer-motion'
export default function About2() {
  return (
    <div>      
        <div className="container">
            <motion.h1 drag="x" dragConstraints={{left:5,right:5}} initial={{opacity:0,x:0}} whileInView={{opacity:100,x:0}} transition={{type:"spring",bounce:1 , stiffness:800,damping:10}} className='display-4 fw-bold '>SPECIALITIES OF OUR US TRADE DATA</motion.h1>
            <div className="row justify-content-around">
            <div className="col-lg-5 order-lg-first order-last py-5">
                <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      CUSTOMER FRIENDLY UI
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      <p>The interface we have designed for you here is very easy to interpret. With the effective use of technology and resources, we are capable of providing you an idea through our live data tab that how actually our data looks in terms of structure, format, and information availability. </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      UPDATED AND REALISTIC CONTENT
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <p>
      The table of contents that is provided in the US Trade Data is the latest information with up-to-date statistics and the situation of the market in the United States. Unlike others, we believe in producing only the authentic and most realistic picture of the US market for our clients. This applies to individual products also like USA Export Data and US Import Data at a set time period.
      </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      AFFORDABLE AND POCKET FRIENDLY      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <p>
      The US Trade Data is provided by usimportdata which consists of all relevant information about the market scenario of the nation. From collecting the data and sorting it to arranging it into proper reports is done by our experienced experts. The final database that we provide to you will be affordable and light in your pocket. Let’s build a strong trust and bond together.
      </p>
      </div>
    </div>
  </div>
            </div>
            
            </div>
            <div className="col-lg-5 py-4 order-lg-last order-first">
                <img src="https://miro.medium.com/max/1400/1*R237tScmQfB-rBVS5SvW8A.gif" width="100%" alt="" />
            </div>
            </div>
            
        </div>
        {/* <div className="row text-center text-white" id='catchy'>
            <h3 className='display-1 fw-bold '>
            Benefits of getting Exclusive USA Trade Data from us
            </h3>
            <div className="container">
            <p className='p-4'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aut officiis molestias repellat modi aperiam maxime doloremque cum eveniet! Sapiente aspernatur facilis excepturi fugiat. Vero asperiores quos ea eligendi excepturi.
            </p>
            </div>
            </div> */}
    </div>
  )
}
