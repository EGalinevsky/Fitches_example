import React, { useState } from 'react'
import DropDownItem from './DropDownItem'
import { ReactComponent as CogIcon } from './icon/cog.svg'
import { ReactComponent as ChevronIcon } from './icon/chevron.svg'
import { CSSTransition } from 'react-transition-group'


const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    // function calcHeight(el) {
    //     const height = el.offsetHeight
    //     setMenuHeight(height)
    // }

    console.log(activeMenu)
    return (
        <div className='dropdown' >
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
            // onEnter={calcHeight}
            >
                <div className="menu">

                    <DropDownItem>
                        My Profile
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                        setActiveMenu={setActiveMenu}>
                        Settings
                    </DropDownItem>
                </div>

            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<CogIcon />}
                        goToMenu="main"
                        setActiveMenu={setActiveMenu} />
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                </div>

            </CSSTransition>
        </div>
    )
}

export default DropDownMenu
