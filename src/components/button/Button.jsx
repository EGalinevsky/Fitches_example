import React from 'react'
import s from '../button/button.module.css'


const Button = ({ text }) => {
    return (
        <button className={s.btn}>
            {text}
        </button>
    )
}

export default Button
