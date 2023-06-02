import './Departments.css'

import EngineeringBoxImage from '../../assets/imgs/eng.jpg'
import EducationBoxImage from '../../assets/imgs/edu2.jpg'
import MarketingBoxImage from '../../assets/imgs/mar-box.jpg'

import {BsBuildings} from 'react-icons/bs'

import { MainHeading, DepartmentBox } from '../../components/index'

const Departments = () => {
  return (
    <section id='departments' className='departments'>
        <MainHeading    
                properties = {{
                    icon: <BsBuildings />,
                    title: 'Departements',
                    subtitle: 'Discover More'
                }}
            />
            <div className='container'>
                <DepartmentBox
                    properties = {{
                        className: "box eng-box",
                        image: EngineeringBoxImage,
                        departmentTitle: "Engineering",
                        departmentInfo: "Engineering is one of the most part we consider Engineering is one of the most part we consider",
                        reference: "/engineering",
                        linkName: "More",
                    }} 
                />
                <DepartmentBox
                    properties = {{
                        className: "box edu-box",
                        image: EducationBoxImage,
                        departmentTitle: "Education",
                        departmentInfo: "Education is one of the most part we consider Engineering is one of the most part we consider",
                        reference: "/#",
                        linkName: "More",
                    }} 
                />
                <DepartmentBox
                    properties = {{
                        className: "box mar-box",
                        image: MarketingBoxImage,
                        departmentTitle: "Marketing",
                        departmentInfo: "Marketing is one of the most part we consider Engineering is one of the most part we consider",
                        reference: "/#",
                        linkName: "More",
                    }} 
                />
                {/* <div className='box eng-box'>
                    <div className='img-holder'>
                        <img src={EngLogo} alt=''></img>
                    </div>
                    <h2>Engineering</h2>
                    <p>Engineering is one of the most part we consider Engineering is one of the most part we consider</p>
                    <a href='#1'>More</a>
                </div>
                <div className='box edu-box'>
                    <div className='img-holder'>
                        <img src={EduBox} alt=''></img>
                    </div>
                    <h2>Education</h2>
                    <p>Education is one of the most part we consider Engineering is one of the most part we consider</p>
                    <a href='#1'>More</a>
                </div> */}
                {/* <div className='box mar-box'>
                    <div className='img-holder'>
                        <img src={MarBox} alt=''></img>
                    </div>
                    <h2>Marketing</h2>
                    <p>Marketing is one of the most part we consider Engineering is one of the most part we consider</p>
                    <a href='#1'>More</a>
                </div> */}
            </div>
            
    </section>
  )
}

export default Departments
