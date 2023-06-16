import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useTranslation } from 'react-i18next'

import { FaUser, FaSignOutAlt} from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { HiPencilAlt } from 'react-icons/hi'
import { Divider } from '@material-ui/core'

import './user.css'

function User({user, nav, logout}) {
    const { t } = useTranslation();

    const [anchor, setAnchor]=useState(null)
    const open=Boolean(anchor)
    const show=(e)=>{
        setAnchor(e.currentTarget)
    }
    const close=()=>setAnchor(null)
    const click=(route)=>{
        close()
        nav(route)
    }
    const logOut=()=>{
        close()
        logout()
        // nav('/login')
    }
    // console.log('utilisateur',user)
    return (
    <>
        {/* <li className={user.userId ? "nav-link user-button connected" : "nav-link user-button" } onClick={(e)=>show(e)} >
            <FaUser color="#fff" />
            ACCOUNT
        </li> */}
        <li className="nav-link user" onClick={(e)=>show(e)} >
        <i className='mobi-icon'><MdAccountCircle/></i>
            {t('accountButton')}
        </li>
        <div className="user-menu">
            <Menu id="basic-menu" anchorEl={anchor} open={open}
                    transformOrigin={{
                        vertical: -50,
                        horizontal: 10,
                    }}
                    onClose={close}
                >
                    <MenuItem onClick={user.userName ? ()=>nav("/Dashboard") : ()=>click('/login/' +process.env.REACT_APP_LOGIN_LINK )}>
                        <span className="menu-text">
                            {   user.userName ? (<span className='text-us'>
                                                    {user.userName.charAt(0)}
                                                </span>)  
                                :   (<span><FaUser fontSize="large"/></span>) 
                            }
                             &ensp;  
                            {user.userName ? "Dashboard " : t('user1') }  </span>
                    
                    </MenuItem>
                    <MenuItem onClick={()=>click('/signup/' +process.env.REACT_APP_SIGUNP_LINK )}>
                    <span className="menu-text"><HiPencilAlt fontSize="large" /> &ensp;{t('user2')} </span>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={logOut}>
                    <span className="menu-text"><FaSignOutAlt fontSize="large" /> &ensp;{t('user3')}  </span>
                    </MenuItem>
            </Menu>
        </div>
    </>

    )
}

export default User
