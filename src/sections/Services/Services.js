import './Services.css'

import {MainHeading, ServicesBox} from '../../components/index'

import {GrServices} from 'react-icons/gr'
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'
import {CgWebsite} from 'react-icons/cg'
import {SiMaterialdesignicons, SiGooglemarketingplatform} from 'react-icons/si'

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <MainHeading 
            properties = {{
                icon : <GrServices />,
                title: "Services",
                subtitle: "What We Do",
            }}
        />
        <div className='services-container'>
            <div className='row'>
                <ServicesBox 
                    properties = {{
                        iconNumber: <RiNumber1 className='icon-behind' />,
                        iconFront: <CgWebsite className='icon-front' />,
                        boxTitle: "Website",
                        boxText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores adipisci numquam, maiores ad perspiciatis?",
                    }}
                />
                <ServicesBox 
                    properties = {{
                        iconNumber: <RiNumber2 className='icon-behind' />,
                        iconFront: <SiMaterialdesignicons className='icon-front' />,
                        boxTitle: "Graphics",
                        boxText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores adipisci numquam, maiores ad perspiciatis?",
                    }}
                />
                <ServicesBox 
                    properties = {{
                        iconNumber: <RiNumber3 className='icon-behind' />,
                        iconFront: <SiGooglemarketingplatform className='icon-front' />,
                        boxTitle: "Marketing",
                        boxText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores adipisci numquam, maiores ad perspiciatis?",
                    }}
                />
            </div>
        </div>
      </div>    
    </section>
  )
}

export default Services
