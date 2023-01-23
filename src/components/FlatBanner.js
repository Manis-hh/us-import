import React from 'react'
import {Link} from 'react-router-dom'
export default function FlatBanner(props) {
  return (
    <>   
    <div id='flatbanner'>
     <div id='fbanner'>
        <div className="container text-center" >
        <div className="row py-5 justify-content-center">
        <h1 className='display-1 py-5 fw-bold text' id='darkgradient2' data-aos="flip-up">{props.title}</h1>
       
        <h3 className='display-5 fw-bold text' id='darkgradient2' data-aos="flip-up">{props.title2}</h3>
            <div className="col-lg-6" id='rotator'>
 <Link to="/select-live-data" >               
<img src="https://i.pinimg.com/originals/7a/db/71/7adb71ffcc3085a7d85cd4f0d1fbf5cc.gif" alt="" className="w-100" />    
</Link>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container text-center ">
      <p>
        {props.para}
      </p>
    </div>
    
    </>

  )

}
FlatBanner.defaultProps={
    title:"Our Amazing  products &reports",
   para:"With the help of our interactive US Import Data or USA Import Data reports, you can easily keep a track of every import activity that is taking place in the US market. Our team of professionals at usimportdata.in have complete access to shipments that visit the United States through any mode of transportation, i.e., sea, road, or air. With the help of this database, we instantly make the necessary changes in our reports and guarantee to provide only fresh and updated information to our clients. The database passes through various rounds of checks to ensure that there is no single mistake and then it is finally delivered to our clients."
}