import './ServicesBox.css'

const ServicesBox = (props) => {
  return (
    <div className='feat col-lg-4 col-md-6'>
        <div className='icon-holder position-relative'>
            {props.properties.iconNumber}
            {props.properties.iconFront}
        </div>
        <div className='text'>
            <h2 className='my-4 text-uppercase'>{props.properties.boxTitle}</h2>
            <p className='text-content lh-base'>{props.properties.boxText}</p>
        </div>
    </div>
  )
}

export default ServicesBox
