import './MemberCard.css'

const MemberCard = (props) => {
  return (
    <div className='col-lg-6 col-sm-12 mt-4'>
        <div className='member d-flex align-items-start'>
            <div className='teampic'>
                <img src={props.image} alt='team1' className='img-fluid' />
            </div>
            <div className='member-info'>
                <h4>{props.name}</h4>
                <span>{props.position}</span>
                <p>{props.memberInfo}</p>
                <div className='social'>
                    <a href='#1'>{props.social[0]}</a>
                    <a href='#1'>{props.social[1]}</a>
                    <a href='#1'>{props.social[2]}</a>
                    <a href='#1'>{props.social[3]}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberCard
