import React from 'react'
import './styles.css'


 const Header = (props) => {
    return (
        <div>
            <header className="header">
           <nav className="headerMenu">
               <a href="#">Home</a>
               <a href="#">About-us</a>
               <a href="#">Contact</a>
               <a href="#">Dashboard</a>
           </nav>
           <div className="auth">
           <a href="#">Login</a>
           </div>
           </header>
        </div>
    )
}

export default Header