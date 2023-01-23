import React from 'react'
import { useState } from 'react';

import {motion} from 'framer-motion'
import { useNavigate,Link } from 'react-router-dom';
import Select from "react-select";
export default function 
()

{
    const navigate =useNavigate();
    const [dataprovider,setdataprovider] =useState("")

const [Name,setName] =useState("")

const [code,setcode] =useState("")
const[warning,setwarning]=useState("")
    const database=[{label:"Import"},{label:"Export"}]
    const postName = async(e)=> {
        e.preventDefault();
        if(dataprovider){

            if (Name) {
             
                navigate("/live-data/"+dataprovider.toLowerCase()+"/"+Name.toLowerCase()) 
                 
                  }
                  if(code)
                  {
                    if(dataprovider==="EXPORT")
                    {
                      navigate("/live-data/import/hscode/"+code) 
                   
                    }
                    else{
                      navigate("/live-data/"+dataprovider.toLowerCase()+"/hscode/"+code) 
                     
                    }
                      
                  }
              }
              else{
             setwarning("YOU WANT TO IMPORT OR EXPORT?") 
              }
        }    
        
  return (
<div className="container-fluid">
<div className="row justify-content-center" style={{height:"50vh"}} id='livedata'>
        
   <Link to="/select-live-data">   <motion.h3 initial={{y:-100}} animate={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} id="neontitle" className="text-center fw-bolder py-2"> SEARCH <span>{dataprovider}</span>   LIVE  DATA {Name?
  <>OF {Name}</> :null} {code?<>of Hs Code {code}</>:null} </motion.h3> </Link>
      {/* <motion.h3 initial={{y:-100}} animate={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} id="darkgradient2" className="text-center fw-bolder py-2">{ dataprovider? null:warning}
  </motion.h3>  */}
  
  <div className='search-container ' id='bar' >
          <div className="col-lg-2 col-4">
            <div className="search-container"data-aos="fade-up">
          <div class="dropup-center dropup" >
  <button class="  btn btn-primary bg-transparent text-secondary dropdown-toggle" style={{border:" transparent 0px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {
  dataprovider?  dataprovider:"IMPORT/EXPORT"
}
  </button>
  <ul class="dropdown-menu  " >
    <li><a class="dropdown-item fw-bold text-secondary" onClick={()=>setdataprovider("IMPORT")}>IMPORT</a></li>
   <li><a class="dropdown-item fw-bold text-secondary" onClick={()=>setdataprovider("EXPORT")} >EXPORT</a></li>
  </ul>
</div>
</div>
          </div>
<div className="col-lg-2 col-4" >

<form onSubmit={postName}>

     <div class="search-container" data-aos="fade-up">
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value.toUpperCase())}  name="search" placeholder="Description" class="search-input"/>
        
    </div>
    </form>

     </div>
  


        <div className="" >
        <form onSubmit={postName}>

     <div class="search-container" data-aos="fade-up">
        <input type="text"  value={code} onChange={(e)=>setcode(e.target.value)}  name="search" placeholder="HS-CODE" className="search-input p-0 text-center"/>
        <button    value="submit" type="submit"   class="search-btn border-0 bg-transparent p-0">
        <div class="" data-aos="fade-up">
     
                <i class="fas   fa-search"></i>  
                </div>    
        </button>
    </div>
    </form>

     </div>
     </div>
     <center>
<h3 id='neontitle'>  {warning} </h3>
</center>
</div>

</div>
  )
}
