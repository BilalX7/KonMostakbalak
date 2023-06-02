import './Buttons.css'

const PrimaryButton = (props) => {
    return (
        <a className='btn btn-st landing-btn1' href={props.link}>{props.linkName}</a>
        )
}

const SecondaryButton = (props) => {
    return (
        <a className='btn landing-btn2' href={props.link}>{props.linkName}</a>
        )
}
const EngButton = (props) => {
    return (
        <a className='eng-btn' href={props.link}>{props.linkName}</a>
        )
}

export default PrimaryButton
export {SecondaryButton}
export {EngButton}
