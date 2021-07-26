import React, {useState} from 'react'
import '../style/login.css';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';

function Login(){

    const [login, setLogin] = useState(true)

    const [register , setRegister] = useState(false)

    const Field_Login = () =>{
        return(
            <div>
                <h2 style={{textAlign:"center"}}>Faça Login</h2>
                 <div className="space-login">
                    <EmailIcon/>
                    <input type="email" placeholder="Exemplo123@gmail.com" />
                </div>

                <div className="space-login">
                    <LockIcon/>
                    <input type="password" placeholder="12345678" />
                </div>

                <button className="btn">Login</button>
            </div>
        )
    }

    const Field_Register = () =>{
        return(
            <div>
                <h2 style={{textAlign:"center"}}>Registre-se</h2>
                <div className="space-login">
                    <PersonIcon/>
                    <input type="text" placeholder="Username" />
                </div>

                 <div className="space-login">
                    <EmailIcon/>
                    <input type="email" placeholder="Exemplo123@gmail.com" />
                </div>

                <div className="space-login">
                    <LockIcon/>
                    <input type="password" placeholder="12345678" />
                </div>

                <button className="btn">Register account</button>
            </div>
        )
    }

    return(
        <div>
            <div className="fields">
               <div className="add">
                    <div className="add-2" style={{backgroundColor:login? "#91fffb" : "#fff", borderBottomLeftRadius:login? "20px": "20px", borderBottomRightRadius:login? "0px": "20px" }} onClick={()=>{
                        if(login){
                            setLogin(true)
                            setRegister(false)
                        }else{
                            setLogin(true)
                            setRegister(false)
                        }
                    }} ><PersonIcon  /> Login</div>

                    <div className="add-2" style={{backgroundColor:register? "#91fffb": "#fff", borderBottomLeftRadius:register? "0px": "20px", borderBottomRightRadius:register? "20px": "20px" }} onClick={()=>{
                        if(login){
                            setLogin(false)
                            setRegister(true)
                        }else{
                                setLogin(false)
                                setRegister(true)
                        }
                    }} ><PersonAddIcon/> Register</div>
               </div>

                <div className="field">
                   {login? (<Field_Login/>) : (<Field_Register/>)}
                </div>
            </div>
        </div>
    )
}

export default Login