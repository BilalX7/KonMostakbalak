import './DepartmentBox.css'

const DepartmentBox = (props) => {
  return (
    <div className={props.properties.className}>
        <div className='img-holder'>
            <img src={props.properties.image} alt=''></img>
        </div>
        <h2>{props.properties.departmentTitle}</h2>
        <p>{props.properties.departmentInfo}</p>
        <a href={props.properties.reference}>{props.properties.linkName}</a>
    </div>
  )
}

export default DepartmentBox
