import {RiContactsLine} from 'react-icons/ri'
// import {GrLocation} from 'react-icons/gr'
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephoneInbound} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import './Contact.css'
import { MainHeading } from '../../components/index'

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <MainHeading 
            properties = {{
                icon: <RiContactsLine />,
                title: 'Contact Us',
                subtitle: 'Feel free to drop us a line!',
            }}
        />
        <div className="container-contact">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon">
                        <CiLocationOn className='contat-icon' />
                    </div>
                    <div className="text">
                        <h3>Adress</h3>
                        <p>Lebanon, Tripoli</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsTelephoneInbound className='contact-icon' />
                    </div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+961 76865776</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <AiOutlineMail className='contact-icon' />
                    </div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>konmostakbalak@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input id="nameMsg" type="text" required />
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input id="emailMsg" type="email" required />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <textarea id="areaMsg" required="required"></textarea>
                        <span>Type your message...</span>
                    </div>
                    <div className="inputBox">
                        <input id="sendMsg" type="submit" value="Send" />
                        <p id="textMsg"></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
