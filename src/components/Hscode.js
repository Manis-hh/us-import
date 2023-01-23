import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router,Link,Route, useParams } from "react-router-dom";
import { Navigate } from "react-router";
var q ="http://localhost:4200/"

const Hscode = () => {
 const params = useParams();
 
  const [Hcode, setHcode] = useState([]) ;
  const [Scode, setScode] = useState([]);

  useEffect(() => {
    
    const fetchAllHscode = async () => {
      try {
        
      var res = await axios.get(q);
   
        setHcode(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHscode();
  }, []);
  const searchDesc =()=>{

  }

    
    const [Numcode, setNumcode] = useState([]);

    const searchNum=()=>{
  }
  
  
  const [Name, setName] = useState([])
  const hsnum = params.Name
  console.log("THIS IS ",{Name});
  
  const postName = async(e)=> {
    
		e.preventDefault()
  	
    try {
			await axios.post("http://localhost:4200/search/", {
			
      Name
			})
      
      var res = await axios.get("http://localhost:4200/search/");
      // setName(res.data)
        console.log(res.data)
        
		} catch (error) {
			console.error(error)
		}
    
    const fetchAllHscode = async () => {
      try {
        
      var res = await axios.get("http://localhost:4200/search/");
        
      console.log(res.data)
        setScode(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    // setScode("")
    fetchAllHscode();
    setName("")
    setHcode([])
    setNumcode([])
      
	}
  
 
 let [code, setcode] = useState([])
  const postCode = async(e)=> {
    
		e.preventDefault()
    
  	try {
			await axios.post("http://localhost:4200/searchcode/", {
			
      code

			})
		} catch (error) {
			console.error(error)
		}

    var res = await axios.get("http://localhost:4200/searchcode/");
    var x = (res.data)
     console.log(x)
    
     const fetchAllcode = async () => {
      try {
        
      var res = await axios.get("http://localhost:4200/searchcode/");
   
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
     


	}

  return (

<div>
      <h1 id="hs" className="text-center">HS CODE</h1>
      <div className="container">
     
        <div className="row justify-content-evenly">
<div className="col-lg-1 col-6" style={{display:"flex"}}>
<form onSubmit={postName}>

     <div class="search-container">
        <input type="text" value={Name} onKeyUp={searchDesc} onChange={(e)=>setName(e.target.value)}  name="search" placeholder="Search...Description" class="search-input"/>
        <a href="#" type="submit" class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
    </div>
    </form>

     </div>
  {/* <div className="search">
    <i className="fa fa-search"></i>
    <input type="text" value={Name} onKeyUp={searchDesc} onChange={(e)=>setName(e.target.value)}   className="form-control" placeholder="Have a question? Ask Now"/>
    <button type="submit" className="btn btn-primary" >Search</button>
  </div>
   */}


        <div className="col-lg-1 col-6" style={{display:"flex"}}>
        <form onSubmit={postCode}>

     <div class="search-container">
        <input type="text" onClick={searchNum()} value={code} onChange={(e)=>setcode(e.target.value)}  name="search" placeholder="Search...HS-CODE" class="search-input"/>
        <a href="#" type="submit"  class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
    </div>
    </form>

     </div>

  {/* <div className="search">
    <i className="fa fa-search"></i>
    <input type="text" value={code} onChange={(e)=>setcode(e.target.value)}   className="form-control" placeholder="Have a question? Ask Now"/>
    <button type="submit" onClick={searchNum}  className="btn btn-primary">Search</button>
  </div> */}
  


</div>

      <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">HS CODE</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
{/*     
  {searchcode.map(searchcode=>(
   
    <tr>
      
    <th  scope="row">{searchcode.hs_code} </th>
    
    <td>{searchcode.Description}</td>
  </tr>      
          
          
        ))} */}

{  Scode.map((Hscode)=>(
    <tr>
    <th  scope="row">{Hscode.hs_code}</th>
    
    <td>{Hscode.Description}</td>
  </tr>      
          
          
        ))}
        
{Numcode.map(Hscode=>(
    <tr>
    <th  scope="row">{Hscode.hs_code}</th>
    
    <td>{Hscode.Description}</td>
  </tr>      
          
          
        ))}
        {Hcode.map(Hscode=>(
    <tr>
    <th  scope="row">{Hscode.hs_code}</th>
    
    <td>{Hscode.Description}</td>
  </tr>      
          
          
        ))}
  </tbody>
</table> 
</div>   
{/* {Hscode.hs_code} */}
    </div>
  );
};

export default Hscode;