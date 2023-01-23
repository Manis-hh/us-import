import React from 'react'
import {motion} from 'framer-motion'
export default function MainBanner(props) {
  
  return (
    <div id={props.mainbg}>
    <div  className="container-fluid  text-white  " id={props.id}  >
        <div className="container-fluid pt-5 banner   text-capitalise" >
        {/* <img src="https://cdn.dribbble.com/users/233479/screenshots/1968181/dribble.gif" alt="" className="w-100" /> */}
            <motion.h3 initial={{opacity:0,y:"-100vh"}} animate={{opacity:100,y:0}} transition={{type:"spring" ,velocity:4 ,stiffness:80,damping:10}} className='display-4 px-lg-5 fw-bold text-center  title' >{props.title}</motion.h3>
            <div className="row justify-content-center ">
              <div className="col-lg-10 " >
                <span className='p-lg-5 mt-5 f-2 text-center fs-5 fw-bold  '>
              <p className=''data-aos="fade-down"  id='colorm'>{props.content}</p>
              <p className=''data-aos="fade-down"  id='colorm'>{props.content2}</p>
              </span>

              </div>
            <div className="col-lg-4 p-0 " style={{marginRight:'-11px'}} >
              {/* <img src={props.img} alt="" className="w-100" /> */}

              {/* <img src="https://cdn.dribbble.com/users/4242612/screenshots/14154104/media/d8f023968f0dd5178dd469617c2d6f6a.png?compress=1&resize=768x576&vertical=top" alt="" className="w-100" /> */}
            </div>
            </div>
            

          
        </div>
        
    </div>
    </div>
  )
}
MainBanner.defaultProps={
content:"US Trade Data or USA Trade Data will help you to get solutions for any queries that you might be having if you are targeting the market of the United States. The US Trade data formed by us includes all major details about USA Export Data and USA Import Data that will help any marketer to fetch potential clients, leads, importers, and exporters from the United States. Keep a close watch over all the ongoings that are happening with respect to going in and going out of goods from the United States with the help of our interactive US Trade Data which will help you to stay one step ahead of your competitors.",
// content2:"This interactive database can do wonders for those practitioners, marketers, and traders who have a keen interest in this field and are frequently associated with overseas trading with different nations across the world. We provide live demos to our new clients so that they can understand the functionality of the database nicely. Contact us now for a demo session and a super amazing quote as per your needs and preferences.",
btn1:"About Us",
btn2:"Contact Us",
bgColor:"lightblue",
mainbg:"mainshow",
img:"https://cdn.dribbble.com/users/3209277/screenshots/6027227/media/2d2370542f5da5790acc227be9e7c464.jpg?compress=1&resize=400x300&vertical=top"
}