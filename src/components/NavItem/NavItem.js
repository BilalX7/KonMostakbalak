import { Link } from 'react-router-dom'

import './NavItem.css'

// const NavItem = (props) => {
//   return (
//     <li className="list-items">
//         {props.children}
//     </li>
//   )
// }
const NavItem = (props) => {
  return (
    <li className="list-items">
        <Link to={props.reference} className=" link-items">{props.linkItem}</Link>
        {/* <a className=" link-items" href={props.reference}>{props.linkItem}</a> */}
    </li>
  )
}

// const NavItemDropDown = (props) => {
//     return (
//         <li className="list-items drop-menu">
//             {props.children}
//         </li>
//     )
// }
const NavItemDropDown = (props) => {
    return (
        <li className="list-items drop-menu">
            <a className="link-items" href="#departments">{props.properties.linkItem}</a>
            <div className="sub-menu">
                <ul>
                    <li className="sub-menu-items sub-menu-eng">
                        <Link to={props.properties.reference[0]} className="sub-menu-link">{props.properties.subMenuLinks[0]}</Link>
                        {/* <a className="sub-menu-link" href={props.properties.reference[0]}>{props.properties.subMenuLinks[0]}</a> */}
                    </li>
                    <li className="sub-menu-items sub-menu-edu">
                        <Link to={props.properties.reference[1]} className="sub-menu-link">{props.properties.subMenuLinks[1]}</Link>
                        {/* <a className="sub-menu-link" href={props.properties.reference[1]}>{props.properties.subMenuLinks[1]}</a> */}
                    </li>
                    <li className="sub-menu-items sub-menu-mar">
                        <Link to={props.properties.reference[2]} className="sub-menu-link">{props.properties.subMenuLinks[2]}</Link>
                        {/* <a className="sub-menu-link" href={props.properties.reference[2]}>{props.properties.subMenuLinks[2]}</a> */}
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default NavItem
export {NavItemDropDown}
