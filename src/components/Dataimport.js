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
import Hscode from "./Hscode";
var q ="https://us-import.vercel.app"

const Dataimport = (props) => {
  let Country
  const [records,setrecords]=useState()
    const [sport,setsport]=useState("OK")

    console.warn(sport)
   
  const navigate =useNavigate();
 let {search}  = useParams();
 let {hsearch}  = useParams();
 let {unloadingport} =useParams();
 
 let {origincountry} =useParams();
//  console.log("use params hook",JSON.stringify(params))
const[dataprovider,setdataprovider]=useState("IMPORT")
const importprovider =()=>{
  setHcode([])
  setNumcode([])
 setScode([])
  setdataprovider("IMPORT")
  q ="https://us-import.vercel.app"
  navigate("/live-data/import")
 
}
const exportprovider =()=>{
  setHcode([])
//   setNumcode([])
//  setScode([])
  // setdataprovider("EXPORT")
  if(search){
    navigate(`/live-data/export/${search}`)
   
  }
  else{

    navigate("/live-data/export")
 
  }
  
 
  // console.log(q);
  
}
const [deptport, setdeptport] = useState("BAHAMAS");
const [table,settable] =useState(false)
    const[status,setStatus]=useState(false)
  const [Hcode, setHcode] = useState([]) ;
  const [Scode, setScode] = useState([]);
  let [hscode, sethscode] = useState([{}])
  const trade=[{label:"IMPORT"},{label:"EXPORT"}]

  
const [departurePort,portvalue]=useState()
const [arrival,arrivalValue]=useState()
const [arrivalports,arrivalportsValue]=useState()

      
const [port,setPort] = useState([]);
    
// let port = useState[()];

  useEffect(() => {
    
    const fetchAllHscode = async () => {
      try {
        
 
        var res = await axios.get(`${q}/search/${search}`);
   
        if(search){
          if(origincountry&&unloadingport){
            
            var res = await axios.get(`${q}/searchCountrytoport/${search}/${origincountry}/${unloadingport}`);
                
            // https://us-import.vercel.app//PEPSI/BZ,%20BELIZE/5201,%20MIAMI,%20FL
          }
          else{

            if(unloadingport){
              var res = await axios.get(`${q}/search/${search}/${unloadingport}`);
              
          }
          else if(origincountry)
          {
              var res = await axios.get(`${q}/searchCountry/${search}/${origincountry}`);
              
          }
          else{
              var res = await axios.get(`${q}/search/${search}`);

          }
 
      }
    }
      if(hsearch){
        if(search){
          if(unloadingport && origincountry)
          {
            var res = await axios.get(`${q}/descandhscodebyportandcountry/${search}/${hsearch}/${unloadingport}/${origincountry}`);
       
          }
          else if(unloadingport){
            var res = await axios.get(`${q}/descandhscodebyport/${search}/${hsearch}/${unloadingport}`);
       
          }
          else if(origincountry){
            var res = await axios.get(`${q}/descandhscodebycountry/${search}/${hsearch}/${origincountry}`);
            
          }
          else{
            var res = await axios.get(`${q}/descandhscode/${search}/${hsearch}`);
        
          }
         
        }

        else{

        
        if(origincountry&&unloadingport){
            
          var res = await axios.get(`${q}/searchCountrytoportbyhscode/${hsearch}/${origincountry}/${unloadingport}`);
              
          // https://us-import.vercel.app//PEPSI/BZ,%20BELIZE/5201,%20MIAMI,%20FL
        }
        else{

          
        if(unloadingport){
              var res = await axios.get(`${q}/searchcode_arrival_port/${hsearch}/${unloadingport}`);
              
          }
          else if(origincountry)
          {
              var res = await axios.get(`${q}/searchcode/${hsearch}/${origincountry}`);
              
          }
          else{
              var res = await axios.get(`${q}/searchcode/${hsearch}`);

          }

          }  
        }  
        }
       if(res.data.length===0){
       setrecords("NO RECORD FOUND ")
       }
       else{
        setrecords("")
        
       }
        setHcode(res.data);
        
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHscode();
  }, [search||hsearch]);
  const searchDesc =()=>{

  }

    
    const [Numcode, setNumcode] = useState([]);
    
    const searchNum=()=>{
  }
  let haccess=hsearch
  
 let access=search
  let [Name, setName] = useState([])
  access =Name
  

  const postName = async(e)=> {
      if(dataprovider="IMPORT"){

        navigate("/live-data/import/"+Name) 
	    }
      else{
        navigate("/live-data/export/"+Name) 
	   
      }
  	e.preventDefault()
  	
   
    
    const fetchAllHscode = async (SEARCH) => {
      try {
        
      var res = await axios.get(`${q}/search/${Name}`);
        
      if(departurePort){

        var res = await axios.get(`${q}/search/${Name}/${departurePort}`);
 
      }
      else if(arrival){
        var res = await axios.get(`${q}/searchCountry/${Name}/${arrival}`);
 
      }
      else if(arrivalports)
      {
        var res = await axios.get(`${q}/search_arrival_port/${Name}/${arrivalports}`);

      }
        setScode(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHscode();
    
    setHcode([])
    setNumcode([])
 
  }
  const [searchParams, setSearchParams]=useSearchParams()
 let [code, setcode] = useState()
  haccess=code
  const postCode = async(e)=> {
  	e.preventDefault()
    if(code){
      hsearch=code  
   navigate("/live-data/import/hscode/"+hsearch) 
     setName("")
      
    
    } 
 else{
  setcode("")
    search=Name
    console.log(search);
    if(dataprovider=="IMPORT"){

      navigate(`/live-data/import/`+search) 
    }
    else{
      navigate("/live-data/export/"+search) 
   
    }
    e.preventDefault()
  	
      
    }
    
    
	}
  let x=0
  let portcounts=[]
let  nindex = 1
  const element =[]
 let categoryport=  (Hcode.map((Hscode)=>Hscode.Foreign_Port))
 let counts={}
 for (const num of categoryport) {
  counts[{num}] = counts[num] ? counts[num] + 1 : 1;

}
console.log("NUM",counts)
 categoryport.forEach(function (x) { portcounts[x] = (portcounts[x] || 0) + 1; });
categoryport=portcounts
console.log(portcounts)
// const xyz =portcounts.map((arr)=>{
// return `${arr}`
// });
for(let i=0;i<portcounts.length;i++){
console.log(portcounts[i]);
}      
    
categoryport=  [...new Set(Hcode.map((Hscode)=>Hscode.Foreign_Port))];

// let unique=[(Hcode.map((Hscode)=>Hscode.Foreign_Port))]
//  console.log("ITS UNIQUE",unique);
//  unique.forEach(value => {
//   if (!element.includes(value)) {
//     element.push(value)
//   }
//   else{
//     x+=1
//   }
//  });
//  console.log("X",x)
 
//  console.log("R",element)
let countrycounts=[]
let codecounts=[]

let categorycountry=  Hcode.map((Hscode)=>Hscode.Country)
// let categorycountry=  [...new Set(Hcode.map((Hscode)=>Hscode.Country))]
 let codecategory=  (Hcode.map((Hscode)=>Hscode.HS_Code))
 codecategory.forEach(function (x) { codecounts[x] = (codecounts[x] || 0) + 1; });
 console.log(codecounts)
 codecategory= [...new Set(Hcode.map((Hscode)=>Hscode.HS_Code))]
 categorycountry.forEach(function (x) { countrycounts[x] = (countrycounts[x] || 0) + 1; });
console.log("Country",countrycounts)
categorycountry=countrycounts


categorycountry=  [...new Set(Hcode.map((Hscode)=>Hscode.Country))]

 const filterhandler=()=>{
  if(search){
    if(origincountry&&unloadingport)
    {
     if(hsearch) {
      window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/port-${unloadingport}/country-${origincountry.substring(4,origincountry.length)}`)
    
     }
     else{
      window.location.href=(`/live-data/import/${search}/country-${origincountry.substring(4,origincountry.length)}/port-${unloadingport}`)
    
     }
      
    } 
    else{
      if(hsearch){
        window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/country-${origincountry.substring(4,origincountry.length)}`)
    
      }
      else{
        window.location.href=(`/live-data/import/${search}/country-${origincountry.substring(4,origincountry.length)}`)
      
      }
       
    }
  }
  else {
    if(origincountry&&unloadingport)
    {
       window.location.href=(`/live-data/import/hscode/${hsearch}/country-${origincountry.substring(4,origincountry.length)}/port-${unloadingport}`)
    
    } 
    
    else{
       window.location.href=(`/live-data/import/hscode/${hsearch}/country-${origincountry.substring(4,origincountry.length)}`)
      
    }
  }
  
 }
 const filterport=()=>{
  if(search){

    if(origincountry&&unloadingport)
    {
      if(hsearch){
        window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/port-${unloadingport.substring(6,unloadingport.length-3)}/country-${origincountry}`)
        
      }
      else{
        window.location.href=(`/live-data/import/${search}/country-${origincountry}/port-${unloadingport.substring(6,unloadingport.length-3)}`)
   
      }
    
    } 
    
    else{
      if(hsearch){
        window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/port-${unloadingport.substring(6,unloadingport.length-3)}`)
    
      }
      else{
        window.location.href=(`/live-data/import/${search}/port-${unloadingport.substring(6,unloadingport.length-3)}`)
     
      }
      
    }
  }
  else{
    if(origincountry&&unloadingport)
    {
      window.location.href=(`/live-data/import/hscode/${hsearch}/country-${origincountry}/port-${unloadingport.substring(6,unloadingport.length-3)}`)
    
    } 
    
    else{
      window.location.href=(`/live-data/import/hscode/${hsearch}/port-${unloadingport.substring(6,unloadingport.length-3)}`)
      
    }
  }
  
 }
 const filtercode=()=>{
  if(search){
    if(origincountry&&unloadingport)
    {
      window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/port-${unloadingport}/country-${origincountry}`)
    
    } 
    
    else if(origincountry){
      window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/country-${origincountry}`)
    
    }
    else if(unloadingport){
      window.location.href=(`/live-data/import/${search}/hscode-${hsearch}/port-${unloadingport}`)
      
    }
    else{
      window.location.href=(`/live-data/import/${search}/hscode-${hsearch}`)
      
    }
  }
  else{
    window.location.href=(`/live-data/import/hscode/${hsearch}`)
    
  }
  
 }
 const clearcountry=()=>{
  if(origincountry){
    if(unloadingport){
      if(search){
        window.location=(`/live-data/import/${search}/port-${unloadingport}`)
      }
      if(hsearch){
        window.location=(`/live-data/import/hscode/${hsearch}/port-${unloadingport}`)
        
      }
      
    }
    else{
      if(search){
        window.location=(`/live-data/import/${search}`)
      }
      if(hsearch){
        window.location=(`/live-data/import/hscode/${hsearch}`)
        
      }
    }
    
  }
 }
 const clearport=()=>{
  
  if(unloadingport){
    if(origincountry){
      if(search){
        window.location=(`/live-data/import/${search}/country-${origincountry}`)
      }
      if(hsearch){
        window.location=(`/live-data/import/hscode/${hsearch}/country-${origincountry}`)
        
      }
      
    }
    else{
      if(search){
        window.location=(`/live-data/import/${search}`)
      }
      if(hsearch){
        window.location=(`/live-data/import/hscode/${hsearch}`)
        
      }
    }
    
  }
 }
 const clearcode=()=>{
  
  if(unloadingport && origincountry){
 
        window.location=(`/live-data/import/${search}/country-${origincountry}/port-${unloadingport}`)
      
    }
    else if(unloadingport)
    {
      window.location=(`/live-data/import/${search}/port-${unloadingport}`)
      
    }
    else if(origincountry)
    {
      window.location=(`/live-data/import/${search}/country-${origincountry}`)
    }
    else{
      window.location=(`/live-data/import/${search}`)
      
    }
    
  }
 
  return (

<div  style={{overflow:"hidden"}} >
<div className="row justify-content-center text-center fs-5 fw-bold py-4">
  <Link to="/select-live-data">   <motion.h3 initial={{y:-100}} animate={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} id="darkgradient2" className="text-center bg-secondary fw-bolder py-2"> SEARCH <span>{dataprovider}</span> LIVE  DATA { search||hsearch? <> { search? <><span>OF</span> {search.toUpperCase()}</>:null}{ hsearch? <p>UNDER HSCODE {hsearch}</p>:null}</> :null } {unloadingport?<>AT {unloadingport.substring(unloadingport)}</> :null} {origincountry?<>FROM  {origincountry}</> :null}</motion.h3> </Link>
 
    </div>

  
<div className="container">
  </div>
  <div className="row justify-content-center text-center fs-5 fw-bold py-4">
  {/* <Link to="/select-live-data">   <motion.h3 initial={{y:-100}} animate={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} id="darkgradient2" className="text-center bg-secondary fw-bolder py-2"> SEARCH <span>{dataprovider}</span> LIVE  DATA { search||hsearch? <> { search? <><span>OF</span> {search.toUpperCase()}</>:null}{ hsearch? <p>UNDER HSCODE {hsearch}</p>:null}</> :null } {unloadingport?<>AT {unloadingport.substring(unloadingport)}</> :null} {origincountry?<>FROM  {origincountry}</> :null}</motion.h3> </Link> */}
 
    </div>
 
      <div className="container-fluid">
        
        
        <div className="row justify-content-center  " id="spacetheme" >
          <div className="col-lg-2">
            <div className="search-container"data-aos="fade-up">
          <div class="dropup-center dropup" >
  <button class="  btn btn-primary bg-transparent text-secondary dropdown-toggle" style={{border:" transparent 0px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
 IMPORT
  </button>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item fw-bold text-secondary" >IMPORT</a></li>
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
  {hscode.day}/{hscode.month}/{hscode.year}
</div>
  </div>
  <div className="row py-1">
<div className="col-6" id="colname">
  HS Code
</div>
<div className="col-6 p-1">
 {hscode.HS_Code}
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
  Origin Country
</div>
<div className="col-6 p-1">
  {hscode.Country}
</div>
  </div>
  <div className="row py-1">
<div className="col-6" id="colname">
  Unloading Port
</div>
<div className="col-6 p-1">
 {hscode.Foreign_Port}
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
 { records? null:<thead>
    <tr className="bg-primary text-white">
        <th scope="col" >Date</th>
      <th scope="col">HS CODE</th>
      <th scope="col">Product Description</th>
    <th scope="col">Origin Country</th>
    <th scope="col"> Unloading Port</th>
      <th scope="col">Qty</th>
      <th scope="col">Unit</th>
      <th scope="col">Weight (KG)</th>
      
    <th scope="col">Importer Name</th>
     
  
    </tr>
  </thead>
 
 }

  <tbody>
{/*     
  {searchcode.map(searchcode=>(
   
    <tr>
      
    <th  scope="row">{searchcode.hs_code} </th>
    
    <td>{searchcode.Description}</td>
  </tr>      
          
          
        ))} */}
   

{  Scode.slice(0,9).map((Hscode)=>(
    <tr>
      {
      (dataprovider==="IMPORT")? 
      <td>{Hscode.day}/{Hscode.month}/{Hscode.year}</td>
     : <td>{Hscode.Act_Arrival_Date}</td>
    
    }
    {
      (dataprovider==="IMPORT")? 
      <th  scope="row"  ><a href={"/live-data/IMPORT/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
     : null
    }
<td>{Hscode.Products}</td>
{
      (dataprovider==="IMPORT")? 
      <td  scope="row"  >
          {search? <a href={`/live-data/IMPORT/${search}/country-${Hscode.Country}`}> {Hscode.Country}</a>:null
          }  
        </td>
     :<><td>{Hscode.Country_of_Foreign_Port}</td>
     <td>{Hscode.Port_of_Departure}</td>
     </> 
    }

{
      (dataprovider==="IMPORT")? 
     
<td>{ search?<a href={`/live-data/IMPORT/${search}/port-${Hscode.Foreign_Port}`}> {Hscode.Foreign_Port}</a>:null}</td>

      : null
    }
<td>{Hscode.Quantity}</td>
<td>{Hscode.Quantity_Unit}</td>

<td>{Hscode.Weight}</td>
<td><a  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Importer Name</a></td>



</tr>      
          
        ))}
        
{Numcode.slice(0,9).map(Hscode=>(
    
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

{/* <td>{Hscode.Port_of_Departure}</td> */}
{
      (dataprovider=="IMPORT")? 
     
<td>{Hscode.Foreign_Port}</td>

      : null
    }
<td>{Hscode.Quantity}</td>
<td>{Hscode.Quantity_Unit}</td>

<td>{Hscode.Weight}</td>

<td><a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Importer Name</a></td>

</tr>      
    
          
        ))}
       
      {
        
     }
        {Hcode.slice(0,9).map(Hscode=>(
            
    <tr>
       {
      (dataprovider==="IMPORT")? 
      <td>{Hscode.day}/{Hscode.month}/{Hscode.year}</td>
     : <td>{Hscode.Act_Arrival_Date}</td>
    
    }
        {
      (dataprovider==="IMPORT")? 
      <th  scope="row"  ><a href={"/live-data/import/hscode/"+Hscode.HS_Code}>{Hscode.HS_Code}</a></th>
     : null
    }
    
     <td>{Hscode.Products}</td>
     {
    
      (dataprovider==="IMPORT")? 
      <td  scope="row"  >{
        search? <a onClick={()=>{setsport(Hscode.Country)}} href={`/live-data/import/${search}/country-${sport.substring(4,sport.length)}`}> {Hscode.Country}</a>:<a  onClick={()=>setsport(Hscode.Country)} href={`/live-data/import/hscode/${hsearch}/country-${sport.substring(4,sport.length)}`}>{Hscode.Country}</a>
      } </td>
     :<><td>{Hscode.Country_of_Foreign_Port}</td>
     <td>{Hscode.Port_of_Departure}</td>
     </> 
    }
    
    {/* <td>{Hscode.Port_of_Departure}</td> */}
    {
      (dataprovider=="IMPORT")? 
     
<td>{ search?<>  <a onClick={()=>{setsport(Hscode.Foreign_Port)}} href={`/live-data/import/${search}/port-${sport.substring(6,sport.length-2)}`}> {Hscode.Foreign_Port}</a></>:<a onClick={()=>setsport(Hscode.Foreign_Port)} href={`/live-data/import/hscode/${hsearch}/port-${sport.substring(6,sport.length-2)}`}> {Hscode.Foreign_Port}</a>}</td>

      : null
    }
    <td>{Hscode.Quantity}</td>
    <td>{Hscode.Quantity_Unit}</td>

<td>{Hscode.Weight}</td>
<td><a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Importer Name</a></td>
    
    
  </tr>      
          
          
        ))}
  </tbody>
</table>
</div>
{ records? 
  <div className="container">
  <div className=" row justify-content-center text-center">
  <div className="col-8">
  <h3 className="" id="darkgradient2">{records} </h3>
  <h4 id="darkgradient2">Try to search with diffrent keyword,Try searching by hs code</h4>
    <h4 id="darkgradient2">OR</h4>
  <Link to="">  <h4 id="clickable" data-bs-toggle="modal" data-bs-target="#staticBackdrop">You can contact us we will find it for you 😄</h4></Link>
 
    {/* <img src="https://cdn.dribbble.com/users/1033824/screenshots/5905597/404-dribbble.gif" alt="" className="w-50" /> */}
    {/* <img src="https://cdn.dribbble.com/users/57019/screenshots/3062823/dino_bat.gif" alt="" className="w-50" /> */}
    <img src="https://cdn.dribbble.com/users/550484/screenshots/2128340/404-gif.gif" alt="" className="w-50" />
  {/* <img src="https://static.adansitravels.com/assets/whitelable1/img/norecordfound.gif" alt="" className="w-75" /> */}
    {/* <img src="https://miro.medium.com/max/1400/1*qdFdhbR00beEaIKDI_WDCw.gif" width="50%" alt="" /> */}
    <h3 className=" fw-normal" 
    id="oops"
    // style={{marginTop:"-160px",marginLeft:"-20px",color:"#A3E5A3"}}
     >OOPS</h3>
   <br />
   <br />
  
  
  </div>
  
  </div>
  </div>
  : null
}

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
:null
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
      <form  className='' action='https://www.tradeimex.in/us-form.php'  name="myform" method="POST">
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
                    <input type="tel" required    className="form-control" id="phone" placeholder="Phone" name="ber"/>
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
{/* < Select options={countrycounts.values}/> */}
 {countrycounts.map((country)=>{

const  entries =Object.entries(country)
console.log(entries)
let entry
const entryData= entries.map(([key,val]=entry)=>{
  <p>${key} ${val}</p>
  console.log(key+val);

})

 }
    
    )}
    
{records?null:
    <div className="container py-3">
    <div className="row justify-content-around " >
    <h3 id="darkgradient2">FILTER BY:</h3>     
 
      { (dataprovider=="EXPORT")?
       <>
       <div className="col-lg-4" >
              <h3 id="darkgradient2" className="fw-bold text-center">Departure PORT</h3>
               <div className="shadow p-3" style={{height:"100px",overflow:"auto",borderRadius:"5%"}}>
       {  Numcode.map((Hscode)=>(
         
         
          <p id="bluee" onClick={postCode} onMouseEnter={()=> portvalue(Hscode.Port_of_Departure)} > {Hscode.Port_of_Departure }</p> 
       
         
                 
               ))} 
       {  Scode.map((Hscode)=>(
          <p id="bluee" onClick={postCode} onMouseEnter={()=> portvalue(Hscode.Port_of_Departure)} > {Hscode.Port_of_Departure }</p> 
       
          
                 
               ))}
               {  Hcode.map((Hscode)=>(
          <p id="bluee" onClick={postCode} onMouseEnter={()=> portvalue(Hscode.Port_of_Departure)} > {new Set(Hscode.Port_of_Departure) }</p> 
       
          
                 
               ))}
                   </div>
       </div>
       <h1>{arrival}</h1>
       <div className="col-lg-4" >
         <h3 className="fw-bold text-center" id="darkgradient2">Destination COUNTRY</h3>
         <div className="shadow p-3" style={{height:"100px",overflow:"auto",borderRadius:"5%"}}>
                    
                   {  Hcode.map((Hscode)=>(
                      <p id="bluee" onClick={postCode} onMouseEnter={()=> arrivalValue(Hscode.Foreign_Port)}   > {new Set(Hscode.Country_of_Foreign_Port)}</p> 
                   
                      
                             
                           ))}
                           
                   {  Numcode.map((Hscode)=>(
                      <p id="bluee" onClick={postCode} onMouseEnter={()=> arrivalValue(Hscode.Foreign_Port)}  > {Hscode.Country_of_Foreign_Port}</p> 
                   
                      
                             
                           ))}
                           
                   {  Scode.map((Hscode)=>(
                      <p id="bluee" onClick={postCode} onMouseEnter={()=> arrivalValue(Hscode.Foreign_Port)}  > {Hscode.Country_of_Foreign_Port}</p> 
                   
                      
                             
                           ))}
                               </div>
       </div>
       </>
       :
<>

<div className="col-lg-4 col-6" >
       <h3 id="darkgradient2" className="fw-bold text-center">Unloading PORT</h3>
        <div className="shadow p-3" style={{height:"200px",overflow:"auto",borderRadius:"5%"}}>
        
        {unloadingport?<p id="clickable" onClick={clearport} >View all Ports</p> 
: <>

{
  // console.log("HII",portcounts)
  // console.log(portcounts.indexOf("MY, MALAYSIA"))
  // countrycounts.map(()=>(
    
  //    console.log("MAP ")
    
  // ))

}

{
console.log(typeof(null))
}
{portcounts}
        {  categoryport.map((Hscode)=>(
          search?
          <p id="clickable"  onClick={(event) => { (unloadingport=Hscode); filterport();}}  >{Hscode}</p>
        //  <a href={`/live-data/IMPORT/${search}/port-${Hscode}`}> <p > {Hscode}</p></a> 
       :      <p id="clickable" onClick={(event) => { (unloadingport=Hscode); filterport();}} >{Hscode.substring(6,Hscode.length-2)}</p>
       
      //  <a href={`/live-data/IMPORT/hscode/${hsearch}/port-${Hscode}`}> <p> {Hscode}</p></a> 
      
          
                 
               ))} 
               </>
}                             
           </div>
</div>


<div className="col-lg-4 col-6" >

  <h3 className="fw-bold text-center" id="darkgradient2">ORIGIN COUNTRY</h3>
  <div className="shadow p-3" style={{height:"200px",overflow:"auto",borderRadius:"5%"}}>


  {
  origincountry?<p id="clickable" onClick={clearcountry} >View all Country</p> :
<>
        {  categorycountry.map((Hscode)=>(
          search?
         <p id="clickable" onClick={(event) => { (origincountry=Hscode); filterhandler();}}   > {Hscode}</p> 
        
        
        
         :
         <p id="clickable" onClick={(event) => { (origincountry=Hscode); filterhandler();}} > {Hscode}</p> 
       
        //  <a href={`/live-data/IMPORT/hscode/${hsearch}/country-${Hscode}`}> <p> {Hscode}</p></a> 
      
          
                 
               ))} 
  </>      
        }
                        </div>
</div>

<div className="col-lg-4 col-6" >
 
  <>
  <h3 className="fw-bold text-center" id="darkgradient2">HSCODE</h3>

  <div className="shadow p-3" style={{height:"200px",overflow:"auto",borderRadius:"5%"}}>

    {  codecategory.map((Hscode)=>(
          search&&hsearch?
          <p id="clickable" onClick={clearcode} >View all Hs Code</p>
          :   
       <p id="clickable" onClick={(event) => { (hsearch=Hscode); filtercode();}}> {Hscode}</p> 
      
          
                 
               ))}  
                 
                        </div>
                        </>



</div>

</>
      }
     

    </div>
    </div>
 }      
{/* {Hscode.hs_code} */}

    </div>
  );
};

export default Dataimport;