import React from 'react'
import '../style/Headers.css'
import ContactMailIcon from '@material-ui/icons/ContactMail'

function Header(){
    return(
        <div>
            <header>
                <div className="login">
                    <ContactMailIcon style={{fontSize:'40px'}} /> Template Forms Login
                </div>
            </header>
        </div>
    )
}

export default Header