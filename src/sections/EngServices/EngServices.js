import './EngServices.css'
import {MainHeading, EngServicesBox} from '../../components/index'
import {GrServices} from 'react-icons/gr'
import {GiMechanicalArm, GiElectricalResistance} from 'react-icons/gi'
import {MdArchitecture} from 'react-icons/md'

// import serv1 from '../../assets/imgs/team1.png'

const EngServices = () => {
  return (
    <section className='eng-services'>
      <div className='container'>
        <MainHeading
          className = "eng-services-heading" 
          properties = {{
            icon : <GrServices />,
            title: "Services",
            subtitle: "What We Do",
        }}
        />
        <div className='eng-services-container'>
          <div className='row'>
              <EngServicesBox 
                properties = {{
                  icon: <GiMechanicalArm className='eng-services-icon' />,
                  title: "Mechanical",
                  feautures: ["2D & 3D Modelling", "Technical Drawing", "Rendering", "Animation", "Idea Suggestion"],
                  description: "Turn Ideas Into Reality",
                  reference: "#",
                  linkName: "More",
                }}
              />
              <EngServicesBox 
                properties = {{
                  icon: <GiElectricalResistance className='eng-services-icon' />,
                  title: "Electrical",
                  feautures: ["2D & 3D Modelling", "Technical Drawing", "Rendering", "Animation", "Idea Suggestion"],
                  description: "Turn Ideas Into Reality",
                  reference: "#",
                  linkName: "More",
                }}
              />
              <EngServicesBox 
                properties = {{
                  icon: <MdArchitecture className='eng-services-icon' />,
                  title: "Design",
                  feautures: ["2D & 3D Modelling", "Technical Drawing", "Rendering", "Animation", "Idea Suggestion"],
                  description: "Turn Ideas Into Reality",
                  reference: "#",
                  linkName: "More",
                }}
              />
              {/* <EngServicesBox 
                properties = {{
                  icon: <MdArchitecture className='eng-services-icon' />,
                  title: "Design",
                  feautures: ["2D & 3D Modelling", "Technical Drawing", "Rendering", "Animation", "Idea Suggestion"],
                  description: "Turn Ideas Into Reality",
                  reference: "#",
                  linkName: "More",
                }}
              /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngServices


