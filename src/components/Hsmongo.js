import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Hsmongo() {
    const [Hcode, setHcode] = useState([]);
    useEffect(() => {
    
        const fetchAllHscode = async () => {
           

          try {
            
          var res = await axios.get("http://localhost:5000/");
       
            setHcode(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllHscode();
      }, []);
let key
    const [Scode, setScode] = useState([]);
    let name=key
        const fetchAllcode = async (e) => {
            e.preventDefault()
          try {
            
          var res = await axios.post(`http://localhost:5000/search/${key}`);
       
            setScode(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllcode();
      
        
    return (
    <>
    
    <div className="container">
    <form action=""> 
    <input type="text" value={name} onChange={(e)=>setScode(e.target.value)} />
    <button type="submit" className="btn btn-primary" onClick={fetchAllcode}>Search</button>

    </form>
    <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">HS CODE</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {Scode.map(Hscode=>(
    <tr>
    <td  scope="row">{Hscode.hs_code}</td>
    
    <td>{Hscode.Description}</td>
  </tr>      
          
          
        ))}
  {Hcode.map(Hscode=>(
    <tr>
    <td  scope="row">{Hscode.hs_code}</td>
    
    <td>{Hscode.Description}</td>
  </tr>      
          
          
        ))}
        </tbody>
</table>
</div>
    
    
    
    
    </>
  )
}
