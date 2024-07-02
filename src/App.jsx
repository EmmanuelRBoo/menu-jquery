import { useState, useEffect } from 'react'
import { House, AddressBook } from '@phosphor-icons/react'

import { Menu } from './components/menu'

function App() {
    useEffect(() => {
        $('#teste').on('click', (e) => {
            alert('teste')
        })
    }, [])

    return (
        <div>
            <Menu>
                <div className='menu-item'>
                    <House size={28} className='menu-item-icon' />
                    <span className='menu-item-label'>Home</span>
                </div>
                <div className='menu-item'>
                    <AddressBook size={28} className='menu-item-icon' />
                    <span className='menu-item-label'>Contacts</span>
                </div>
            </Menu>
        </div>
    )
}

export default App
