import React from 'react';
import {BiSend,BiReset} from 'react-icons/bi'
import {ReactComponent as Contact_img} from '../../Assets/Contact.svg';
import "./Contact.scss"

const Contact = () =>{
    return(
        <div className="Contact" id='Contact'>
            <div className="Details">
                <div className="Info">
                    <h1>Feel Free to Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate error laborum. Qui incidunt earum quae rerum laborum eius mollitia eum magni omnis ratione praesentium repellendus exercitationem quia ea ab tempore ex, similique ipsam consequuntur quam molestias? Officiis similique quam aperiam aut harum voluptas architecto dolores eius, eveniet enim beatae perspiciatis assumenda nulla culpa ipsa eaque iure quidem reprehenderit accusamus autem qui? Magnam exercitationem repellat dolorem architecto molestias deleniti dolor autem laboriosam nulla, nisi, culpa accusamus distinctio? Delectus commodi quam atque distinctio ipsum recusandae architecto sunt maxime vitae eum consequuntur inventore natus earum rerum error voluptate, porro reiciendis quisquam? Cum?</p>
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
                <form action="#">
                    <div className="input">
                        <h2>Username</h2>
                        <input type="text" placeholder='Kavin Kumar M'/>
                    </div>
                    <div className="input">
                        <h2>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <input type="email" placeholder='kavinkumar****@gmail.com'/>               
                    </div>                 
                    <div className="input">
                        <h2>Desc &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <textarea id="textarea" placeholder='Description' cols="30" rows="10"/>
                    </div>  
                    <div className="button">
                        <button id='submit' type='submit'>Send <BiSend id='btn' size={25}/></button>
                        <button id='reset' type = "reset">Reset <BiReset id='btn' size={25}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

