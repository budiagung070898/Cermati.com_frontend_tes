import React,{useState} from 'react'
import './Notif.css'

const Notif = () => {

    const [display,setDisplay] = useState(true)

    const notifClick = () => {
        setDisplay(false)
    }
    return (
        <>
            <div className={display? "notif__container": "lost"}>
                <div className="notif__wrap">
                    <p>By accessing and using this website, you acknowledge that you have read and understand our <a href="/">Cookie Policy</a>, <a href="/">Privacy Policy</a>, and our <a href="/">Terms of Service.</a></p>
                    <button onClick={notifClick}>Got it</button>
                </div>
            </div>
        </>
    )
}

export default Notif
