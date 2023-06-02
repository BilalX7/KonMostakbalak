import './Header.css'
import  {FaBars} from 'react-icons/fa'

import logo from '../../assets/imgs/logo2.png'

import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <header className="main-header">
        <div className="container">
            <div className="logo">
                <a href='/'>
                    <img src={logo} alt="" />
                </a>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <FaBars />
            </label>
            <nav className="main-nav">
                <ul className="ulElements">
                    <NavItem reference="/" linkItem="Home" />
                    {/* <NavItem>
                        <a className=" link-items" href="/">Home</a>
                    </NavItem> */}
                    {/* <NavItemDropDown>
                        <a className="link-items" href="/">Departments</a>
                        <div className="sub-menu">
                            <ul>
                                <li className="sub-menu-items sub-menu-eng"><a className="sub-menu-link" href="#services">Engineering</a></li>
                                <li className="sub-menu-items sub-menu-edu"><a className="sub-menu-link" href="/">Education</a></li>
                                <li className="sub-menu-items sub-menu-mar"><a className="sub-menu-link" href="/">Marketing</a></li>
                            </ul>
                        </div>
                    </NavItemDropDown> */}
                    <NavItemDropDown 
                        properties = {{
                            linkItem: "Departments",
                            reference: ["/engineering", "/#", "/#"],
                            subMenuLinks: ["Engineering", "Education", "Marketing"],
                        }}
                    />
                    <NavItem reference="/#" linkItem="Services" />
                    <NavItem reference="/#" linkItem="About Us" />
                    <NavItem reference="/#" linkItem="Contact" />
                    {/* <NavItem>
                        <a className="link-items" href="#services">Services</a>
                    </NavItem>
                    <NavItem>
                        <a className="link-items" href="/">About Us</a>
                    </NavItem>
                    <NavItem>
                        <a className="link-items" href="/">Contact</a>
                    </NavItem> */}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
