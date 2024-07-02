import { useEffect, useState } from 'react'
import { List } from '@phosphor-icons/react'

export function Menu({ children }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleMenu = () => setIsExpanded(x => !x)

    useEffect(() => {
        const time = 400

        const menu = $('.menu')
        const label = $('.menu-item-label')

        if (isExpanded) {
            // Neste exemplo o fadeIn executa depois que o animate() termina
            menu.animate({ width: '12vw' }, time, () => label.fadeIn(time / 4))
        } else {
            // Aqui o fateOut executa enquanto o animate acontece
            label.fadeOut(time / 2)
            menu.animate({ width: '4vw' }, time)
        }

        // controle para cada vez que o menu é expandido ou colapsado
    }, [isExpanded])

    return (
        <aside className='menu'>
            <List size={42} className='menu-btn' onClick={handleMenu} />

            <nav className='menu-items'>
                {children}
            </nav>
        </aside>
    )
}