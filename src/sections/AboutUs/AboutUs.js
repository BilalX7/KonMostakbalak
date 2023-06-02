import './AboutUs.css'

// import Team1 from '../../assets/imgs/team1.png'
// import Team2 from '../../assets/imgs/team2.png'
// import Team3 from '../../assets/imgs/team3.png'
// import Team4 from '../../assets/imgs/team4.jpg'

import { MainHeading, MemberCard } from '../../components/index' 

import {RiTeamLine} from 'react-icons/ri'
// import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

import CardMemberData from '../../data/CardMemberData'

const AboutUs = () => {

    const cards = CardMemberData.map(card => {
        return <MemberCard key={card.id} image={card.image} name={card.name} position={card.position} memberInfo={card.memberInfo} social={card.social} />
    })


  return (
    <section className='section-team'>
      <div className='container'>
        <MainHeading 
            properties = {{
                icon: <RiTeamLine />,
                title: "About Us",
                subtitle: "Meet Our Team",
            }}
        />
        <div className='row'>
            {cards}
            {/* <MemberCard 
                properties = {{
                    image: Team1,
                    name: "Joe",
                    position: "Chief Executive Officier",
                    memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
                    social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>]
                }}
            />
            <MemberCard 
                properties = {{
                    image: Team2,
                    name: "Bilal Koubar",
                    position: "Full-stack developer",
                    memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
                    social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>]
                }}
            />
            <MemberCard 
                properties = {{
                    image: Team3,
                    name: "Rama Diab",
                    position: "Full-stack developer",
                    memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
                    social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>]
                }}
            />
            <MemberCard 
                properties = {{
                    image: Team4,
                    name: "Wissam",
                    position: "Full-stack developer",
                    memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
                    social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>]
                }}
            /> */}
            {/* <div className='col-lg-6 col-sm-12 mt-4'>
                <div className='member d-flex align-items-start'>
                    <div className='teampic'>
                        <img src={Team1} alt='team1' className='img-fluid' />
                    </div>
                    <div className='member-info'>
                        <h4>Joe</h4>
                        <span>Chief Executive Officier</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                        <div className='social'>
                            <a href='#1'><BsFacebook className='social-icon' /></a>
                            <a href='#1'><BsInstagram className='social-icon'/></a>
                            <a href='#1'><BsLinkedin className='social-icon' /></a>
                            <a href='#1'><BsWhatsapp className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 mt-4'>
                <div className='member d-flex align-items-start'>
                    <div className='teampic'>
                        <img src={Team2} alt='team2' className='img-fluid' />
                    </div>
                    <div className='member-info'>
                        <h4>Bilal</h4>
                        <span>Full-stack developer</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                        <div className='social'>
                            <a href='#1'><BsFacebook className='social-icon' /></a>
                            <a href='#1'><BsInstagram className='social-icon' /></a>
                            <a href='#1'><BsLinkedin className='social-icon' /></a>
                            <a href='#1'><BsWhatsapp className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 mt-4'>
                <div className='member d-flex align-items-start'>
                    <div className='teampic'>
                        <img src={Team3} alt='team3' className='img-fluid' />
                    </div>
                    <div className='member-info'>
                        <h4>Rama</h4>
                        <span>Full-stack developer</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                        <div className='social'>
                            <a href='#1'><BsFacebook className='social-icon' /></a>
                            <a href='#1'><BsInstagram className='social-icon' /></a>
                            <a href='#1'><BsLinkedin className='social-icon' /></a>
                            <a href='#1'><BsWhatsapp className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 mt-4'>
                <div className='member d-flex align-items-start'>
                    <div className='teampic'>
                        <img src={Team4} alt='team4' className='img-fluid' />
                    </div>
                    <div className='member-info'>
                        <h4>Wissam</h4>
                        <span>Full-stack developer</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                        <div className='social'>
                            <a href='#1'><BsFacebook className='social-icon' /></a>
                            <a href='#1'><BsInstagram className='social-icon' /></a>
                            <a href='#1'><BsLinkedin className='social-icon' /></a>
                            <a href='#1'><BsWhatsapp className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
