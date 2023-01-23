import React from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Footer() {
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [phone,setPhone] =useState('')
  const [company,setCompany] =useState('')
  const [role,setRole] =useState('')
  const [message,setMessage] =useState('')
 
  const[data,setData] = useState([])

  const submitHandler = async (e)=>{
      e.preventDefault()
      try {
    await axios.post("http://localhost:4800/", {
    
    name,
    email,
    phone,
    company,
    role,
    message

    })

  } catch (error) {
    console.error(error)
  }     
        
             const newuser = {
          name:name,
          email:email,
          phone:phone,
          company:company,
          role:role,
          message:message
      }
      
      console.log(newuser);
      
      setData([newuser])
      setName("")
      setEmail("")
      setCompany("")
      setPhone("")
      setRole("")
      setMessage("")
       
  }
  return (
    <div>
        <footer  className="footer-08 shadow p-5 mb-5  rounded">
<div className="container-fluid px-lg-5">
<div className="row">
<div className="col-md-9 py-5">
<div className="row">
<div className="col-md-4 mb-md-0 mb-4">
<h3 className="footer-heading">About us</h3>
<p>
usimportdata is one of the best companies when it comes to Import Export Data in the United States. We follow our cutting-edge techniques to design US Trade Data along with US Import Data and USA Export Data and provide you with the best and error-free database. Contact us now for a quote.
</p>
<ul className="ftco-footer-social p-0">
      <a href="https://www.facebook.com/tradeimex">  <i className='fab px-2 fa-2x fa-facebook'> </i></a>
      <a href="https://twitter.com/TradeImeX"> <i className='fab px-2 fa-2x fa-twitter'> </i></a> 
      <a href="https://www.linkedin.com/company/tradeimex/?viewAsMember=true">  <i className='fab px-2 fa-2x fa-linkedin'> </i></a>
      <a href="https://www.youtube.com/channel/UCTHU41uHt6xOub4XDy2Egxw">  <i className='fab px-2 fa-2x fa-youtube text-danger'> </i></a>
    
</ul>
</div>
<div className="col-md-8">
<div className="row justify-content-center">
<div className="col-md-12 col-lg-9">
<div className="row">
<div className="col-md-6 mb-md-0 mb-4">
<h3 className="footer-heading">Company</h3>
<ul className="list-unstyled">
<Link to="/about"><li><a  id="clickable" href="" className="py-1 d-block ">ABOUT US</a></li></Link>

<li><a id="clickable" href="https://tradeimex.in/blogs/" target="_blank" className="py-1 d-block ">BLOGS</a></li>

<li><a id="clickable" href="https://www.tradeimex.in/our-clients" target="_blank" className="py-1 d-block ">CLIENTS</a></li>
<Link to="/faq"> <li><a id="clickable" href="#"  className="py-1 d-block ">FAQS</a></li></Link>
<Link to="/contact"> <li><a id="clickable" href="#" className="py-1 d-block ">CONTACT US</a></li></Link>

</ul>
</div>
<div className="col-md-6 mb-md-0 mb-4">
<h3 className="footer-heading">Our Data</h3>
<ul className="list-unstyled">
<li><a id="clickable" href="/import-data" className="py-1 d-block ">IMPORT DATA</a></li>
<li><a id="clickable" href="/export-data" className="py-1 d-block ">EXPORT DATA</a></li>
<li><a id="clickable" href="https://www.tradeimex.in/global-trade-data" target="_blank" className="py-1 d-block ">GLOBAL TRADE DATA</a></li>

<li><a id="clickable" href="/select-live-data" className="py-1 d-block ">SEARCH LIVE DATA</a></li>

</ul>
</div>

</div>
</div>
</div>
</div>
</div>
<div className="row mt-md-5">

</div>
</div>
<div className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5 shadow p-3 mb-5  rounded smallform" id='footercontact' >
<h3 className="footer-heading footer-heading-white ">Contact us</h3>
<form  className='' action='https://www.tradeimex.in/us-form.php'  name="myform" method="POST">
                <div className="row">
                    <div className="col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputName4 "  >Name</label>
                        <input type="Name" value={name} required onChange={(e)=>setName(e.target.value)} className="form-control" id="name" placeholder="Name" name="name"/> <span className="formerror"></span>
                    </div>
                    <div className="form-group col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputEmail4" >email</label>
                        <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="email" placeholder="email" name="email"/>
                    </div>
                </div>
<div className="row">
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress" >Phone</label>
                    <input type="tel" required value={phone}  onChange={(e)=>setPhone(e.target.value)} className="form-control" id="phone" placeholder="Phone" name="number"/>
                </div>
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress2" >Company</label>
                    <input type="text" value={company} required onChange={(e)=>setCompany(e.target.value)} className="form-control" id="inputAddress2" placeholder="Company Name" name="company"/>
                </div>
                </div>
                <div className="form-group text-center ">
                    <label htmFor="inputState" >IMPORT/EXPORT</label>
                    <select id="inputState" required value={role} onChange={(e)=>setRole(e.target.value)} className="form-control" name="role">
                        <option selected="">Choose...</option>
                        <option>IMPORT</option>
                        <option>EXPORT</option>
                        <option>BOTH</option>
                    </select>
                </div>
                <div className="form-group text-center">
                    <label htmFor="exampleFormControlTextarea1" >Your Message</label>
                    <textarea className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} type="txt" id="Message" rows="4" name="message"></textarea>
                </div>

                
                <button type="submit"  name="submit_form" value="Send" className="custom-btn btn-16" id="lightblue">SUBMIT</button>
            </form>
</div>
<motion.div initial={{x:"-100vh",opacity:0.7}} whileInView={{x:[-250,-400,0],opacity:1}} transition={{type:"tween",duration:1, ease:'easeInOut' }} className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5 shadow p-3 mb-5  rounded bigform" id='footercontact' >
<h3 className="footer-heading footer-heading-white ">Contact us</h3>
<form  className='' action='https://www.tradeimex.in/us-form.php'  name="myform" method="POST">
                <div className="row">
                    <div className="col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputName4 "  >Name</label>
                        <input type="Name" value={name} required onChange={(e)=>setName(e.target.value)} className="form-control" id="name" placeholder="Name" name="name"/> <span className="formerror"></span>
                    </div>
                    <div className="form-group col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputEmail4" >email</label>
                        <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="email" placeholder="email" name="email"/>
                    </div>
                </div>
<div className="row">
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress" >Phone</label>
                    <input type="tel" required value={phone}  onChange={(e)=>setPhone(e.target.value)} className="form-control" id="phone" placeholder="Phone" name="number"/>
                </div>
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress2" >Company</label>
                    <input type="text" value={company} required onChange={(e)=>setCompany(e.target.value)} className="form-control" id="inputAddress2" placeholder="Company Name" name="company"/>
                </div>
                </div>
                <div className="form-group text-center ">
                    <label htmFor="inputState" >IMPORT/EXPORT</label>
                    <select id="inputState" required value={role} onChange={(e)=>setRole(e.target.value)} className="form-control" name="role">
                        <option selected="">Choose...</option>
                        <option>IMPORT</option>
                        <option>EXPORT</option>
                        <option>BOTH</option>
                    </select>
                </div>
                <div className="form-group text-center">
                    <label htmFor="exampleFormControlTextarea1" >Your Message</label>
                    <textarea className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} type="txt" id="Message" rows="4" name="message"></textarea>
                </div>

                
                <button type="submit"  name="submit_form" value="Send" className="custom-btn btn-16" id="lightblue">SUBMIT</button>
            </form>
</motion.div>
</div>
</div>
</footer>
<p className="copyright text-center">
Copyright ©{(new Date().getFullYear())} All rights reserved | <i className="ion-ios-heart" aria-hidden="true"></i> by <a  href="https://tradeimex.in" target="_blank">TradeImeX</a>
</p>
<p className='text-center'>Please Read our <Link to="/terms-of-use"> TERMS OF USE</Link>, <Link to="/privacy-policy"> PRIVACY POLICY</Link>& <Link to="/disclaimer">DISCLAIMER</Link> 
</p>
    </div>
  )
}
