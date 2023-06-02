import Team1 from '../assets/imgs/team1.png'
import Team2 from '../assets/imgs/team2.png'
import Team3 from '../assets/imgs/team3.png'
import Team4 from '../assets/imgs/team4.jpg'

import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

const CardMemberData = [
    {
        id: "card_member_0",
        image: Team1,
        name: "Joe",
        position: "Chief Executive Officier",
        memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
        social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>],
    },
    {
        id: "card_member_1",
        image: Team2,
        name: "Bilal Koubar",
        position: "Full-Stack Developer",
        memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
        social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>],
    },
    {
        id: "card_member_2",
        image: Team3,
        name: "Rama Diab",
        position: "Full-Stack Developer",
        memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
        social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>],
    },
    {
        id: "card_member_3",
        image: Team4,
        name: "Wissam",
        position: "Full-Stack Developer",
        memberInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.",
        social: [<BsFacebook className='social-icon'/>, <BsInstagram className='social-icon'/>, <BsLinkedin className='social-icon' />, <BsWhatsapp className='social-icon'/>],
    },
]

export default CardMemberData