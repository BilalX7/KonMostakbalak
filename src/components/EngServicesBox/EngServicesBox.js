import './EngServicesBox.css'
import { EngButton } from '../index'

const EngServicesBox = (props) => {
  return (
        <div className='col-lg-4 col-md-6 mb-5 gap-3'>
                <div className='card shadow'>
                    {props.properties.icon}
                    <div className='card-body'>
                    <h3 className='text-center'>{props.properties.title}</h3>
                    <hr className='mx-auto w-50' />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.properties.feautures[0]}</li>
                        <li className="list-group-item">{props.properties.feautures[1]}</li>
                        <li className="list-group-item">{props.properties.feautures[2]}</li>
                        <li className="list-group-item">{props.properties.feautures[3]}</li>
                        <li className="list-group-item">{props.properties.feautures[4]}</li>
                    </ul>
                    <h4 className='text-uppercase text-dark fw-bold mt-3 '>{props.properties.description}</h4>
                    <EngButton link={props.properties.reference} linkName={props.properties.linkName} />                    
                    </div>
                </div>
        </div>
  )
}

export default EngServicesBox
