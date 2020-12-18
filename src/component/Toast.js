import React,{useState} from 'react'
import './Toast.css'

const Toast = () => {

    const [display,setDisplay] = useState(true)

    const toastClick = () => {
        setDisplay(false)
    }

    return (
        <>
            <div className={display ? "toast__container":"none"}>
                <div className="toast__close">
                    <p onClick={toastClick}>X</p>
                </div>
                <div className="toast__content">
                    <h1>Get latest updates in web technologies</h1>
                    <p>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all. </p>
                    <div className="toast__search">
                        <input type="text" placeholder="Email address"/>
                        <button type="button" className="but2">Count Me In!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast
