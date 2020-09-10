import React from 'react'
import { loadText } from '../operations';
import Fade from 'react-reveal/Fade'
import styles from '../styles/main.scss'

export const Menu = ({ scrollToAboutNode,
    scrollToProjectsNode,
    scrollToContactNode }) => {

    const navItems = [
        <li onClick={() => scrollToAboutNode()}>{loadText('menu-item-about')}</li>,
        <li onClick={() => scrollToProjectsNode()}>{loadText('menu-item-projects')}</li>,
        <li onClick={() => scrollToContactNode()}>{loadText('menu-item-contact')}</li>
    ]

    return (
        <Fade top cascade>
            <ul>
                {navItems}
            </ul>
            <div className={styles['flex-container']}>
                <div className={styles['stripe-item']} />
            </div>
        </Fade>
    )

}