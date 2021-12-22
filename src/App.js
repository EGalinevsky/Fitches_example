import React, { useState } from 'react'
import Navbar from './Navbar';
import NavItem from './NavItem';
import { ReactComponent as PlusIcon } from './icon/plus.svg'
import { ReactComponent as BellIcon } from './icon/bell.svg'
import { ReactComponent as MessengerIcon } from './icon/messenger.svg'
import { ReactComponent as CaretIcon } from './icon/caret.svg'
import DropDownMenu from './DropDownMenu';

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        1
        <NavItem icon={<CaretIcon />}>
          <DropDownMenu />
        </NavItem>
      </Navbar>
    </>
  );
}



export default App;
