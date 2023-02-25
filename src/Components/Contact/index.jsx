import React, { useState } from 'react';
import {BiSend} from 'react-icons/bi'
import {AiFillLinkedin,AiFillGithub,AiOutlineWhatsApp} from 'react-icons/ai'
import {RxReset} from 'react-icons/rx'
import {SiLeetcode} from 'react-icons/si'
import {ReactComponent as Contact_img} from '../../Assets/Contact.svg';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.scss"

const Contact = () =>{
    const [username,setUserName] = useState('');
    const [mail,setMail] = useState('');
    const [desc,setDesc] = useState('');
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_2yvf8lr','template_dhy4q7w',e.target,'sB99l46nzAZ-CCuM0')
        .then((result)=>{
            console.log(result);
            notify();
            setMail('');
            setUserName('');
            setDesc('');
        })
        .catch(err=>console.log(err))
    }
    function reset(){
        setMail('');
        setUserName('');
        setDesc('');
    }
    const notify = () => toast("Mail Sent Successfully thank you!");
    return(
        <div className="Contact" id='Contact'>
            <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <div className="Details">
                <div className="Info">
                    <h1>Feel Free <span>2</span> Contact</h1>
                    <p>Together Let's make better tomorrow...!</p>
                    <div className="media">
                        <a href="https://www.linkedin.com/in/kavin-kumar-m-aaba5520a/" target="_blank">
                            <AiFillLinkedin/>
                        </a>
                        <a href="https://github.com/Kavin-kumar10" target="_blank">
                            <AiFillGithub/>
                        </a>
                        <a href="https://leetcode.com/user8949p/" target="_blank">
                            <SiLeetcode/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=918344442124">
                            <AiOutlineWhatsApp/>
                        </a>
                    </div>
                </div>
                <div style={{position:"relative"}} className = "Map">
                <iframe id='iframe' width="700" height="300" src="https://maps.google.com/maps?width=700&amp;height=700&amp;hl=en&amp;q=theni+(Locate)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                <div style={{position:"absolute",width:"80%",bottom:"10px",left:"0px",marginLeft:"auto",marginRight:"auto",color:"#000",textAlign:"center"}}><small style={{lineHeight:"1.8",fontSize:"2px",background:"#fff"}}>Powered by<a href="http://www.googlemapsgenerator.com/fr/">gmapgen fr</a> & <a href="https://theimpossiblequiz.info/the-impossible-quiz-book/">the impossible quiz book ch 3 answers</a></small></div>
                </iframe>
                </div>
            </div>

            <div className="form">
                <div className="Icon">
                    <Contact_img id="Contact_img"/>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="input">
                        <h2>Username</h2>
                        <input name='name' value={username} type="text" placeholder='Kavin Kumar M' onChange={(e)=>{setUserName(e.target.value)}} required/>
                    </div>
                    <div className="input">
                        <h2>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <input name='User-email' value={mail} type="email" placeholder='kavinkumar****@gmail.com' onChange={(e)=>{setMail(e.target.value)}} required/>               
                    </div>                 
                    <div className="input">
                        <h2>Desc &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <textarea name='message' id="textarea" value={desc} placeholder='Description' cols="30" rows="10" onChange={(e)=>{setDesc(e.target.value)}} required/>
                    </div>  
                    <div className="button">
                        <button id='submit' type='submit'>Send <BiSend id='btn' size={25}/></button>
                        <button id='reset' type = "reset" onClick={reset}>Reset <RxReset id='btn' size={25}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

