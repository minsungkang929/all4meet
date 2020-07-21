import React from "react"
import {Link} from 'react-scroll'

const Navigator = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
            <Link  activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}>
                <a href="" className="navbar-brand">All4Meet</a>
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColapse" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColapse">
                <ul className="navbar-nav ml-auto">
                    <Link className="nav-item"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={1000}> 
                        <a href="" className="nav-link" >Home</a>
                    </Link>
                    <Link className="nav-item"
                        activeClass="active"
                        to="feature"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={1000}> 
                        <a href="" className="nav-link" >Features</a>
                    </Link>
                    <Link className="nav-item"
                        activeClass="active"
                        to="Support"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={1000}> 
                        <a href="" className="nav-link" >Support</a>
                    </Link>
                    <Link className="nav-item"
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={1000}> 
                        <a href="" className="nav-link" >Contact</a>
                    </Link>
                </ul>
                <div className="user">
                    <i className="fa fa-user-circle fa-2x" ></i>
                    <span className="Sign">Sign up</span>
                </div>
            </div>  
        </nav>
    )
}

export default Navigator;