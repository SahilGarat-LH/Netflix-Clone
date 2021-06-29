import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false)
    const history=useHistory()
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return ()=>window.removeEventListener('scroll',transitionNavBar)
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>

            <div className='nav_contents'>

                <img className='nav_logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                onClick={()=>history.push('/')}/>
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                onClick={()=>history.push('/profile')} />
            </div>
        </div>
    )
}

export default Nav
