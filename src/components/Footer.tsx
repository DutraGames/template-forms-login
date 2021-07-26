import React from 'react'
import '../style/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'


function Footer(){
    return(
        <div>
            <footer>
                <div className="icons">
                    <a href="https://github.com/DutraGames" target="_blank"><GitHubIcon style={{fontSize:'40px', color:'#fff'}}/></a>
                    <a href="https://www.youtube.com/lutriz" target="_blank"><YouTubeIcon style={{fontSize:'40px', color:'#fff'}}/></a>
                </div>

                <p className="copy">&copy; Gabriel Dutra</p>
            </footer>
        </div>
    )
}

export default Footer