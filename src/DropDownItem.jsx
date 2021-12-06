import React, { useState } from 'react'

const DropDownItem = (props) => {
    const [activeMenu, setActiveMenu] = useState('main')

    return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">
                {props.leftIcon}
            </span>
            {props.children}
            <span className="icon-right">
                {props.rightIcon}
            </span>
        </a>
    )
}

export default DropDownItem
