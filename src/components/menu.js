import React, { Component } from 'react'
import styles from '../styles/main.scss'
import MENU_ITEMS from '../resources/menu-items.json';
import MenuItem from './menu-item'

class Menu extends Component {
    render () {
        const navItems = []

        MENU_ITEMS.forEach(i => {
            navItems.push(<MenuItem link={i.link}>{i.value}</MenuItem>)
        })

        return (
            <div className={styles['menu-container']}>
                <div className={styles['menu-item']}>
                    {navItems}
                </div>
            </div>
        )
    }
}

export default Menu