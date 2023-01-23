import axios from 'axios';
import {motion} from 'framer-motion'
import React,{useState} from 'react'
import { BsPhoneVibrateFill } from 'react-icons/bs';
export default function Contact() {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [phone,setPhone] =useState('')
    const [company,setCompany] =useState('')
    const [role,setRole] =useState('')
    const [message,setMessage] =useState('')
   
    const[data,setData] = useState([])

    const submitHandler = async (e)=>{
        e.preventDefault()
        const newuser = {
            name:name,
            email:email,
            phone:phone,
            company:company,
            role:role,
            message:message
        }
        
          
        setData([newuser])
        setName("")
        setEmail("")
        setCompany("")
        setPhone("")
        setRole("")
        setMessage("")
alert("SENT")
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
        
        
    }
    return (
        <div>
            <div className="container-fluid cbanner" >
                <div className="row justify-content-around">
                <div className="col-lg-5 p-4 ">
                    <motion.h3  className=' fw-bold ' >
                    CONNECT WITH US
                    </motion.h3>
                    <p>
                    Thanks for visiting usimportdata! We hope that you have got what you were looking for. If not, then don’t worry we are online and ready to assist you with your queries and doubts. You can connect with us through multiple ways listed below. We will be more than happy to assist and guide you further with your queries and will try our best to provide you with a resolution.
                    </p>
                </div>
                <motion.div initial={{y:-100}} whileInView={{y:0}} transition={{ type:"spring", stiffness:300,damping:10,bounce:1}} className="col-lg-4 order-1 order-lg-2">
                    <img src="https://i.pinimg.com/originals/a0/b0/b0/a0b0b0f6b34f192fbb28c4104eb5c5f3.png" alt="" className="w-100" />
                </motion.div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        {/* <!--The div element for the map --> */}
                        <div id="map" data-aos="zoom-in">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3174281846846!2d77.13426967438242!3d28.710058180557922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d071148ef8341%3A0xe55ab5577ff48f81!2sTradeImex%20-%20Import%20Export%20Data%20Provider%2C%20Data%20Analytic%20%26%20Shipment%20Services!5e0!3m2!1sen!2sin!4v1669892572411!5m2!1sen!2sin" width="100%"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                       </div>
                    </div>
                    <div className="col-lg-6 text-dark"  >
                        <h3 className=" " style={{ fontWeight: "bold", color: "black" }}>
                            ADDRESS

                        </h3>
                        <p className='fs-4'>
                            372, 3rd floor, RU BLOCK, Pitampura 110034, New Delhi
                        </p>
                        <h3 className=" " style={{ fontWeight: "bold", color: "black" }}>
                            PHONE

                        </h3>

                        <i className='fab px-2  fa-number'><BsPhoneVibrateFill />
                            +91-7042034462 </i>
                        <br />
                        <i className='fab px-2  fa-number'><BsPhoneVibrateFill />
                        +91-9319646667 </i>
                            <h3 className="  " style={{ fontWeight: "bold", color: "black" }}>
                            EMAIL

                        </h3>
                       <p className='fs-4'>
                       <a href="mailto:info@tradeimex.in"> info@tradeimex.in </a>
                        <br />
                        <a href="mailto:sales@tradeimex.in"> sales@tradeimex.in </a>
                        
                        </p>
                        <h3 className="  " style={{ fontWeight: "bold", color: "black" }}>
                            SOCIAL

                        </h3>
                       
      <a href="https://www.facebook.com/tradeimex">  <i className='fab px-2 fa-2x fa-facebook'> </i></a>
      <a href="https://twitter.com/TradeImeX"> <i className='fab px-2 fa-2x fa-twitter'> </i></a> 
      <a href="https://www.linkedin.com/company/tradeimex/?viewAsMember=true">  <i className='fab px-2 fa-2x fa-linkedin'> </i></a>
      <a href="https://www.youtube.com/channel/UCTHU41uHt6xOub4XDy2Egxw">  <i className='fab px-2 fa-2x fa-youtube text-danger'> </i></a>
    

                    
                    </div>
                    
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10" data-aos="fade-left">
                    <form  onSubmit={submitHandler} className='p-5 my-5' action='us-form.php' id="form" name="myform" method="POST">
                <div className="row">
                    <div className="col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputName4 "  >Name</label>
                        <input type="Name" required value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" placeholder="Name" name="name"/> <span className="formerror"></span>
                    </div>
                    <div className="form-group col-md-6 col-6 col-xs-6 text-center">
                        <label htmFor="inputEmail4" >email</label>
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="email" placeholder="email" name="email"/>
                    </div>
                </div>
<div className="row">
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress" >Phone</label>
                    <input type="tel" required value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="phone" placeholder="Phone" name="number"/>
                </div>
                <div className=" col-md-6 col-6 text-center col-xs-6">
                    <label htmFor="inputAddress2" >Company</label>
                    <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} className="form-control" id="inputAddress2" placeholder="Company Name" name="company"/>
                </div>
                </div>
                <div className="form-group text-center ">
                    <label htmFor="inputState" >IMPORT/EXPORT</label>
                    <select id="inputState"value={role} onChange={(e)=>setRole(e.target.value)} className="form-control" name="role">
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
                </div>
            </div>
        </div>
    )
}
