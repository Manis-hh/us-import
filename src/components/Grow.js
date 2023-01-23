
import React from 'react'
import museum from'../samples/Colosseum.glb'
import {motion} from 'framer-motion'
export default function Grow() {
  return (
    <div>
      {/* <model-viewer  src={museum} rotate    camera-controls touch-action="pan-y"></model-viewer> */}
       
        <div className="container text-center grow py-5">
            <h3 className='display-2 fw-bold text-danger text-capitalize' data-aos="fade-up">REAL-TIME STATISTICS OF  <br /><span className='text-primary'>THE UNITED STATES</span></h3>
            <div className="row justify-content-around">
                <div className="col-lg-4 order-lg-1" id='gc' data-aos="fade-up">
                <h3>US TRADE DATA ANALYSIS</h3>
                <p data-aos="flip-up">
                In the complete year 2021, the United States was able to export goods worth USD 1.75 trillion as mentioned in USA Export Data and imported goods worth USD 2.93 trillion. As the United States imported more than it exported, the nation experienced a negative trade balance of USD 1.18 trillion. As per the USA Export Data analysis, the exports of the nation increased by almost 23% in one year, i.e., from the year 2020 to 2021. Whereas a growth of 22% was observed in total imports during the same period.
                </p>
                </div>
                <div className="col-lg-4 order-lg-2 order-3 ">
<motion.img initial={{rotate:180}} animate={{rotate:[9,-9,0,9]}} transition={{ type:"tween",duration:4, damping:100,delay:1,stiffness:100,repeat:Infinity,repeatDelay:0,ease:"linear"}} className='thodaniche ' src="https://cdn.dribbble.com/users/2434726/screenshots/8367267/media/eb647b043033de9e72d69104bacb6522.gif"width="100%" style={{borderRadius:"50%"}} alt="" />
                </div>
                <div className="col-lg-4 order-lg-3" id='gc' data-aos="fade-up">
<h4>MAJOR EXPORT PARTNERS OF THE US</h4>
<p data-aos="flip-up">
During the year 2021, the US had the following countries as its export partners to whom it exported its goods the most, and the same are listed in the USA Export Data or USA Export Data for that time frame.
Canada (USD 30.7 billion); Mexico (USD 27.6 billion); China (USD 15.21 billion); Japan (USD 7.45 billion) and Korea (USD 6.58 billion).
The goods exported the most were Mineral fuels like oils and coal, machinery and nuclear reactors, automobile, and miscellaneous commodities like cameras and medical equipment.

       </p>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-lg-4" id='gc' data-aos="fade-up">
                <h4>MAJOR IMPORT PARTNERS OF THE US</h4>
                <p data-aos="flip-up">
                During the year 2021, the US had the following countries as its import partners from whom it imported the goods the most. 
China (USD 54.1 billion); Mexico (USD 38.8 billion); Canada (USD 36.5 billion); Japan (USD 13.9 billion) and Germany (USD 13.75 billion).

                </p>
                <p data-aos="flip-up">
                The goods imported by the US were machinery and spare parts, four-wheelers like cars, PCs, and mineral fuels like oils and coal.

                </p>
                </div>
                <div className="col-lg-3" data-aos="fade-up"></div>
                <div className="col-lg-4" id='gc' data-aos="fade-up">
               <h4>GROWTH PROSPECTS OF THE US TRADE DATA</h4>
               <p data-aos="flip-up">
               The main reason which gave an incredible push to the exports of the United States was the rise in exports from the US to countries like China, Japan, and Mexico. The products that turned out to be the most popular products exported were automobiles, nuclear items, and machinery. 
On the other hand, the growth in the US Import Data was considerable because of the growth in importing goods from Germany and Canada into the nation with goods like computers, telephones, and mineral fuels.

</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}
