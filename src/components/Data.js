import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {motion} from 'framer-motion'

import axios from "axios";
// import { Link } from "react-router-dom";
import { Router,Link,Route, useParams ,useSearchParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

import { FaHandPointRight} from 'react-icons/fa';
import Select from "react-select";
var q ="https://us-export.vercel.app"

const Hscode = (props) => {
  const[records,setrecords]=useState();
  const navigate =useNavigate();
 let {search}  = useParams();
 let {hsearch}  = useParams();
 let {deportingport} =useParams();
 let {departport}=useParams();
 let {dcountry}=useParams();
    
//  console.log("use params hook",JSON.stringify(params))
const[dataprovider,setdataprovider]=useState("EXPORT")
const importprovider =()=>{
  setHcode([])
  setNumcode([])
 setScode([])
  setdataprovider("IMPORT")
  if(search){
    navigate(`/live-data/import/${search}`)
    
  }
  else if(hsearch){
      navigate("/live-data/import/hscode/"+hsearch)
      
    
  }
  else{
    navigate("/live-data/import")
    
  }
  
}
const exportprovider =()=>{
  setHcode([])
  setNumcode([])
 setScode([])
  setdataprovider("EXPORT")
  q="https://us-export.vercel.app"
  console.log(q);
  navigate("/live-data/export")
  
}
const [deptport, setdeptport] = useState("BAHAMAS");
    const[status,setStatus]=useState(false)
  const [Hcode, setHcode] = useState([]) ;
  const [Scode, setScode] = useState([]);
  let [hscode, sethscode] = useState([{}])
  const trade=[{label:"IMPORT"},{label:"EXPORT"}]

const [departurePort,portvalue]=useState()
let departing =departurePort
 deportingport =departing
const [arrival,arrivalValue]=useState()
const [arrivalports,arrivalportsValue]=useState()

      
const [port,setPort] = useState([]);
    
// let port = useState[()];

  useEffect(() => {
    
    const fetchAllHscode = async () => {
      try {
        
        
        if(search){
          if(dcountry&&departport)
          {
            
            var res = await axios.get(`${q}/searchCountrytoport/${search}/${departport}/${dcountry}`);
     
          }
          else{
     
          
          if(departport){

            var res = await axios.get(`${q}/search/${search}/${departport}`);
     
          }
          else if(dcountry){
            var res = await axios.get(`${q}/searchCountry/${search}/${dcountry}`);

          }
          else{

            var res = await axios.get(`${q}/search/${search}`);
          }
   
        }
        if(hsearch){

          var res = await axios.get(`${q}/searchcode/${hsearch}`);
   
        }
          
      }
      if(res.data.length===0)
      {
        setrecords("NO RECORDS FOUND")
      }
      else{
        setrecords()
      }
        setHcode(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHscode();
  }, [search]);
  const searchDesc =()=>{

  }

    
    const [Numcode, setNumcode] = useState([]);
    
    const searchNum=()=>{
  }
  let haccess=hsearch
  
 let access=search
  let [Name, setName] = useState([])
  access =Name
 
  
// let { SName } = useParams();
  // SName =Name

  // console.log(SName);
  
  const postName = async(e)=> {
    search=Name
        navigate(`/live-data/${dataprovider}/`+search) 
	   
      
  	e.preventDefault()
  	
 
  }
  const [searchParams, setSearchParams]=useSearchParams()
// let {...codee} =useParams();
 let [code, setcode] = useState()
  haccess=code
 // codee={...code}
  const postCode = async(e)=> {
    if(code){
      hsearch=code
      if(dataprovider=="IMPORT"){
        
   navigate("/live-data/import/hscode/"+code) 
     
      }
      else{
        navigate("/live-data/import/hscode/"+code) 
     
      }
    }
   
    
		e.preventDefault()
  if(Name){
    navigate(`/live-data/${dataprovider.toLowerCase()}/`+Name) 
	  
   
  }
    
    const fetchAllcode = async () => {
      try {
        var res = await axios.get(`${q}/searchcode/${code}`);
        
        if(deportingport){

          var res = await axios.get(`${q}/searchcode/${code}/${departurePort}`);
   
        }
        else if(arrival){
          var res = await axios.get(`${q}/searchcodeCountry/${code}/${arrival}`);
   
        }
        else if(arrivalports)
      {
        var res = await axios.get(`${q}/searchcode_arrival_port/${code}/${arrivalports}`);

      }

        setNumcode(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };

    if(setNumcode){
      fetchAllcode();
      
      setcode("")
      setHcode([])
      setScode([])
      
    }
    // Navigate(`./${hsnum}`)
    // console.log(codee) 
    
	}
  let categoryport=  [...new Set(Hcode.map((Hscode)=>Hscode.Port_of_Departure))]

  let categorycountry=  [...new Set(Hcode.map((Hscode)=>Hscode.Country_of_Foreign_Port))]
  const filtercountry=()=>{
    if(search){
      if(dcountry&&departport)
      {
         window.location.href=(`/live-data/export/${search}/country-${dcountry}/port-${departport}`)
      
      } 
      
      else{
         window.location.href=(`/live-data/export/${search}/country-${dcountry}`)
        
      }
    }
    
    
   }
   const filterport=()=>{
    if(search){
      if(dcountry&&departport)
      {
        window.location.href=(`/live-data/export/${search}/country-${dcountry}/port-${departport.substring(0,departport.length-3)}`)
      
      } 
      
      else{
        window.location.href=(`/live-data/export/${search}/port-${departport.substring(0,departport.length-3)}`)
        
      }
    }
    
    
   }
   const clearcountry=()=>{
    if(dcountry){
      if(departport){
        if(search){
          window.location=(`/live-data/export/${search}/port-${departport}`)
        }
        if(hsearch){
          window.location=(`/live-data/export/hscode/${hsearch}/port-${departport}`)
          
        }
        
      }
      else{
        if(search){
          window.location=(`/live-data/export/${search}`)
        }
        if(hsearch){
          window.location=(`/live-data/export/hscode/${hsearch}`)
          
        }
      }
      
    }
   }
   const clearport=()=>{
    
    if(departport){
      if(dcountry){
        if(search){
          window.location=(`/live-data/export/${search}/country-${dcountry}`)
        }
        if(hsearch){
          window.location=(`/live-data/export/hscode/${hsearch}/country-${dcountry}`)
          
        }
        
      }
      else{
        if(search){
          window.location=(`/live-data/export/${search}`)
        }
        if(hsearch){
          window.location=(`/live-data/export/hscode/${hsearch}`)
          
        }
      }
      
    }
   }
  return (

<div style={{overflow:"hidden"}} >
  <div className="container">
  </div>
  {/* <h1>{dcountry} {departport}</h1> */}
    
 


  <div className="row justify-content-center text-center fs-5 fw-bold py-4">
  <Link to="/select-live-data">   <motion.h3 initial={{y:-100}} animate={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} id="darkgradient2" className="text-center fw-bolder py-2"> SEARCH <span>{dataprovider}</span>   LIVE  DATA { search||hsearch? <>OF {search.toUpperCase()}{ hsearch? <p> HSCODE {hsearch}</p>:null}</> :null } {departport?<>AT  {departport}</> :null} {dcountry?<>TO   {dcountry}</> :null}</motion.h3> </Link>
 
    <div className="col-lg-2 text-primary bg-transparent ">
    {/* <Select className="pb-4 "  styles={{borderRadius:"10%",border:"transparent"}} options={trade}  />
   */}
    </div>
    
    </div>
      <div className="container-fluid ">
      
      <div className="row justify-content-center  " id="spacetheme" >
          <div className="col-lg-2">
            <div className="search-container"data-aos="fade-up">
          <div class="dropup-center dropup" >
  <button class="  btn btn-primary bg-transparent text-secondary dropdown-toggle" style={{border:" transparent 0px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
 EXPORT
  </button>
  <ul class="dropdown-menu ">
    <li><a onClick={importprovider} class="dropdown-item fw-bold text-secondary" >IMPORT</a></li>
     <li onClick={exportprovider}><a class="dropdown-item fw-bold text-secondary"  >EXPORT</a></li>
  </ul>
</div>
</div>
          </div>
<div className="col-lg-2 col-6" >

<form onSubmit={postCode}>

     <div class="search-container" data-aos="fade-up">
        <input type="text" value={Name} onKeyUp={searchDesc} onChange={(e)=>setName(e.target.value.toLowerCase())}  name="search" placeholder="Description" class="search-input"/>
        
    </div>
    </form>

     </div>
  


        <div className="col-lg-2 col-6" >
        <form onSubmit={postCode}>

     <div class="search-container" data-aos="fade-up">
        <input type="text" onClick={searchNum()} value={code} onChange={(e)=>setcode(e.target.value)}  name="search" placeholder="HS-CODE" className="search-input p-0 text-center"/>
        <button  onClick={()=> setSearchParams({hscode:code})}  value="submit" type="submit"   class="search-btn border-0 bg-transparent p-0">
        <div class="" data-aos="fade-up">
     
                <i class="fas  fa-search"></i>  
                </div>    
        </button>
    </div>
    </form>

     </div>

</div>
{
    Hcode.slice(0,9).map((hscode,index)=>
    (
<div className="container py-3 border-2 " id="smallrecords">
  <div className="row" id="datacardheading">
  <h5 className="text-center" > SHIPMENT RECORD NO. {index+1}</h5>

  </div>
  <div className="row justify-content-center py-1 ">
<div className="col-6" id="colname">
  Date
</div>
<div className="col-6 p-1">
  {hscode.Act_Arrival_Date}
</div>
  </div>
  
  <div className="row py-1">
<div className="col-6" id="colname">
  Product Description
</div>
<div className="col-6 p-1">
  {hscode.Products}
</div>
  </div>
  <div className="row py-1">
<div className="col-6"  id="colname">
  Destination Country
</div>
<div className="col-6 p-1">
  {hscode.Country_of_Foreign_Port}
</div>
  </div>
  <div className="row py-1">
<div className="col-6" id="colname">
  Departure Port
</div>
<div className="col-6 p-1">
 {hscode.Port_of_Departure}
</div>
  </div>
  <div className="row py-1">
<div className="col-6" id="colname">
  Quantity
</div>
<div className="col-6 p-1">
  {hscode.Quantity}
</div>
  </div>
  <div className="row py-1" >
<div className="col-6" id="colname" >
 Unit
</div>
<div className="col-6 p-1">
  {hscode.Quantity_Unit}
</div>
  </div>
  <div className="row py-1" >
<div className="col-6" id="colname">
  Weight
</div>
<div className="col-6 p-1">
  {hscode.Weight}
</div>
  </div>
  
</div>
    )
    )
   }
<div style={{overflowX:"auto"}}>
      <table id="bigrecords" className="table  table-striped table-bordered">
  {
 (!records)? 
 <thead>
 <tr className="bg-primary text-white">
     <th scope="col" >Date</th>
   {/* <th  scope="col">HS CODE</th> */}
   <th scope="col">Product Description</th>
   <th scope="col"> Destination Country</th>

 <th scope="col">Departure Port</th>
   <th scope="col">Qty</th>
   <th scope="col">Unit</th>
   <th scope="col">Weight (KG)</th>
   <th scope="col">Exporter Name</th>
   
  

 </tr>
</thead>
  :
  null 

}
  <tbody>
{/* { (Hcode.length===0)? <h1 id="darkgradient2" >NO RECORD FOUND</h1> : null 
 
} */}

{  Scode.map((Hscode)=>(
    <tr>
      {
      (dataprovider=="IMPORT")? 
      <td>{Hscode.day}/{Hscode.month}/{Hscode.year}</td>
     : <td>{Hscode.Act_Arrival_Date}</td>
    
    }
    {
      (dataprovider=="IMPORT")? 
      <th  scope="row"  ><a href={"/live-data/import/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
     : null 
   
    }
<td>{Hscode.Products}</td>
{
      (dataprovider=="IMPORT")? 
      <td  scope="row"  >{Hscode.Country}</td>
     :<> <td><a href={`/live-data/export/${search}/country-${Hscode.Country_of_Foreign_Port}`}>{Hscode.Country_of_Foreign_Port}</a></td>
     <td> <a href={`/live-data/export/${search}/port-${Hscode.Port_of_Departure}`}> {Hscode.Port_of_Departure}</a></td>
     </> 
    }

{
      (dataprovider=="IMPORT")? 
     
<td>{Hscode.Foreign_Port}</td>

      : null
    }
<td>{Hscode.Quantity}</td>
<td>{Hscode.Quantity_Unit}</td>

<td>{Hscode.Weight}</td>
 <td><a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Exporter Name</a></td>


</tr>      
          
        ))}
        
{Numcode.map(Hscode=>(
    
    <tr>
    {
    (dataprovider=="IMPORT")? 
    <td>{Hscode.day}/{Hscode.month}/{Hscode.year}</td>
   : <td>{Hscode.Act_Arrival_Date}</td>
  
  }
  {
    (dataprovider=="IMPORT")? 
    <th  scope="row"  ><a href={"/live-data/import/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
   : null   
  }
<td>{Hscode.Products}</td>
{
    (dataprovider=="IMPORT")? 
    <td  scope="row"  >{Hscode.Country}</td>
   :<><td>{Hscode.Country_of_Foreign_Port}</td>
   <td>{Hscode.Port_of_Departure}</td>
   </> 
  }

{
    (dataprovider=="IMPORT")? 
   
<td>{Hscode.Foreign_Port}</td>

    : null
  }
<td>{Hscode.Quantity}</td>
<td>{Hscode.Quantity_Unit}</td>

<td>{Hscode.Weight}</td>
<td><a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Exporter Name</a></td>


</tr>      
    
          
        ))}
       
     
        {Hcode.slice(0,9).map(Hscode=>(
             
             <tr>
             {
             (dataprovider=="EXPORT")? 
            <td>{Hscode.Act_Arrival_Date}</td>
            :
            <td>{Hscode.day}/{Hscode.month}/{Hscode.year}</td>
            
           
           }
           {
             (dataprovider=="EXPORT")? 
            null :<th  scope="row"  ><a href={"/live-data/import/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
            
               // <th  scope="row"  ><a href={"/live-data/export/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
          
           }
       <td>{Hscode.Products}</td>
       {
             (dataprovider=="EXPORT")? 
             <> <td><a href={`/live-data/export/${search}/country-${Hscode.Country_of_Foreign_Port}`}>{Hscode.Country_of_Foreign_Port}</a></td>
             <td> <a href={`/live-data/export/${search}/port-${Hscode.Port_of_Departure}`}> {Hscode.Port_of_Departure}</a></td>
             </> 
            :
            <td  scope="row"  >{Hscode.Country}</td>
             
           }
       
       {
             (dataprovider=="EXPORT")? 
            
              null
              :
              
       <td>{Hscode.Foreign_Port}</td>
       
           }
       <td>{Hscode.Quantity}</td>
       <td>{Hscode.Quantity_Unit}</td>
       
       <td>{Hscode.Weight}</td>
       <td><a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Exporter Name</a></td>

       
       
       </tr>      
                 
          
        ))}
  </tbody>
</table >
  
</div>
{/*  */}
{ records? 
  <div className="container">
  <div className=" row justify-content-center text-center">
  <div className="col-8">
  <h3 className="" id="darkgradient2">{records} </h3>
  <h4 id="darkgradient2">Try to search with diffrent keyword,Try searching by hs code</h4>
    <h4 id="darkgradient2">OR</h4>
  <Link to="">  <h4 id="clickable" data-bs-toggle="modal" data-bs-target="#staticBackdrop">You can contact us we will find it for you ????</h4></Link>
 
    {/* <img src="https://cdn.dribbble.com/users/1033824/screenshots/5905597/404-dribbble.gif" alt="" className="w-50" /> */}
    {/* <img src="https://cdn.dribbble.com/users/57019/screenshots/3062823/dino_bat.gif" alt="" className="w-50" /> */}
    <img src="https://cdn.dribbble.com/users/550484/screenshots/2128340/404-gif.gif" alt="" className="w-50" />
  {/* <img src="https://static.adansitravels.com/assets/whitelable1/img/norecordfound.gif" alt="" className="w-75" /> */}
    {/* <img src="https://miro.medium.com/max/1400/1*qdFdhbR00beEaIKDI_WDCw.gif" width="50%" alt="" /> */}
    <h3 className=" fw-normal" id="oops" >OOPS</h3>
   <br />
   <br />
  
  
  </div>
  
  </div>
  </div>
  : null
}
{/*  */}

{!records?<nav aria-label="Page navigation example" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a style={{borderRadius:"10px"}} class="page-link shadow-sm" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a style={{borderRadius:"10px"}} class="page-link shadow-sm" href="#">1</a></li>
    <li class="page-item"><a style={{borderRadius:"10px"}} class="page-link shadow-sm" href="#">2</a></li>
    <li class="page-item"><a style={{borderRadius:"10px"}} class="page-link shadow-sm" href="#">3</a></li>
    <li class="page-item">
      <a style={{borderRadius:"10px"}} class="page-link shadow-sm" href="#">Next</a>
    </li>
  </ul>
</nav>
:
null
 }
</div>
{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div className="container">
   <i className=" float-end pe-auto fas  fa-multiply p-0 close" data-bs-dismiss="modal"></i>
        
        <div className="row">
        <h5 className="modal-title text-danger fs-5 fw-bold" id="staticBackdropLabel">GET PREMIUM INFORMATION REGARDING </h5>
        
        </div>
        <div className="row text-success">
          <div className="col-6">
          <ul  style={{listStyle:"none"}}>
          <h5 className="text-center">IMPORTER DETAILS</h5>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Loading Port
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Importer Address				

          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Foreign Exporter Name
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Exporter Address
          </motion.li>
          
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Vessel Name
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Bill of Lading
          </motion.li>
        </ul>    
          </div>
          <div className="col-6">
          <h5 className="text-center">EXPORTER DETAILS</h5>
          <ul  style={{listStyle:"none"}}>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Arrival Port				

          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Exporter Address				

          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Vessel Name
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" /> Bill of Lading
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" />Carrier
          </motion.li>
          <motion.li whileInView={{x:[0,5,0]}} transition={{ damping:"700", repeat:"Infinity"}} >
            <FaHandPointRight className="text-primary" />Container ID
          </motion.li>
          
        </ul>    
          </div>
        
        </div>
      </div>
      </div>
      <div class="modal-body">
      <form  className='' action='https://www.tradeimex.in/form.php'  name="myform" method="POST">
                <div className="row">
                    <div className="col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputName4 "  >Name</label>
                        <input type="Name"  required  className="form-control" id="name" placeholder="Name" name="name"/> <span className="formerror"></span>
                    </div>
                    <div className="form-group col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputEmail4" >email</label>
                        <input type="email"  required   className="form-control" id="email" placeholder="email" name="email"/>
                    </div>
                </div>
<div className="row">
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress" >Phone</label>
                    <input type="tel" required    className="form-control" id="phone" placeholder="Phone" name="number"/>
                </div>
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress2" >Company</label>
                    <input type="text"  required  className="form-control" id="inputAddress2" placeholder="Company Name" name="company"/>
                </div>
                </div>
                <div className="form-group text-center ">
                    <label htmFor="inputState" >IMPORT/EXPORT</label>
                    <select id="inputState" required   className="form-control" name="role">
                        <option selected="">Choose...</option>
                        <option>IMPORT</option>
                        <option>EXPORT</option>
                        <option>BOTH</option>
                    </select>
                </div>
                <div className="form-group text-center">
                    <label htmFor="exampleFormControlTextarea1" >Your Message</label>
                    <textarea className="form-control"   type="txt" id="Message" rows="4" name="message"></textarea>
                </div>

                
                <button type="submit"  name="submit_form" value="Send" className="custom-btn btn-16" id="lightblue">SUBMIT</button>
     
            </form>
      </div>
      <div class="modal-footer">
      {/* <Link to='../contact' target='new_blank'>  <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Understood</button></Link> */}
      </div>
    </div>
  </div>
</div>
        
{ !records?
  <div className="container py-3">
    <div className="row justify-content-around " >
    <h3 id="darkgradient2">FILTER BY:</h3>     
 
      { (dataprovider=="EXPORT")?
       <>
        <div className="col-lg-4" >
              <h3 id="darkgradient2" className="fw-bold text-center">Departure PORT</h3>
               <div className="shadow p-3" style={{height:"200px",overflow:"auto",borderRadius:"5%"}}>
       
             
       {
        departport?  <div className="col-lg-4" >
        <p id="clickable" onClick={clearport} >View all Ports</p></div> :
         <>
         {  categoryport.map((Hscode)=>(
         
     <span>   <p id="clickable"   onClick={(event) => { (departport=Hscode); filterport();}} > {Hscode}</p></span> 
        //  <a href={`/live-data/export/${search}/port-${Hscode}`}>  <p id="bluee"  onMouseEnter={()=> portvalue(Hscode)} > {Hscode }</p></a> 
       
         
                 
               ))} 
      
      </>
             
       }
       </div>
       </div>
        <div className="col-lg-4" >
        <h3 className="fw-bold text-center" id="darkgradient2">Destination COUNTRY</h3>
        <div className="shadow p-3" style={{height:"200px",overflow:"auto",borderRadius:"5%"}}>
        {
        dcountry? <p id="clickable" onClick={clearcountry} >View all Countries</p> :
          <>
        {  categorycountry.map((Hscode)=>(
         
         <p id="clickable"  onClick={(event) => { (dcountry=Hscode); filtercountry();}}  > {Hscode}</p>
         
        //  <a href={`/live-data/export/${search}/country-${Hscode}`}>  <p id="bluee"  onMouseEnter={()=> portvalue(Hscode)} > {Hscode }</p></a> 
       
         
                 
               ))}           
            </>    
               
       }
                      </div>
      </div>
       </>
       :
null
      }
     

    </div>
    </div> 
  :
  null  
  
  }
    
    </div>
  );
};

export default Hscode;