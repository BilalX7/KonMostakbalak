import './MainHeading.css'

const MainHeading = (props) => {
  return (
    <div className="main-heading">
        <span>{props.properties.icon}</span>
        <h2>{props.properties.title}</h2>
        <p>{props.properties.subtitle}</p>
    </div>
  )
}

export default MainHeading
